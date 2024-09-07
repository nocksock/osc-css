import { defineConfig } from 'vite'

export default defineConfig(() => ({
  esbuild: {
    minifySyntax: true,
    minifyWhitespace: true,
  },
  build: {
    outDir: './dist/assets',
    lib: {
      entry: './docs/assets/main.ts',
      name: "main",
      formats: ['es'],
      fileName: 'main',
    },
  }
}))
