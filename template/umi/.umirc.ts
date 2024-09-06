import { defineConfig } from 'umi';

import routes from './src/router';

export default defineConfig({
  plugins: [require.resolve('@umijs/plugins/dist/unocss')],
  unocss: {
    // 检测 className 的文件范围，若项目不包含 src 目录，可使用 `pages/**/*.tsx`
    watch: ['src/**/*.tsx']
  },
  routes,
  npmClient: 'pnpm',
  alias: {
    '@': './src',
  },
});
