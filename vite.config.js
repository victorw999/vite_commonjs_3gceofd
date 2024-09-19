//vite.config.js
import { defineConfig } from 'vite';
import commonjs from '@rollup/plugin-commonjs';
// import commonjs from 'vite-plugin-commonjs'
// import vitePluginRequire from "vite-plugin-require";

export default defineConfig({
  plugins: [
    commonjs({
      include: [
        'src/**', // Include your source code directory
        //'node_modules/**', // Optionally include CommonJS dependencies from node_modules
      ],
      dynamicRequireTargets: [
        'src/**/*.js', // Target files that might use dynamic `require()`
      ],
    }),
  ],
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
