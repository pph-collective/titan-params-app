<template>
  <div class="main uk-section uk-section-default">
    <div class="uk-container">
      <h1>Params</h1>
      <Param :level="1" :params="params" />
    </div>
  </div>
</template>

<script>
import Param from '@/components/Param.vue'

export default {
  name: 'MainContent',
  components: {
    Param
  },
  props: {
    params: Object
  }
}
</script>

<style lang="scss">
.sidebar-left+.main {
    padding-left: 240px;
}
</style>
