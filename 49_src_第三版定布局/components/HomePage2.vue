<template>
 <div class="con">

        <div class="block">
    <el-carousel trigger="click" height="190px">
      <el-carousel-item >
        <img  :src="image " class="carsouselimg" />
      </el-carousel-item>
      <el-carousel-item >
        <img  :src="image2 " class="carsouselimg" />
      </el-carousel-item>
      <el-carousel-item >
        <img  :src="image3 " class="carsouselimg" />
      </el-carousel-item>
    </el-carousel>
  </div>

 <div class="card0">
<el-card class="box-card0">
  <!-- 时间无错 可与天气换站位
  <div class="time">
  <timer></timer>
  </div>
   -->
  <!-- 天气 有报错 -->
  <iframe width="400" height="40" frameborder="0" scrolling="no" hspace="0" src="https://i.tianqi.com/?c=code&a=getcode&id=40&icon=1"></iframe>

</el-card>
</div>

<div class="card1">
<el-card class="box-card1">
<div slot="header"  class="clearfix">
<span>公司要闻1</span>
<el-button style="float: right; padding: 3px 0 " type="text">更多>></el-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
</div>
</el-card>
</div>

<div class="card2">
<el-card class="box-card2">
<div slot="header" class="clearfix">
<span>公告通知2</span>
<el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
</div>
</el-card>
</div>

<div class="card3">
<el-card class="box-card3">
<!-- 日历 -->
<div class="test">
<el-calendar v-model="value">
</el-calendar>
</div>
</el-card>
</div>

<div class="card4">
<el-card class="box-card4">
<div slot="header" class="clearfix">
<span>法制规章4</span>
<el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
</div>
</el-card>
</div>

<div class="card5">
<el-card class="box-card5">
<div slot="header" class="clearfix">
<span>鹏云产品5</span>
<el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
</div>
</el-card>
</div>

<div class="card6">
<el-card class="box-card6">
<div slot="header" class="clearfix">
<span>鹏云之家6</span>
<el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
</div>
</el-card>
</div>

<div class="card7">
<el-card class="box-card7">
<div slot="header" class="clearfix">
<span>员工论坛7</span>
<el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
</div>
</el-card>
</div>

<div class="card8">
<el-card class="box-card8">
<div slot="header" class="clearfix">
<span>行业资讯8</span>
<el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
</div>
</el-card>
</div>

 </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import timer from './timedata.vue'
export default {
    components:{
    timer
  },
   data() {
           return {             
               image : require("../assets/top-1.png"), 
               image2 : require('../assets/top-2.png'),  
               image3 : require('../assets/top-3.png'),   
                value: new Date(),            
           }
       },

}
</script>

<style lang="less" scoped>
.con{
   width: 1615px;
    height: 880px;
    padding: 5px;
   //height: 100%;
    background: lemonchiffon;
}
 //走马灯
 .block{
   margin-bottom: 5px;
   width: 1207px;
   //margin-left: 5px;
    float: left;
  // margin-top: 5px;
 }
.carsouselimg {
  width: auto;
  height: 300px;
}
.img{
  width: 100%;
}
//框内文字
  .text {
    font-size: 12px;
  }

  .item {
    margin-bottom: 12px;
  }
  //题头样式
  .clearfix{
    margin-left: 30px;
    margin-top: -10px;
    margin-bottom: -10px;
    span{
    font-size: 20px;
    letter-spacing: 3px;
    }
  }
  //更多>> 样式
 .el-button--text{
   color: #a4a4a4;
    margin-top: 5px;
 }

//天气
.box-card0 {
 width: 400px;
 height: 50px;
 margin-left: 5px;
// padding: 10px;
   float: right;
 }
.box-card1 {
 width: 732px;
 height: 270px;
 margin-left: 5px;
// padding: 10px;
   float: left;
 }
 .box-card2 {
 width: 460px;
  height: 270px;
 margin-left: 5px;
 //padding: -20px;
   float: left;
 }
 .box-card3 {
 width: 400px;
 height: 400px;
 margin-left: 5px;
 margin-top: -135px;
// padding: 10px;
   float: right;
 }
 //修改日历
 .el-calendar{
  //background-color: #bed5ec;
    width: 400px;
   // height: 550px;
      margin-left: -20px;
   //margin-top: -20px;
   // margin-bottom: 150px;
}
.test  /deep/ .el-calendar__body{
  padding: 8px 8px 8px ;
}
//修改日历高度
.test  /deep/  .el-calendar-table  .el-calendar-day{
  height: 38px ;
}
 .box-card4 {
 width: 594px;
 height: 200px;
//padding: 10px;
 margin-left: 5px;
 margin-top: 5px;
   float: left;
 }
 .box-card5 {
 width: 600px;
  height: 200px;
 margin-left: 5px;
 // padding: 10px;
   float: left;
    margin-top: 5px;
 }
  .box-card6 {
  width: 400px;  
    height: 400px;
    //padding: 10px;
    float: right;
    margin-left: 5px;
      margin-top: 5px;
 }
  .box-card7 {
   width: 594px;  
    height: 198px;
    //padding: 10px;
    float: left;
    margin-left: 5px;
     margin-top: 5px;
 }
 .box-card8 {
    width: 600px;  
    height: 198px;
    //padding: 10px;
    float: left;
    margin-left: 5px;
      margin-top: 5px;
 }

</style>
