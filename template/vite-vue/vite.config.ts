import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'node:path'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import { viteMockServe } from 'vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    vueJsx(),
    tailwindcss(),
    AutoImport({
      resolvers: [AntDesignVueResolver()],
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core']
    }),
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(__dirname, './src/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
      svgoOptions: {
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: '(fill|stroke)'
            }
          }
        ]
      }
    }),
    mode === 'analyzer' && visualizer({ open: true }),
    mode === 'production' &&
      compression({
        filter: new RegExp(`\\.(${['css', 'js'].join('|')})$`),
        threshold: 10240
      }),
    mode === 'mock' &&
      viteMockServe({
        mockPath: './mock',
        enable: true
      })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://10.16.26.126:8900',
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
}))
