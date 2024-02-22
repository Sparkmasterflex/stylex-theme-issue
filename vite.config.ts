import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import styleX from 'vite-plugin-stylex'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleX(),
    cssInjectedByJsPlugin(),
  ],

  server: {
    port: 3301,
  },

  resolve: {
    alias: {
      '@theme': path.resolve(__dirname, './src/theme'),
    }
  },

  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, './src/index.js'),
      formats: ['es']
    },
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      }
    }
  }
})
