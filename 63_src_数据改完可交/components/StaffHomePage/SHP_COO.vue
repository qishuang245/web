<template>
<div>

 <!-- 新闻卡片区域 -->
<el-card class="box-card">
  
   <div slot="header" class="clearfix">
    <span>员工个人主页</span>
    <div class="UpDown">
      <a @click="$router.back()">
        <p>返回上一页</p> </a>
      <a v-if="staff.subordinate" @click="$router.push('/'+staff.subordinate)">
        <p>查看下属</p> </a>
    </div>
 
  </div>

     <!-- 内容栏滚动条 -->
  <div class="el-card-body">
     <div class="news_content_part">
           <!-- 小标题 -->
         <span class="mainTitle1">基础信息</span>   
        

       <!-- 图片 -->
    <div class="picture_img">
    <img :src="staff.image">
    </div>
    
      <!-- 文字段落 -->
      <div class="persion_message">
    <p>姓名：{{staff.name}}</p>
    <p>部门：{{staff.depart}}</p>
    <p>职位：{{staff.position}}</p>
    <p>主管：{{staff.director}}</p>
    <p>电话：{{staff.phone }}</p>
    <p>邮箱：{{ staff.mail}}</p>
     </div>
    <!-- 一段结束 -->

     </div>
     <el-divider content-position="right"><i class="el-icon-sugar"></i>part 1</el-divider>
    <div class="part2">
     <span class="mainTitle2">个人喜好添加</span>   <br>
      <span>{{staff.part2_text1}}</span>  <br>
     <span>{{staff.part2_text2}}</span>  <br>
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
import staffData from "../../data/staff.json"
export default {
   name : 'shp_coo' ,
      data() {
           return {
             staff:{
               name :  '' ,
               depart : '',
               position : '' ,
               director  :  '' ,
               phone :  '' ,
               mail  :  '' ,
               image : '',
               part2_text1 : '',
               part2_text2 : '头上一片晴天，心中一个想念',
               subordinate:''
            }
          }
       },
    mounted(){
      var queryId = +this.$route.query.id
      var staffItem=staffData.staff.find(item=>item.id===queryId)
      let {name  ,
           depart ,
           position ,
           director  ,
           phone,
           mail   ,
           image ,
           part2_text1,
           part2_text2,
           subordinate
      } =staffItem
      this.staff.name=name
      this.staff.depart=depart
      this.staff.position=position
      this.staff.director=director
      this.staff.image=image
      this.staff.mail=mail
      this.staff.phone=phone
      this.staff.image = require('../../assets/staffpicture/'+image)
      this.staff.part2_text1=part2_text1
      this.staff.part2_text2=part2_text2
      this.staff.subordinate=subordinate
    },
    methods: {
      
   
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
    width: 800px;
    height: 80px;
    //background: chartreuse;
    span{
    font-size: 25px;
    font-weight:600;
    
    }
    .UpDown{
      width: 500px;
      margin-left: 150px;
      text-align: center;
      height: 50px;
       display: flex;
    justify-content: space-between;
      a{
        display: block;
        text-decoration:none;
        p{
      color: #939393;
    }
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
  //width: 25%;
  width: 200px;
  height: 220px;
  margin-left: 70px;
  margin-right: 15px;
  img{
    width: 132px;
 // height: 220px;
  }
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

