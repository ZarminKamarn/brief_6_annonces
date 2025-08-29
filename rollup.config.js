import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const isProduction = process.env.NODE_ENV === "production";

export default {
  input:  ["src/ts/skillSelection.ts", "src/ts/navBarButton.ts"],
  output: [
    {
      dir: "public/js/",
      format: "cjs",
      sourcemap: !isProduction,
    },
  ],
  plugins: [
    typescript({
      compilerOptions: { module: "esnext" },
      outDir: "public/js",
    }),
    isProduction &&
      terser({
        compress: { drop_console: true },
      }),
  ],
};