import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';

function build(relativePath: string) {
  return path.resolve(__dirname, relativePath);
}

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
    alias: {
      '#': build('src'),
      '#class-transformer': build('libs/class-transformer'),
      '#@nestjs/common': build('libs/@nestjs/common'),
      '#@nestjs/mapped-types': build('libs/@nestjs/mapped-types'),
    },
  },
});
