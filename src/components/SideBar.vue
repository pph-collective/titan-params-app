<template>
  <div class="sidebar-left">
    <vk-nav>
      <vk-nav-item-header title="TITAN Params" />
      <vk-nav-item-parent href="/" title="Params">
        <vk-nav-item v-for="section in sections" :key="section" :title="section" :href="'#'+section"  v-vk-scroll></vk-nav-item>
      </vk-nav-item-parent>
      <vk-nav-item-parent href="/docs" title="Docs" />
    </vk-nav>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    sections: Array
  }
}
</script>

<style lang="scss">
.sidebar-left {
    -webkit-box-sizing: border-box;
    border-right: 1px solid #e5e5e5;
    bottom: 0;
    box-sizing: border-box;
    overflow: auto;
    padding: 40px 40px 60px;
    position: fixed;
    top: 0px;
    width: 240px!important;
}
</style>
