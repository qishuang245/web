<template>
<div>

 <!-- 新闻卡片区域 -->
<el-card class="box-card">
  

   <div slot="header" class="clearfix">
    <span>员工个人主页</span>
    
   
     <!--  操作按钮右侧 -->
     <div class="link2">
     <router-link :to="upUrl" exact-active-class="eac">  返回上一页 </router-link>  
      <router-link :to="downUrl"> 查看下属 &nbsp; |  &nbsp;</router-link> 
     </div>	
  </div>

                                      <!-- 内容栏滚动条 -->
  <div class="el-card-body">
     <div class="news_content_part">
           <!-- 小标题 -->
         <span class="mainTitle1">基础信息</span>   
        

       <!-- 图片 -->
    <div class="picture_img">
       <img  :src="image" alt>
    </div>
    
      <!-- 文字段落 -->
      <div class="persion_message">
    <p>姓名：{{name}}</p>
    <p>部门： {{depart}}</p>
    <p>职位：{{position}}</p>
    <p>主管：{{director}}</p>
    <p>电话：{{phone }}</p>
    <p>邮箱：{{ mail}}</p>
     </div>
    <!-- 一段结束 -->

     </div>
     <el-divider content-position="right"><i class="el-icon-sugar"></i>part 1</el-divider>
    <div class="part2">
     <span class="mainTitle2">个人喜好添加</span>   <br>
      <span>{{part2_text1}}</span>  <br>
     <span>{{part2_text2}}</span>  <br>
     </div>
      <el-divider content-position="right"><i class="el-icon-sugar"></i>part 2</el-divider>
  </div>
    

    
</el-card> 
<!-- 
<el-button  class="button1"  type="info" round @click="logout">查看下属</el-button>
-->
</div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
//import  image  from ' ../../assets/hs4.jpg'

export default {
     name : 'shp_coo1' ,
      data() {
           return {
               name :  '王中原' ,
               depart : '研发体系-存储/云产品线-研发部',
               position : '高级研发经理' ,
               director  :  '陈靓' ,
               phone :  '12335678' ,
               mail  :  '98776@sss.com' ,
               downUrl :'chief',
               upUrl : 'gongsi',
               image : require('../../assets/hs4.jpg'),
               part2_text1 : '青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪',
               part2_text2 : '头上一片晴天，心中一个想念',
           }
       },
    methods: {
//    logout() {
//      this.$router.push('/chief')
      //  window.sessionStorage.setItem()
//    },
      },
     

}
</script>

<style lang="less" scoped>
.box-card {
    width: 850px;
    margin-left: 200px;
    margin-top: 30px;
    background-color: #f7f7f7;
  }
 // border-bottom: 1px solid #EBEEF5;
el-card__header{
      background-color: #f7f7f7;
}
.clearfix{
   // background-color: #f7f7f7;
  //  margin: -20px -18px;
    text-align: center;
    span{
    font-size: 25px;
    font-weight:600;
    }
    p{
      color: #939393;
    }
 }
 .link2{
   >a{
      font-size: 15px;
      color: rgb(9, 31, 63);
      margin-top: -20px;
    &:hover {    
     color:#4580ee;
    // font-size:105%;
  }
   }
    
 }
 .el-card__body{
    border-bottom: 1px solid #4976df;
     width: 100%;
  height:1px;
  margin-top: 1em;
  margin-bottom: 1em;
  background: #d4c4c4;
}
 .picture_img{
   float: left;
  width: 25%;
  margin-left: 70px;
  margin-right: 15px;
 }
//返回首页
.button1{
    margin-left: 200px;
    margin-top: 30px;
}
.mainTitle1{
  display: flex;
 // justify-content: space-between;
  //background-color: #b2abee;
//border: 40px auto 40px auto;
 // padding-left:  10px ;
  margin-left:300px;
 //  align-items: center;
  color: #060227;
  font-size: 20px;
 
}
.persion_message{
     font-size: 15px;
  margin-left: 15px;
}
.part2{
    margin-left: 50px;
  
}
  .mainTitle2{
  display: flex;
 // justify-content: space-between;
  //background-color: #b2abee;
//border: 40px auto 40px auto;
 // padding-left:  10px ;
  margin-left:250px;
 //  align-items: center;
  color: #060227;
  font-size: 20px;
 
}
//分割线加背景
.el-divider__text{
  background-color: #f7f7f7; 
}
</style>

