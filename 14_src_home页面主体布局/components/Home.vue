<template>
      <!-- 添加自定义class 主页面最外框-->
  <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header>Header  <el-button type="info" @click="logout">退出</el-button>
      </el-header>
       <!-- 页面主体区域-->
  <el-container>
       <!-- 侧边栏aside -->
    <el-aside width="200px">Aside</el-aside>
    <!-- 右侧内容主题 -->
    <el-main>Main</el-main>
  </el-container>
  </el-container>

</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
  methods: {
    logout() {
      window.sessionStorage.clear()
      //重新定向到登录页
      this.$router.push('/login')
    },
  },
}
</script>


<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d3f;
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
</style>