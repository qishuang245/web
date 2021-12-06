<template>
 <!-- 添加自定义class 主页面最外框-->
  <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header>
<div>
<h3>员工个人主页</h3>
<!--
<img src="../../assets/hs3.png">
-->
</div>
<el-button type="info" round @click="logout">返回</el-button>
  </el-header>
  <router-link to="gongsi">点击返回组织图 </router-link>

<div  class="m-div">

   <!--分割线divider -->
    <el-divider > <i class="el-icon-mobile-phone"></i>基础信息</el-divider>
    
    <div id="ms">
 &nbsp;&nbsp;<img src="../../assets/hs3.png">     
 </div> 
 <span >姓名：</span> <br>
    <span>职位：</span>   <br>
    <span>电话：</span>   <br>
    <span>邮箱：</span>   <br>  <br>
    <el-divider content-position="left" ><i class="el-icon-notebook-1"></i>教育背景</el-divider>
    <span>饿了别叫妈, &nbsp;&nbsp;&nbsp;&nbsp;叫饿了么</span>
    <el-divider><i class="el-icon-shopping-bag-1"></i>工作经历</el-divider>
    <span>为了无法计算的价值</span>
    <el-divider content-position="right"><i class="el-icon-sugar"></i>个人喜好添加</el-divider>
    <span>啊啊啊啊</span>

  </div>





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
  height: 900px;
  width:  900px;
}
.el-header {
  display: flex;
  justify-content: space-between;
  background-color: #9dd3e7;
   align-items: center;
  color: #fff;
  font-size: 20px;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
   
  }
}
.m-div{
 // width: 80%;
  float: right;
//display: flex;
//display: -webkit-flex;
//align-items: center;
//justify-content: center;
//  text-align: left;
#ms{
  float: left;
  width: 25%;
  img{
    width: 40%;
      margin-left: 40px;

  }
}
}
</style>