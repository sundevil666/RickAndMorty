<template>
  <div id="app">
    <div class="container">
      <Menu></Menu>
    </div>
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>
<script>
import Menu from '@/components/Menu';

export default {
  name: 'App',
  components: {
    Menu,
  }
};
</script>
<style lang="stylus">
#app {
  display grid
  grid-template-rows auto 1fr
  grid-template-columns 1fr
  height 100vh
}
main {
  overflow hidden
}
main, main .container {
  height 100%
}
</style>
