import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';

dotenv.config();

// TODO
const basepath = process.env.VITE_BASE_PATH ?? '/';
console.log('basepath : ', basepath);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basepath,
  server: {
    host: '0.0.0.0',
    port: 3101,
  },
  resolve: {
    alias: {},
  },
});
