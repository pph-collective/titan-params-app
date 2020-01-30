<template>
  <div class="uk-box-shadow-small uk-padding-none">
    <div class="uk-padding-small">
      <div class="header">
        <vk-icon icon="chevron-right" ratio="0.7"></vk-icon>
        <h4 class="mono">{{title}}</h4>
        <p v-if="type" class="mono"> ::{{type}}</p>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParamHeader',
  props: {
    title: String,
    type: String
  }
}
</script>

<style lang="scss">

.header * {
  display: inline;
}

h4 {
  margin: 0px;
}

.mono {
  font-family: monospace;
}
</style>
