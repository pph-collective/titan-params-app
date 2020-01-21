<template>
  <div class="main uk-section uk-section-default">
    <div class="uk-container">
      <Param level=1 :params="params" />
    </div>
  </div>
</template>

<script>
import Param from './Param.vue'

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

.main{
  padding-top: 70px;
}
</style>
