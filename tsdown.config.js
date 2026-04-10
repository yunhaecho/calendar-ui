import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: './src/index.ts',
  format: ['esm', 'cjs'],
  publint: true,
  dts: {
    sourcemap: true,
  },
  minify: true,
  clean: true,
})
