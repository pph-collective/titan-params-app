<template>
  <div class="main uk-section uk-section-default" v-highlightjs>
    <div class="uk-container">
      <span v-html="docsMd"></span>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import rawMd from '../markdown/docs.md'

export default {
  name: 'DocsContent',
  data: function () {
    return {
      docsMd: marked(rawMd)
    }
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
