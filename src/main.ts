import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./lang/index";

import '@/styles/global.scss'
import '@/styles/constants.scss'

createApp(App)
  .use(router)
  .use(i18n)
  .mount("#app");
