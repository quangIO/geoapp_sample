import Vue from "vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";
import App from "./App.vue";
import router from "./router";
import { MAPBOX_ACCESS_TOKEN } from "./config/dev.env";

Vue.config.productionTip = false;
Vue.prototype.$MAPBOX_ACCESS_TOKEN = MAPBOX_ACCESS_TOKEN;

Vue.use(VueMapbox, { mapboxgl: Mapbox });
Vue.use(Vuesax);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
