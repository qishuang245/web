<template>
      <!-- 添加自定义class 主页面最外框-->
  <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header>
          <div>
              <img src="../assets/white_logo.png" alt=""/>
               <span>鹏云网络</span>
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
          <span>供应商管理</span>
        </template>
           <!-- 二级菜单 -->
          <el-menu-item  index="/gongsi">
               <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-s-custom"></i>
            <!-- 文本 -->
          <span>公司组织图</span>
        </template>
          </el-menu-item>
          </el-submenu>

           <!-- 二级菜单 -->
  <el-submenu index="2">
          <!-- 一级菜单的模板区域 -->
        <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-s-flag"></i>
            <!-- 文本 -->
          <span>项目管理</span>
        </template>
           <!-- 二级菜单 -->
          <el-menu-item index="/homepage">
               <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-s-custom"></i>
            <!-- 文本 -->
          <span>项目管控预留</span>
        </template>
          </el-menu-item>
          </el-submenu>

             <!-- 三级菜单 -->
  <el-submenu index="3">
          <!-- 一级菜单的模板区域 -->
        <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-s-check"></i>
            <!-- 文本 -->
          <span>会议管理</span>
        </template>
           <!-- 二级菜单 -->
          <el-menu-item index="/sample">
               <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-s-custom"></i>
            <!-- 文本 -->
          <span>办公区域</span>
        </template>
          </el-menu-item>
          </el-submenu>

               <!-- 4级菜单 -->
        <el-submenu index="4">
          <!-- 一级菜单的模板区域 -->
        <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-s-flag"></i>
            <!-- 文本 -->
          <span>采购管理</span>
        </template>
           <!-- 二级菜单 -->
          <el-menu-item index="/homepage">
               <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-s-custom"></i>
            <!-- 文本 -->
          <span>采购管控预留</span>
        </template>
          </el-menu-item>
          </el-submenu>

         <!-- 5级菜单 -->
        <el-submenu index="5">
          <!-- 一级菜单的模板区域 -->
        <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-s-flag"></i>
            <!-- 文本 -->
          <span>客户管理</span>
        </template>
           <!-- 二级菜单 -->
          <el-menu-item index="/homepage">
               <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-s-custom"></i>
            <!-- 文本 -->
          <span>采购管控预留</span>
        </template>
          </el-menu-item>
          </el-submenu>

           <!-- 6级菜单 -->
        <el-submenu index="6">
          <!-- 一级菜单的模板区域 -->
        <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-s-flag"></i>
            <!-- 文本 -->
          <span>企业邮箱</span>
        </template>
           <!-- 二级菜单 -->
          <el-menu-item index="/homepage">
               <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-s-custom"></i>
            <!-- 文本 -->
          <span>采购管控预留</span>
        </template>
          </el-menu-item>
          </el-submenu>

                 <!-- 7级菜单 -->
        <el-submenu index="7">
          <!-- 一级菜单的模板区域 -->
        <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-s-flag"></i>
            <!-- 文本 -->
          <span>鹏云网站</span>
        </template>
           <!-- 二级菜单 -->
          <el-menu-item index="/homepage2">
               <template slot="title">
              <!-- 图标 i  -->
          <i class="el-icon-s-custom"></i>
            <!-- 文本 -->
          <span>网站首页</span>
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
 
  padding-left: 10px;
  padding-top: 0 !important;
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