<template>
  <div class="sidebar-left">
    <vk-nav v-vk-scroll>
      <img src="../assets/titan_logo.png" alt="TITAN logo" />
      <vk-nav-item-header title="TITAN Params" />
      <vk-nav-item-divider />
      <li class="uk-parent">
        <router-link to="/params">Params</router-link>
        <ul class="uk-nav-sub">
          <div v-for="section in sections" :key="section">
            <li class="">
              <router-link :to="'/params#' + section">{{section}}</router-link>
            </li>
          </div>
        </ul>
      </li>
      <vk-nav-item-divider />
      <li class="uk-parent">
        <router-link to="/docs">Docs</router-link>
      </li>
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
    background-color: #EBEDEF;
}
</style>
