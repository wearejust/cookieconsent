import { resolve } from "path";

export default ({ mode }) => ({
  root: "src",
  base: "/dist",

  build: {
    outDir: resolve(process.cwd(), "dist"),
    emptyOutDir: true,
    rollupOptions: { input: resolve(process.cwd(), "src/cookieconsent.js"), strict: true },
    lib: {
      entry: 'src/cookieconsent.js',
      name: 'cookieconsent',
      fileName: 'cookieconsent',
    },
  },
});