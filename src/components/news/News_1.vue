<template>
<div>
 <!-- 回到顶部 -->
    <div class=".page-component__scroll" :buttom="100">
  <el-backtop >
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
       
      }"
    >
      TOP
    </div>
  </el-backtop>
  <slot></slot>
  </div>


<div>
  <el-card class="box-card1">
  <div  class="clearfix1">
       <span>新闻展示区-最新活动</span>
    <span class="clearfix-tip1" style="float: right;font-size:18px " > NEWS INFOMATION </span>
  </div>
</el-card>
 

<div>

 <!-- 新闻卡片区域 -->
<el-card class="box-card">
  

   <div slot="header" class="clearfix">
    <span>砥砺前行 再创辉煌 鹏云网络9岁生日快乐</span>
    <p>发布时间：2021 - 09 - 29 08:00 | 来源于：鹏云网络</p>
   
     <!--  操作按钮右侧
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    -->
  </div>

                                      <!-- 内容栏滚动条 -->
  <div class="el-card-body">
     <div class="news_content_part">

       <!-- 图片 -->
    <div class="picture_img">
    <img src="../../assets/new-travel.png" alt>
    </div>
      <!-- 小标题 -->
    <p class="pic_title">小标题是是是</p>
      <!-- 文字段落 -->
   <p>你好啊</p>
    <p>你好啊</p>
    <p>你好啊</p>
    <p>你好啊</p>
    <p>你好啊盛且别有风味的“野餐”后，大家开始了合作运球、数字接力、坐地起身等各种小游戏。这些小游戏不仅增加了快乐，还增进了团队的合作。游戏结束后，陈靓董事长发表讲话，总结了鹏云已收获得成就，并对公司未来的发展、研发计划做出了规划，大家也都明确了今后努力的目标。</p>
    <p>你好啊</p>
    <p>你好啊</p>
    <p>你好啊</p>
    <p>你好啊</p>
    <p>你好啊</p>
    <!-- 一段结束 -->


      <!-- 图片 -->
    <div class="picture_img">
    <img src="../../assets/new-travel.png" alt>
    </div>
      <!-- 小标题 -->
    <p class="pic_title">小标题是是是</p>
      <!-- 文字段落 -->
   <p>你好啊</p>
    <p>你好啊</p>
    <p>你好啊</p>
    <p>你好啊</p>
    <p>你好啊盛且别有风味的“野餐”后，大家开始了合作运球、数字接力、坐地起身等各种小游戏。这些小游戏不仅增加了快乐，还增进了团队的合作。游戏结束后，陈靓董事长发表讲话，总结了鹏云已收获得成就，并对公司未来的发展、研发计划做出了规划，大家也都明确了今后努力的目标。</p>
    <p>你好啊</p>
    <p>你好啊</p>
    <p>你好啊</p>
    <p>你好啊</p>
    <p>你好啊</p>
    <!-- 一段结束 -->



   </div>
  </div>
    

    
</el-card> 


<el-button  class="button1"  type="info" round @click="logout">返回首页</el-button>

</div>
</div>

</div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
      methods: {
    logout() {
      this.$router.push('/homepage')
      //  window.sessionStorage.setItem()
    },
      },
     
}
</script>

<style lang="less" scoped>
 .box-card {
    width: 950px;
    margin-left: 200px;
    margin-top: 10px;
   // background-color: #f7f7f7;
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
    }
    p{
      color: #939393;
    }
 }
 .clearfix-tip{
  // position: absolute;
 //   font-family: Arial;
    color: #c2c2c2;
     margin-top: 11px;
     margin-right: 25px;
    
 }

.el-card__body{
    border-bottom: 1px solid #4976df;
     width: 100%;
  height:1px;
  margin-top: 1em;
  margin-bottom: 1em;
  background: #d4c4c4;
}
//返回首页
.button1{
    margin-left: 200px;
    margin-top: 30px;
}


 .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }
//题头
  .box-card1 {
    width: 480px;
      width: 950px;
    margin-left: 200px;
    margin-top: 50px;
  }
  .clearfix1{
   // background-color: #f7f7f7;
  //  margin: -20px -18px;
    text-align: left;
     margin-left: 30px;
    span{
    font-size: 25px;
    }
 }
 .clearfix-tip1{
  // position: absolute;
 //   font-family: Arial;
    color: #c2c2c2;
     margin-top: 11px;
     margin-right: 25px;
    
 }
 //新闻正体
 .news_content_part{
    padding-bottom: 60px;
    border-bottom: 2px solid #464646;
    margin-bottom: 22px;
    margin: 30px 0 0;
    line-height: 30px;
    text-indent: 2em;
    font-size: 15px;
    color: #7e7e7e;
 }
 .picture_img{
   width: 100%;
    text-align: center;
    margin: 30px 0;
    overflow: hidden;

 }
 .pic_title{
   text-align: center;
   font-size: 18px;

 }
</style>