<template>
  <div id="app">
    <div v-if="errored">
      <h1>Error!</h1>
    </div>
    <div v-else-if="loading">
      <vk-spinner></vk-spinner>
    </div>
    <div v-else>
      <SideBar :sections="sections"/>
      <router-view :params="params"/>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  name: "app",
  components: {
    SideBar,
  },
  props: {
    params: Object,
    loading: Boolean,
    errored: Boolean
  },
  data: function () {
    return {
      localParams: this.params
    }
  },
  computed: {
    sections: function() {
      return Object.keys(this.localParams)
    }
  }
};
</script>

<style lang="scss">
</style>
