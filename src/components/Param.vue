<template>
  <div :style="style">
    <div v-for="(param, name) in params" :key="name" :id="name">
      <Field v-if="param.constructor !== Object" :name="name" :item="param" />
      <div v-else>
        <hr v-if="level == 1">
        <h4>{{name}}</h4>
        <div v-if="'default' in param">
          <ParamItem :params="param" :level="level"/>
        </div>
        <Param v-else-if="(!!param) && (param.constructor === Object)" :level="nextLevel" :params="param" />
        <Field v-else :name="name" :item="param" />
      </div>
    </div>
  </div>
</template>

<script>
import ParamItem from './ParamItem.vue'
import Field from './Field.vue'

export default {
  name: 'Param',
  props: {
    level: Number,
    params: Object
  },
  components: {
    ParamItem,
    Field
  },
  computed: {
    style: function() {
      return `padding-left: ${this.level * 10}px`
    },
    nextLevel: function() {
      return Number(this.level) + 1
    }
  }
}
</script>

<style lang="scss">
</style>
