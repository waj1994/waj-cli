import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import px2vw from 'postcss-px-to-viewport';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import vitePluginImp from 'vite-plugin-imp';
import svg from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? './' : '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {}
    },
    postcss: {
      plugins: [
        tailwindcss,
        px2vw({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 375, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          landscape: false // 是否处理横屏情况
        })
      ]
    }
  },
  plugins: [
    react(),
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
    vitePluginImp({
      libList: [
        {
          libName: '@nutui/nutui-react',
          style: name => {
            return `@nutui/nutui-react/dist/esm/${name}/style/css`;
          },
          replaceOldImport: false,
          camel2DashComponentName: false
        }
      ]
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
