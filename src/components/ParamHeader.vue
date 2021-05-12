<template>
  <div class="uk-box-shadow-small uk-padding-none">
    <div class="uk-padding-small">
      <div class="header" v-on:click="showItem = !showItem">
        <vk-icon v-if="showItem" icon="chevron-down" ratio="0.7"></vk-icon>
        <vk-icon v-else icon="chevron-right" ratio="0.7"></vk-icon>
        <h4 class="mono">{{title}}</h4>
        <p v-if="type" class="mono"> ::{{type}}</p>
      </div>

      <div v-show="showItem">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParamHeader',
  props: {
    title: String,
    type: String
  },
  data: function() {
    return {
      showItem: true,
    }
  }
}
</script>

<style lang="scss">
.header * {
  display: inline;
  cursor: pointer;
}

h4 {
  margin: 0px;
}

.mono {
  font-family: monospace;
}
</style>
