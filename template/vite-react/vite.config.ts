import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import { createStyleImportPlugin } from 'vite-plugin-style-import';
import svg from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? './' : '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      // antd中dayjs替换moment
      'rc-picker/es/generate/moment': 'rc-picker/es/generate/dayjs'
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        /**
         * 主题修改 该方案不支持动态改变
         * 如需动态修改建议使用CSS Variable方案
         * （
         *    需注释下面createStyleImportPlugin插件，在css中引入antd.variable.min.css
         * ）
         */
        modifyVars: {
          '@primary-color': 'red'
        }
      }
    },
    postcss: {
      plugins: [tailwindcss]
    }
  },
  plugins: [
    react(),
    createStyleImportPlugin({
      resolves: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: name => `antd/es/${name}/style/index.less`
        }
      ]
    }),
    svg({
      include: 'src/icons/*.svg?react',
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgo: true,
        svgProps: {
          fill: 'currentColor'
        },
        svgoConfig: {
          plugins: [
            {
              name: 'removeAttrs',
              params: {
                attrs: ['fill-rule', 'fill']
              }
            }
          ]
        }
      }
    }),
    mode === 'analyzer' && visualizer({ open: true }),
    mode === 'production' &&
      compression({
        filter: new RegExp('\\.(' + ['css', 'js'].join('|') + ')$'),
        threshold: 10240
      })
  ],
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://121.36.60.52:7001',
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
}));
