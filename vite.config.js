import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // This site is hosted at https://pranaypr9.github.io/portfolio/
  base: '/portfolio/',
});
