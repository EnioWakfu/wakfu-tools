const path = require("path");

module.exports = {
  css: {
    extract: false,
  },
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/wakfu-tools/' : '/',
  outputDir: path.resolve(__dirname, "docs"),
  transpileDependencies: [
    'vuetify'
  ]
}
