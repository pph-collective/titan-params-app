<template>
  <div id="app">
    <Navigation />
    <div v-if="errored">
      <h1>Error!</h1>
    </div>
    <div v-else-if="loading">
      <vk-spinner></vk-spinner>
    </div>
    <div v-else>
      <SideBar :sections="sections"/>
      <MainContent :params="localParams"/>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import SideBar from "./components/SideBar.vue";
import MainContent from "./components/MainContent.vue";

export default {
  name: "app",
  components: {
    Navigation,
    SideBar,
    MainContent
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
