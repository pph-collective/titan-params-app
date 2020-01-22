<template>
  <li>
    <p v-if="item.constructor === Object">
      <strong>{{name}}:</strong>
      <ul>
        <Field v-for="(subItem, subItemName) in item" :key="subItemName" :name="subItemName" :item="subItem" />
      </ul>
    </p>
    <p v-else-if="item.constructor === Array">
      <strong>{{name}}:</strong>
      <ul>
        <li v-for="subItem in item" :key="subItem">{{subItem}}</li>
      </ul>
    </p>
    <p v-else><strong>{{name}}: </strong>{{item}}</p>
  </li>
</template>

<script>
export default {
  name: 'Field',
  props: {
    name: String,
    item: [String, Number, Array, Object]
  }
}
</script>

<style lang="scss">
</style>
