<template>
 <!-- 添加自定义class 主页面最外框-->
  <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header>
<div>
<h3 style="text-align:center ">员工个人档案</h3>
<!--
<img src="../../assets/hs3.png">
-->
</div>
<el-button type="primary" round   @click="yanfa">查看下属</el-button>
<el-button type="info" round @click="logout">返回</el-button>
  </el-header>
 <!--
  <router-link to="gongsi">点击返回组织图 </router-link>
-->
<div  class="m-div">

   <!--分割线divider -->
    <el-divider content-position="right"  > <i class="el-icon-mobile-phone"></i>part 1</el-divider>
     <span class="mainTitle1">基础信息</span>   <br>
    <div id="ms">
     
 &nbsp;&nbsp;<img src="../../assets/hs3.png">     
 <!--     用外部链接也可以
   &nbsp;&nbsp;<img src="https://thumbnail1.baidupcs.com/thumbnail/71c77088bo4dea087f1fcdbcb6949c60?fid=1100505717069-250528-353726000143979&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-eKkRxPtZCXgtgIiNCEBIEXRnfJM%3d&expires=8h&chkbd=0&chkv=0&dp-logid=211870717712376323&dp-callid=0&time=1635987600&size=c1920_u1080&quality=90&vuk=1100505717069&ft=image&autopolicy=1">     
 -->
 </div> 
 <div class="message">
 <span >姓名：王中原</span> <br>
 <span >部门： 研发体系-存储/云产品线-研发部 </span> <br>
  <span>职位：高级研发经理</span>   <br>
   <span >主管：陈靓</span> <br>
  <span>电话：12335678</span>   <br>
  <span>邮箱：98776@sss.com</span>   <br>  
     <br>
    </div>
 
    <el-divider content-position="right"><i class="el-icon-sugar"></i>part 2</el-divider>
    <span class="mainTitle1">个人喜好添加</span>   <br>
    <span>啊啊啊啊</span>  <br>
    <span>啊啊啊啊</span>  <br>

  </div>

<div class="home-pluss">
   <span >123</span> <br>
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
     yanfa() {
    
      this.$router.push('/yanfa')
      //  window.sessionStorage.setItem()
    },
      },

}
</script>

<style lang="less" scoped>
.home-container {
  height: 900px;
  width:  900px;
    margin: auto;
}


.el-header {
  display: flex;
  justify-content: space-between;
//background-color: #9dd3e7;
  
   align-items: center;
  color:  #4a5064;
  font-size: 25px;
 margin-left:100px;

  > div {
   display: flex;
    align-items: center;
  }
 
}
.m-div{
 // width: 80%;
 //float: right;
 margin-left: 40px;
//display: flex;
//display: -webkit-flex;
//align-items: center;
//justify-content: center;
//  text-align: left;
#ms{
  float: left;
  width: 30%;
  margin-right: 15px;
  img{
    width: 55%;
      margin-left: 50px;

  }
}
}
.message{
  font-size: 17px;
  margin-left: 15px;
  //float: right;
}
//分割线加背景
.el-divider__text{
  background-color: #b1abec; 
}
.el-divider{
  background-color: #b0a6fa; 
}

.mainTitle{
  display: flex;
  justify-content: space-between;
  background-color: #a8a0f3;
//border: 40px auto 40px auto;
  padding-left:  10px ;
  margin-left:120px;
  margin-right:680px;
   align-items: center;
  color: #fff;
  font-size: 20px;
  font-size: 20px;
}
.mainTitle1{
  display: flex;
  justify-content: space-between;
  //background-color: #b2abee;
//border: 40px auto 40px auto;
  padding-left:  10px ;
  margin-left:220px;
  
   align-items: center;
  color: #9488fc;
  font-size: 20px;
  font-size: 20px;
}

.home-pluss{
  font-size: 30px;
}
</style>