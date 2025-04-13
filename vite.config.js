import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import react from "@vitejs/plugin-react";
import fs from "fs/promises";
import { defineConfig } from "vite";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import { compression } from "vite-plugin-compression2";
import eslint from "vite-plugin-eslint";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import vitePluginRequire from "vite-plugin-require";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src", "components"),
      assets: path.resolve(__dirname, "src", "assets"),
      constants: path.resolve(__dirname, "src", "constants"),
      utils: path.resolve(__dirname, "src", "utils"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: "jsx",
              contents: await fs.readFile(args.path, "utf8"),
            }));
          },
        },
      ],
    },
  },
  server: {
    open: true,
    port: 3000,
  },
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    viteTsconfigPaths(),
    svgrPlugin(),
    eslint(),
    compression(),
    ViteImageOptimizer(),
    chunkSplitPlugin(),
    viteCommonjs(),
    vitePluginRequire(),
  ],
});
