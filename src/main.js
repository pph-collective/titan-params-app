import Vue from "vue"

import App from "./App.vue"

import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import '@vuikit/theme';

import VueHighlightJS from 'vue-highlightjs'

import router from './router'
import paramData from './assets/data.json'

Vue.use(Vuikit)
Vue.use(VuikitIcons)
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  el: "#app",
  router: router,
  render: function(h) {
    return h(App, {
      props: {
        params: this.params,
        errored: this.errored
      }
    })
  },
  data: {
    params: paramData,
    errored: false
  },
});
