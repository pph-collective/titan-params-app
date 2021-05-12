<template>
  <li>
    <span v-if="item.constructor === Object">
      <strong>{{name}}:</strong>
      <ul>
        <Field v-for="(subItem, subItemName) in item" :key="subItemName" :name="subItemName" :item="subItem" />
      </ul>
    </span>

    <span v-else-if="item.constructor === Array" class="inline">
      <strong>{{name}}:</strong>
      <p class="mono"> [
        {{joinArray()}}
        ]</p>
    </span>

    <span v-else><strong>{{name}}: </strong><span class="mono">{{item}}</span></span>
  </li>
</template>

<script>
export default {
  name: 'Field',
  props: {
    name: String,
    item: [String, Number, Array, Object, Boolean]
  },
  methods: {
    joinArray: function() {
      return this.item.join(", ")
    }
  }
}
</script>

<style lang="scss">
.mono {
  font-family: monospace;
}

.inline * {
  display: inline;
}
</style>
