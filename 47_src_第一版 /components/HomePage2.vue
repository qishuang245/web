<template>
  <div class="con">

      <div class="block">
    <el-carousel trigger="click" height="180px">
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



  <div class="card1">
<el-card class="box-card1">
  <div slot="header" class="clearfix">
    <span>公司大事件</span>
    <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
</div>

 <div class="card2">
<el-card class="box-card2">
  <!-- 时间无错 可与天气换站位
  <div class="time">
  <timer></timer>
  </div>
   -->
  <!-- 天气 有报错 -->
  <iframe width="400" height="40" frameborder="0" scrolling="no" hspace="0" src="https://i.tianqi.com/?c=code&a=getcode&id=40&icon=1"></iframe>

  <!-- 日历 -->
  <div class="test">
<el-calendar v-model="value">
</el-calendar>
</div>

</el-card>
</div>

<div class="card3">
<el-card class="box-card3">
<div slot="header" class="clearfix">
<span>卡片名称3</span>
<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
</div>
</el-card>
</div>

<div class="card4">
<el-card class="box-card4">
<div slot="header" class="clearfix">
<span>卡片名称4</span>
<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
</div>
</el-card>
</div>

<div class="card5">
<el-card class="box-card5">
<div slot="header" class="clearfix">
<span>卡片名称5</span>
<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
</div>
</el-card>
</div>

<div class="card6">
<el-card class="box-card6">
<div slot="header" class="clearfix">
<span>卡片名称6</span>
<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
</div>
</el-card>
</div>

<div class="card7">
<el-card class="box-card7">
<div slot="header" class="clearfix">
<span>卡片名称7</span>
<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
</div>
</el-card>
</div>

<div class="card8">
<el-card class="box-card8">
<div slot="header" class="clearfix">
<span>卡片名称8</span>
<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
</div>
</el-card>
</div>


  </div>
</template>

<script>
import timer from './timedata.vue'
export default {
   components:{
    timer
  },
    data() {
           return {             
               image : require('../assets/top-1.png'), 
               image2 : require('../assets/top-2.png'),  
               image3 : require('../assets/top-3.png'),   
                value: new Date(),            
           }
       },
    

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
.con{
   width: 1600px;
    height: 880px;
   //height: 100%;
    background: lemonchiffon;
}
 //走马灯
 .block{
   margin-bottom: 5px;
   width: 520px;
   margin-left: 20px;
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

 
.box-card1 {
 width: 1050px;
 height: 265px;
 margin-left: 5px;
 padding: 10px;
   float: left;
 }
 .box-card2 {
 width: 450px;
  height: 380px;
 margin-left: 5px;
 padding: -20px;
   float: left;
 }
 .box-card3 {
 width: 450px;
 height: 180px;
 margin-left: 5px;
 margin-top: -90px;
 padding: 10px;
   float: left;
 }
 .box-card4 {
 width: 572px;
 height: 180px;
  padding: 10px;
 margin-left: 5px;
 margin-top: -90px;
   float: left;
 }
 .box-card5 {
 width: 450px;
  height: 150px;
 margin-left: 5px;
  padding: 10px;
   float: left;
    margin-top: 5px;
 }
 .box-card6 {
  width: 450px;  
    height: 170px;
     padding: 10px;
    float: left;
    margin-left: 5px;
      margin-top: -60px;
 }
  .box-card7 {
   width: 572px;  
    height: 170px;
     padding: 10px;
    float: left;
    margin-left: 5px;
      margin-top: -60px;
 }
 .box-card8 {
 width: 450px;  
    height: 200px;
     padding: 10px;
    float: left;
    margin-left: 5px;
      margin-top: 5px;
 }
 //修改日历
 .el-calendar{
  background-color: #bed5ec;
    width: 400px;
   // height: 550px;
    //  margin-left: 250px;
   //margin-top: -20px;
   // margin-bottom: 150px;
}
.test  /deep/ .el-calendar__body{
  padding: 10px 10px 12px ;
}
//修改日历高度
.test  /deep/  .el-calendar-table  .el-calendar-day{
  height: 28px ;
}
//时间
.time{
  height: 40px;
   width: 400px;
   padding-top: 5px;
    background-color: #bed5ec;
    text-align: center;
}

</style>