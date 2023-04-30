module.exports = {
  pluginOptions: {
    i18n: {
      locale: "fr",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/styles/constants.scss";`
      }
    }
  }
};