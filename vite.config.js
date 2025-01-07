import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "esnext",
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/scss/_preset.scss" as *;', //@import規則將在3.0.0棄用，改用@use
        api: 'modern-compiler', // or "modern" //避免一直跳警告
      },
    },
  },
  configureWebpack: (config) => {
    config.module.rules.push({
      test: /\.webp$/i,
      use: ["file-loader"],
    });
  },
})
