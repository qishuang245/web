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
     <el-aside :width="isCollapse ? '61px' : '200px'">
        <div class="toggle-button" @click="toggleCollpase">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
           :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          default-active="/gongsi"
        >
     <!-- 一级菜单 -->
  <el-submenu index="1">
          <!-- 一级菜单的模板区域 -->
        <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-location"></i>
            <!-- 文本 导航一-->
          <span>公司人员结构</span>
        </template>
           <!-- 二级菜单 -->
          <el-menu-item  index="/gongsi">
               <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-s-custom"></i>
            <!-- 文本 -->
          <span>2菜导1:公司组织图</span>
        </template>
          </el-menu-item>
          </el-submenu>

           <!-- 二级菜单 -->
  <el-submenu index="2">
          <!-- 一级菜单的模板区域 -->
        <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-location"></i>
            <!-- 文本 -->
          <span>导航二</span>
        </template>
           <!-- 二级菜单 -->
          <el-menu-item index="/userorganiz">
               <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-s-custom"></i>
            <!-- 文本 -->
          <span>二级菜单导航一-1</span>
        </template>
          </el-menu-item>
          </el-submenu>
     
    </el-menu>
    </el-aside>
    <!-- 右侧内容主题 -->
    <el-main>
      <!--  路由占位符-->
      <router-view></router-view>
    </el-main>
  </el-container>
  </el-container>

</template>

<script>
//import { defineComponent } from '@vue/composition-api'


export default {
  name: 'Home',
 data() {
    return {
    
      isCollapse: false, // 是否折叠属性
  
    }
  },
  //  created() {
  //   this.getMenuList()
  // },
  methods: {
    logout() {
      window.sessionStorage.clear()
      //重新定向到登录页
      this.$router.push('/login')
    },
   
    // 点击按钮,切换菜单的折叠和展开
    toggleCollpase() {
      this.isCollapse = !this.isCollapse
    },
    saveActivePath(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
      // console.log(this.$route.path)
    }
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
.toggle-button {
  background: #4a5064;
  font-size: 10px;
  text-align: center;
  line-height: 24px;
  color: #fff;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>