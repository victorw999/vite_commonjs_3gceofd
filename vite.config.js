//vite.config.js
import { defineConfig } from 'vite';
// import commonjs from '@rollup/plugin-commonjs';
// import commonjs from 'vite-plugin-commonjs';
import vitePluginRequire from 'vite-plugin-require';

export default defineConfig({
  plugins: [vitePluginRequire.default()],

  build: {
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      preserveEntrySignatures: true,
      input: 'src/main.js',
      output: [
        {
          format: 'esm',
          dir: 'output',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      ],
    },
  },
});
