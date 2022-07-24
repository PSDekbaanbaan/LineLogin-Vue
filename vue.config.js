const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src"),
        "@views": path.join(__dirname, "./src/views"),
        "@components": path.join(__dirname, "./src/components"),
        "@assets": path.join(__dirname, "./src/assets"),
        "@js": path.join(__dirname, "./src/js"),
      },
    },
  },
  transpileDependencies: ["vuetify"],
  devServer: {
    disableHostCheck: true,
  },
};
