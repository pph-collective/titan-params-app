import Vue from "vue"
import App from "./App.vue"

import axios from "axios"
import yaml from "yaml"

import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import '@vuikit/theme';

Vue.use(Vuikit)
Vue.use(VuikitIcons)

Vue.config.productionTip = false

// default branch is master, but can overwrite with env
const branch = process.env.VUE_APP_TITAN_BRANCH || "master"
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.VUE_APP_GH_TOKEN}`;

new Vue({
  el: "#app",
  render: function(h) {
    return h(App, {
      props: {
        params: this.params,
        loading: this.loading,
        errored: this.errored
      }
    })
  },
  data: {
    params: {},
    loading: true,
    errored: false
  },
  mounted () {
    let url = `https://api.github.com/repos/marshall-lab/TITAN/contents/titan/params?ref=${branch}`

    axios
      .get(url)
      .then(response => {
        response.data.map(val => {
          let name = val.name.split(".")[0]
          axios
            .get(val.url)
            .then(file => {
              let param = yaml.parse(atob(file.data.content))
              Vue.set(this.params, name, param[name])
            })
        })
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
});
