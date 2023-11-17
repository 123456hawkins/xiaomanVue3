import { fileURLToPath, URL } from 'node:url'
// loadEnv读取环境变量
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsx from './plugin/index'
import { visualizer } from 'rollup-plugin-visualizer'
// https://vitejs.dev/config/
export default ({ mode }: any) => {
  console.log(mode);

  console.log(loadEnv(mode, process.cwd()));

  return defineConfig({
    plugins: [
      vue(), tsx(),visualizer({open:true})
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import './src/bem.scss';"
        }
      }
    },
    build:{
      chunkSizeWarningLimit:2000,
      cssCodeSplit:true,
      sourcemap:false,
      minify:'esbuild',
      assetsInlineLimit:4000
    }

  })
}
