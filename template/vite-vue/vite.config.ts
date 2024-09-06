import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { visualizer } from 'rollup-plugin-visualizer'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? './' : '/',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [
    AutoImport({
      imports: ['vue', 'vue-router']
    }),
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    UnoCSS(),
    vue(),
    createSvgIconsPlugin({
      // 指定存放svg的文件夹路径
      iconDirs: [path.resolve(__dirname, './src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]',
      svgoOptions: {
        full: true,
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: 'fill'
            }
          }
        ]
      }
    }),
    mode === 'production' &&
      compression({
        filter: new RegExp('\\.(' + ['css', 'js'].join('|') + ')$'),
        threshold: 10240
      }),
    visualizer({
      open: true // 自动打开
    })
  ],
  esbuild:
    mode === 'production'
      ? {
          pure: ['console.log'], // 删除 console.log
          drop: ['debugger'] // 删除 debugger
        }
      : {},
  build: {},
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
}))
