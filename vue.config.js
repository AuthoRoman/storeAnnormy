const { defineConfig } = require("@vue/cli-service");

const path = require("path");

module.exports = defineConfig({
  publicPath: "/",
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
    },
  },
  configureWebpack: {
    plugins: [],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  css: {
    loaderOptions: {
      less: {},
    },
  },
});
