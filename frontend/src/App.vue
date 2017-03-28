<template>
  <div id="app">
    <top-nav></top-nav>
    <div class="view-box">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  import Nav from './components/nav.vue'

export default {
  components: { 'top-nav': Nav},
}

</script>

<style>
#app {

}
</style>
