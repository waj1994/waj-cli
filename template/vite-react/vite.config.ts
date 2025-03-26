import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import { viteMockServe } from 'vite-plugin-mock'
import svg from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    svg({
      include: 'src/icons/*.svg?react',
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgo: true,
        svgProps: {
          fill: 'currentColor',
        },
        svgoConfig: {
          plugins: [
            {
              name: 'removeAttrs',
              params: {
                attrs: ['fill-rule', 'fill'],
              },
            },
          ],
        },
      },
    }),
    mode === 'analyzer' && visualizer({ open: true }),
    mode === 'production'
    && compression({
      filter: new RegExp(`\\.(${['css', 'js'].join('|')})$`),
      threshold: 10240,
    }),
    mode === 'mock'
    && viteMockServe({
      mockPath: './mock',
      enable: true,
    }),
  ],
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://10.16.26.2:8300',
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
}))
