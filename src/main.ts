import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./lang/index";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faEnvelope, faPhone, faShoppingBag, faForward, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faEnvelope, faPhone, faShoppingBag, faForward, faAngleUp, faAngleDown)

import '@/styles/global.scss'
import '@/styles/icon-effects.scss'

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(i18n)
  .mount("#app");
