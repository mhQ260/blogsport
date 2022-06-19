import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/

export default defineConfig(mode => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };

  return {
    base: '/',
    server: {
      port: process.env.VITE_APP_PORT || 3000,
      strictPort: false,
    },
    resolve: {
      alias: [
        {
          find: '~@',
          replacement: path.resolve(__dirname, 'src'),
        },
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
      ],
      extensions: [
        '.mjs',
        '.js',
        '.ts',
        '.json',
        '.vue',
      ],
    },
    plugins: [
      vue(),
      eslintPlugin(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/config.scss";',
        },
      },
    },
  };
});

