<template>
  <div id="app">
    <home></home>
  </div>
  <div class="view-box">
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './components/Home.vue'
export default {
  components: { 'home': Home },
}

</script>

<style>
#app {

}
</style>
