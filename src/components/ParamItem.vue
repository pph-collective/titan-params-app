<template>
  <div :style="style">
    <p>{{params.description}}</p>
    <ul>
      <Field name="type" :item="params.type" />

      <!-- include all of the non-required fields in the param-->
      <div v-for="(item, itemName) in params" :key="itemName">
        <Field v-if="!standardItems.includes(itemName)" :name="itemName" :item="item" />
      </div>

      <!-- default might have a sub-param item-->
      <div v-if="params.default.constructor === Object">
        <li><strong>default:</strong></li>
        <Param :level="nextLevel" :params="params.default"/>
      </div>
      <Field v-else name="default" :item="params.default" />
    </ul>
  </div>
</template>

<script>
import Field from './Field.vue'

export default {
  name: 'ParamItem',
  props: {
    level: Number,
    params: Object
  },
  data: function() {
    return {
      standardItems: ["default", "type", "description"]
    }
  },
  components: {
    Param: () => import('./Param.vue'),
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
