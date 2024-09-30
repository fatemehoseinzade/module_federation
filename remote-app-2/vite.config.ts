import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote-app-2',
      filename: 'remoteEntry.js',
      exposes: {
        "./App": './src/App.tsx'
      },
      shared: ['react', 'react-dom']
    }),

  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
