import { defineConfig } from 'vite';
import { VitePresetReact } from '@vitejs/plugin-react';
import { VitePluginTailwind } from 'vite-plugin-tailwind';

export default defineConfig({
  plugins: [
    VitePresetReact(),
    VitePluginTailwind(),
  ],
});
