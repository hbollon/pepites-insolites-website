module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/constants.scss";`
      }
    }
  }
};