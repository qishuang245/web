<template>
 <!-- 添加自定义class 主页面最外框-->
  <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header>
<div>
<h3>员工个人主页</h3>

</div>
<el-button type="info" round @click="logout">退出</el-button>
  </el-header>
  <router-link to="gongsi">点击返回组织图 </router-link>
 </el-container>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
     name: 'Sample',
      methods: {
    logout() {
    
      //第二种解决方案：错误抛出，给跳转页面那行加后面的..，
      //完事后虽然不会报错，但是还是需要点击两次登录按钮才可登录。
     //  this.$router.push('/gongsi').catch(()=>{})

     //重新定向到登录页
     //注意顺序问题，因为顺序是先登录再存储token，
     //代码运行都在一瞬间，导航守卫里面没有发现token所以先给你报个错。
      this.$router.push('/gongsi')
      //  window.sessionStorage.setItem()
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
  }
}
</style>