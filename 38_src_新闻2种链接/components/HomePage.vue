<template>
 <!-- 添加自定义class 主页面最外框-->
  <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header>
<div>
<h3>主页111</h3>
<!--
<img src="../../assets/hs3.png">
-->
</div>
<el-button   type="info" round @click="logout">返回</el-button>
  </el-header>
  <router-link to="welcome">点击进入公司组织架构图 </router-link>  <br>
   <router-link to="sales"> 点击进入公司新闻界面</router-link>   <br>
   
   <div class="button-1">
   <el-button  type="info" round @click="news" >新闻</el-button>
    <el-button type="info" round @click="news" >预留区域</el-button>
</div>

  <!-- 卡片区域 -->
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>鹏云网络展示区</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>

  <div  class="text item">
     <!-- 第一栏 -->
    
    <div class="box-1" @click="news1">
      <div class="photo-1">
           &nbsp;&nbsp;<img src="../assets/new-organ.png" >        
      </div> 
     
      <div class="text-1">
        <div class="text-2">
      <span>公司组织架构</span> <br>
      </div>
        <div class="text-3">
      <span>鹏云网络有限公司现有员工30人，内容 ，，，，，</span> 
      </div>
     </div> 

        </div> 
          <el-divider></el-divider>


        <!-- 第二栏 -->
         <div class="box-1"  @click="news2">
      <div class="photo-1">
           &nbsp;&nbsp;<img src="../assets/new-normal.png">        
      </div> 
     
      <div class="text-1">
       <div class="text-2">
      <span>新闻</span> <br>
      </div>
        <div class="text-3">
      <span>鹏云网络有限公司最近新闻，内容 ，，，，，</span> 
      </div>
     </div> 

        </div> 
          <el-divider></el-divider>

     
       
          <!-- 第三栏 -->
          <router-link to="welcome">
           <div class="box-1" > 
      <div class="photo-1">
           &nbsp;&nbsp;<img src="../assets/new-travel.png">        
      </div> 
     
      <div class="text-1">
      <div class="text-2">
      <span>预留区域</span> <br>
      </div>
        <div class="text-3">
      <span>鹏云网络有限公司预留区域，内容 ，，，，，</span> 
      </div>
     </div> 
           
        </div > 
         <el-divider></el-divider> 
        </router-link>
         

       
        
  </div>
</el-card>


 




 </el-container>


</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
     name: 'homepage',
      methods: {
    logout() {
    
      //第二种解决方案：错误抛出，给跳转页面那行加后面的..，
      //完事后虽然不会报错，但是还是需要点击两次登录按钮才可登录。
     //  this.$router.push('/gongsi').catch(()=>{})

     //重新定向到登录页
     //注意顺序问题，因为顺序是先登录再存储token，
     //代码运行都在一瞬间，导航守卫里面没有发现token所以先给你报个错。
      this.$router.push('/chief')
      //  window.sessionStorage.setItem()
    },
      news() {
      this.$router.push('/sales')
      //  window.sessionStorage.setItem()
    },
     news1() {
      this.$router.push('/gongsi')
      //点击进入组织图
      //  window.sessionStorage.setItem()
    },
     news2() {
      this.$router.push('/sample')
      //点击进入组织图
      //  window.sessionStorage.setItem()
    },
      },

}
</script>

<style lang="less"  scoped>
.home-container {
  height: 100%;
  width:  100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  background-color: #9dd3e7;
   align-items: center;
  color: #fff;
  font-size: 20px;
  font-size: 20px;
  
}

 
.el-button{
  /*
// border: 50px ;
 //margin-left: 530px;
 */
 font-size: 25px;
}
 /*card*/
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 880px;
    margin-left: 150px;
    margin-top: 50px;
  }

 .clearfix{
    text-align: center;
    span{
    font-size: 25px;
    }
 }
 .box-1{
    height: 100px;
 }
 .photo-1{
   float: left;

  img{
    width: 175px;
    height: 105px;

  }
}
/*文字区样式*/
.text-1{
   float: right;
   width: 75%;
   
 // height: 111px;
}
/* 标题*/
.text-2{
 /*   text-align: center;*/
  span{
  font-size: 20px;
  color: #0d53eb;
}
}
/* 文字说明*/
 .text-3{
   margin-top: 15px;
  span{
  font-size: 16px;
    color: #000000;
}
}
a{
    width: 840px;
}
</style>