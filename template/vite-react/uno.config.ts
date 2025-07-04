import { defineConfig, presetAttributify, presetWind3, } from 'unocss'

export default defineConfig({
  // ...UnoCSS 选项
  presets: [
    presetAttributify(),
    presetWind3()
  ],
})