import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

Vue.use(VueResource);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
