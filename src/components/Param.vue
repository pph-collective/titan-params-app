<template>
  <div :style="style">
    <ParamItem v-if="'default' in params" :params="params" :level="level" title="<keys>"/>
    <div v-else v-for="(param, name) in params" :key="name" :id="name + '-' + level">
      <Field v-if="param.constructor !== Object" :name="name" :item="param" />
      <div v-else>
        <hr v-if="level === 1">

        <ParamItem v-if="'default' in param" :params="param" :level="level" :title="name"/>
        <ParamHeader v-else :title="name">
          <Param :level="nextLevel" :params="param" />
        </Paramheader>

      </div>
    </div>
  </div>
</template>

<script>
import ParamItem from './ParamItem.vue'
import Field from './Field.vue'
import ParamHeader from './ParamHeader'

export default {
  name: 'Param',
  props: {
    level: Number,
    params: Object
  },
  components: {
    ParamItem,
    Field,
    ParamHeader
  },
  computed: {
    style: function() {
      if (this.level === 1) {
        return `padding-left: 0px`
      } else {
        return `padding-left: 30px`
      }
    },
    nextLevel: function() {
      return this.level + 1
    }
  }
}
</script>
