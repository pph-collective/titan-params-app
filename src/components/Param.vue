<template>
  <div>
    <div v-for="(param, name) in params" :style="style" :key="name" :id="name">
      <h4>{{name}}</h4>
      <div v-if="'default' in param">
        <p>{{param}}</p>
      </div>
      <Param v-else :level="nextLevel" :params="param" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Param',
  props: {
    level: Number,
    params: Object
  },
  computed: {
    style: function() {
      return `padding-left: ${this.level * 10}px`
    },
    nextLevel: function() {
      console.log( Number(this.level) + 1)
      return Number(this.level) + 1
    }
  }
}
</script>

<style lang="scss">
</style>
