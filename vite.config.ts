import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import postcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/auth-form/",
  plugins: [svelte()],
  css: {
    postcss: {
      plugins: [postcssPresetEnv]
    }
  }
})
