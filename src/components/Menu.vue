<template>
  <ul class="nav">
    <li class="nav-item">
      <router-link class="nav-link" exact to="/">Main</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Menu'
};
</script>

<style lang="stylus">
  .nav-link {
    font-size 24px
    &.active {
      color red
    }
  }
</style>
