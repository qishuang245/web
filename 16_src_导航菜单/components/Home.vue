<template>
      <!-- 添加自定义class 主页面最外框-->
  <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header>
          <div>
              <img src="../assets/white_logo.png" alt=""/>
               <span>鹏云网站</span>
          </div>
          <el-button type="info" @click="logout">退出</el-button>
      </el-header>
       <!-- 页面主体区域-->
  <el-container>
       <!-- 侧边栏aside -->
    <el-aside width="200px">
        
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
        >
        <!-- 一级菜单 -->
  <el-submenu index="1">
          <!-- 一级菜单的模板区域 -->
        <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-location"></i>
            <!-- 文本 -->
          <span>导航一</span>
        </template>
           <!-- 二级菜单 -->
          <el-menu-item index="1-4-1">
               <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-location"></i>
            <!-- 文本 -->
          <span>导航一</span>
        </template>
          </el-menu-item>
          </el-submenu>
     
    </el-menu>
    </el-aside>
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
  display: flex;
  justify-content: space-between;
  background-color: #373d3f;
   align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
</style>