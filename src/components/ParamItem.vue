<template>
  <ParamHeader :title="title" :type="params.type">
    <ul class="uk-list param-body">
      <li>{{params.description}}</li>
      <!-- include all of the non-required fields in the param-->
      <Field v-for="(item, itemName) in nonStandardParams" :name="itemName" :item="item" :key="itemName" />

      <!-- default might have a sub-param item-->
      <div v-if="params.default.constructor === Object">
        <li><strong>default:</strong></li>
        <Param :level="nextLevel" :params="params.default"/>
      </div>

      <Field v-else name="default" :item="params.default" />
    </ul>
  </ParamHeader>
</template>

<script>
import Field from './Field.vue'
import ParamHeader from './ParamHeader'

export default {
  name: 'ParamItem',
  props: {
    level: Number,
    params: Object,
    title: String
  },
  data: function() {
    return {
      standardItems: ["default", "type", "description"]
    }
  },
  components: {
    Param: () => import('./Param.vue'),
    Field,
    ParamHeader
  },
  computed: {
    nonStandardParams: function() {
      return  Object.keys(this.params)
        .filter(key => !this.standardItems.includes(key))
        .reduce((obj, key) => {
          obj[key] = this.params[key];
          return obj;
        }, {});
    },
    nextLevel: function() {
      return this.level + 1
    }
  }
}
</script>

<style lang="scss">
ul.param-body {
  margin: 5px 15px;
  padding-left: 0px;

  li {
    margin-top: 0px !important;
  }
}
</style>
