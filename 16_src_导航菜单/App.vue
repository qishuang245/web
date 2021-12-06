<template>
  <div id="app">
    <!-- 路由占位符-->
    <router-view></router-view>
    App根组件1
    <Home />
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Home,
  },
}
</script>

<style>
</style>
