import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import "./axios";
import locale from "element-ui/lib/locale/lang/vi.js";
import VueAnime from "vue-animejs";
import { store } from "./store";
import { VLazyImagePlugin } from "v-lazy-image";
import VueScrollTo from "vue-scrollto";
import VueFbCustomerChat from "vue-fb-customer-chat";

Vue.use(VLazyImagePlugin);
Vue.use(VueAnime);
Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });
Vue.use(VueScrollTo, {
  container: "body",
  duration: 200,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

Vue.use(VueFbCustomerChat, {
  page_id: 111276851936819, //  change 'null' to your Facebook Page ID,
  theme_color: "#006AFF", // theme color in HEX
  locale: "en_US", // default 'en_US'
});
new Vue({
  router,
  store,
  el: "#app",
  render: (h) => h(App),
}).$mount("#app");
