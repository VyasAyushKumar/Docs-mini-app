import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/docs-mini-app/", // Apne GitHub repository ke naam ka sahi use karein
});