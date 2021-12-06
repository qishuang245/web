<template>
 <div class="con">

        <div class="carouBlock">
    <el-carousel  trigger="click" height="180px">
      <el-carousel-item > <!-- 可以设置链接跳转 -->
        <a href="/#/sample">
        <img  :src="image " class="carsouselimg" /></a>
      </el-carousel-item>
      <el-carousel-item >
        <a href="/#/news_1">       
        <img  :src="image2 " class="carsouselimg" /></a>
      </el-carousel-item>
      <el-carousel-item >
        <p>你还好啊</p>
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
  <iframe width="400" height="65" frameborder="0" scrolling="no" hspace="0" src="https://i.tianqi.com/?c=code&a=getcode&id=35&site=34&icon=1"></iframe>
  <!-- 
  <iframe width="400" height="40" frameborder="0" scrolling="no" hspace="0" src="https://i.tianqi.com/?c=code&a=getcode&id=40&icon=1"></iframe>
  -->


</el-card>
</div>

<div class="card1">
<el-card class="box-card1">
<div slot="header"  class="clearfix">
<span>公司要闻1</span>
<el-button style="float: right; padding: 3px 0 " type="text" @click="link1">更多>></el-button>
</div>


<div class="box-1">
    <el-carousel  indicator-position="outside" trigger="click" height="180px" >
      <el-carousel-item > <!-- 可以设置链接跳转 -->
        <a href="/#/sample">
        <img  :src="news_image " class="carsouselimg1" /></a>
      </el-carousel-item>
      <el-carousel-item >        
        <img  :src="news_image2 " class="carsouselimg1" />
      </el-carousel-item>
      <el-carousel-item >
        <p>你还好啊</p>
        <img  :src="news_image3 " class="carsouselimg1" />
      </el-carousel-item>
    </el-carousel>
  </div>

  <div class="box-2">
    <span>团建</span><hr>
    <div class="back">

    </div>


   </div>



</el-card>
</div>

<div class="card2">
<el-card class="box-card2">
<div slot="header" class="clearfix">
<span>法制规章2</span>
<el-button style="float: right; padding: 3px 0" type="text" @click="link2">更多>></el-button>
</div>
<div  class="rule">
  <ul>
    <li >
    <div class="logo2" >
        <div class="img"></div>
     </div>
    <div class="news">
      <a href="/#/sample">
        公司礼品管理制度
       </a>
      <span  class="tip"> 1021-09-21 </span>
        </div>
    </li>
     <li >
    <div class="logo2" >
        <div class="img"></div>
     </div>
    <div class="news">
      <a href="/#/sample">
        公司年假管理制度
       </a>
      <span  class="tip"> 1021-09-21 </span>
        </div>
    </li>
     <li >
    <div class="logo2" >
        <div class="img"></div>
     </div>
    <div class="news">
      <a href="/#/sample">
        鹏云网络薪酬管理制度
       </a>
      <span  class="tip"> 1021-09-21 </span>
        </div>
    </li>
     <li >
    <div class="logo2" >
        <div class="img"></div>
     </div>
    <div class="news">
      <a href="/#/sample">
        公司年假管理制度
       </a>
      <span  class="tip"> 1021-09-21 </span>
        </div>
    </li>
    
  </ul>

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
<el-card class="box-card4" >
<div slot="header" class="clearfix">
<span>公告通知4</span>
<el-button style="float: right; padding: 3px 0" type="text" @click="link4">更多>></el-button>
</div>
<div  class="text4 item">
  <ul>
    <li><a href="/#/sample">
    <span >鹏云网络总05-关于召开2021年1-3季度经营分析会议的通知</span> </a>
    <span  class="tip" style="float: right;font-size:14px "  > 2021-09-21 </span>
    </li>
     <li><a href="/#/sample">
    <span >关于2021年端午节放假通知</span> </a>
    <span  class="tip" style="float: right;font-size:14px " > 2021-09-21 </span>
    </a></li>
     <li><a href="/#/sample">
    <span >PY-20210101关于2021年春节放假通知</span> </a>
    <span class="tip" style="float: right;font-size:14px " > 2021-09-21 </span>
    </li>
    <li><a href="/#/sample">
    <span >PY-20211101关于2021年国庆节放假通知</span> </a>
    <span class="tip" style="float: right;font-size:14px " > 2021-09-21 </span>
    </li>
  </ul>

</div>
</el-card>
</div>

<div class="card5">
<el-card class="box-card5">
<div slot="header" class="clearfix">
<span>鹏云产品5</span>
<el-button style="float: right; padding: 3px 0" type="text" @click="link5">更多>></el-button>
</div>

<div  class="product">
  <a href="/i/w3school_logo_white.gif" download="w3logo">
  <div class="prodImg">
    <img src="../assets/PDF文档.png">
    <div>
    <p>分布式块存储DBS白皮书</p> 
    <span >对外文件</span> 
    </div>
    </div> 
  </a>
  <p>2021-09-21</p>
</div>
<div  class="product">
  <a href="/i/w3school_logo_white.gif" download="w3logo">
  <div class="prodImg">
    <img src="../assets/工作表.png">
    <div>
    <p>产品统计表分布式块存储DBS白皮书</p> 
    <span >内部文件</span> 
    </div>
    </div> 
  </a>
  <p>2021-09-21</p>
</div>

</el-card>
</div>

<div class="card6">
<el-card class="box-card6">
<div slot="header" class="clearfix">
<span>鹏云之家6</span>
<el-button style="float: right; padding: 3px 0" type="text" @click="link6">更多>></el-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
</div>
</el-card>
</div>

<div class="card7">
<el-card class="box-card7">
<div slot="header" class="clearfix">
<span>行业资讯7</span>
<el-button style="float: right; padding: 3px 0" type="text" @click="link7">更多>></el-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
</div>
</el-card>
</div>

<div class="card8">
<el-card class="box-card8">
<div slot="header" class="clearfix">
<span>员工论坛8</span>
<el-button style="float: right; padding: 3px 0" type="text"
@click="link8">更多>></el-button>
</div>
<div  class="text4 ">
  <ul>
    <li><a href="/#/sample">
    <span >【Java数据结构】栈与队列详解</span> </a>
    <span  class="tip" style="float: right;font-size:16px "  > 2021-09-21 </span>
    </li>
     <li><a href="/#/sample">
    <span >【Kotlin初学者】Android Studio 运行 main 函数报错解决</span> </a>
    <span  class="tip" style="float: right;font-size:16px " > 2021-09-21 </span>
    </a></li>
     <li><a href="/#/sample">
    <span >【MySQL数据库系列】二，MySQL数据库增删改查</span> </a>
    <span class="tip" style="float: right;font-size:16px " > 2021-09-21 </span>
    </li>
     <li><a href="/#/sample">
    <span >【MySQL数据库系列】二，MySQL数据库增删改查</span> </a>
    <span class="tip" style="float: right;font-size:16px " > 2021-09-21 </span>
    </li>
    
  </ul>

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
    methods: {
     link1() { 
    //重新定向到登录页
      this.$router.push('/news_1')
      //  window.sessionStorage.setItem()
     },
      link2() { 
      this.$router.push('/news_1')
     },
      link4() { 
      this.$router.push('/news_1')
     },
     link5() { 
      this.$router.push('/news_1')
     },
     link6() { 
      this.$router.push('/news_1')
     },
     link7() { 
      this.$router.push('/news_1')
     },
     link8() { 
      this.$router.push('/news_1')
     },
   },
   data() {
           return {             
               image : require("../assets/top-1.png"), 
               image2 : require('../assets/top-2.png'),  
               image3 : require('../assets/top-3.png'),   
                value: new Date(), 
               news_image :require("../assets/new-normal.png"),
               news_image2 :require("../assets/new-travel.png"), 
               news_image3 :require("../assets/new-normal.png"),            
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
    background: cac3c3;
}
 //走马灯
 .carouBlock{
   margin-bottom: 5px;
   width: 1207px;
   //margin-left: 5px;
    float: left;
  // margin-top: 5px;
  p{
   font-size:20px;
   color:rgb(255, 254, 254);
   position:absolute;
   top:120px;
   left:80px;}
 }
.carsouselimg {
  width: 1200px !important;
  height: 300px;
}
.carsouselimg1 {
  width: 320px !important;
  height: 180px;
}
.img{
  width: 100%;
}
//框内文字
  .text4 {
    font-size: 14px;
   // padding: 10px;
   // margin-top: 10px;
   ul{
  padding: 0;
  margin: 0;
  li{
    //margin: 0;
    padding: 0;
    list-style: none;
    margin-top: -2px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    .logo2{   
      width: 40px;
      height: 38px;
      background: #f2f9ff;
      display: flex;
      justify-content: center;
      align-items: center;
      .img{
        width: 26px;
        height: 26px;
        background-image: url('../assets/规章制度.png');
      }
    }
    .news{
      
    } 
    a{
      text-decoration:none; //下划线
      font-size: 14px;
      margin-top: 6px;
      color: black;
      :hover{
        color: blue;
      }
    }
    
  }
}
    
  }

  //框内文字规章制度
  .rule {
    font-size: 16px;
   // padding: 10px;
   // margin-top: 10px;
    ul{
    padding: 0;
    margin: 0;
    li{
      width: 420px;
      height: 38px;
      //background: rgb(227, 209, 243);
      border: 1px solid #e9f0fd;
      //margin: 0;
      padding: 0;
      list-style: none;
      margin-top: -2px;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      .logo2{   
        width: 40px;
        height: 38px;
        background: #f2f9ff;
        display: flex;
        justify-content: center;
        align-items: center;
        .img{
          width: 26px;
          height: 26px;
          background-image: url('../assets/规章制度.png');
        }
      }
    .news{
      width: 370px;
      //border: 1px solid #000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      //margin-left: -150px;
    } 
    a{
      text-decoration:none; //下划线
      display: block;
      font-size: 14px;
     // margin-top: 6px;
      color: black;
      &:hover{
        color: blue;
      }
    }
    .tip{
      font-size: 15px;
    }
  }
}
}
//框内文字鹏云产品
  .product{
    display: flex;
    justify-content: space-between;
    a{
      text-decoration: none;
      display: block;
      width: 450px;
      height: 85px;
      margin-top: -18px;
     // background-color:rgb(231, 95, 95);

    .prodImg{
      display: flex;
      align-items: center;


      img{
        width: 32px;
        height: 42px;
        margin-right: 20px;
      }
      div{
        p{
          color: #3b3c3e;
        }
        span{
          position: relative;
          top: -15px;
          font-size: 14px;
          color: #1a7ae8;
        }

      }
    }
  }
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
    //文字间距
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
 height: 100px;
 background: rgb(227, 209, 243);
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
 height: 360px;
 margin-left: 5px;
 margin-top: -90px;
// padding: 10px;
   float: right;
 }
 //修改日历
 .el-calendar{
  //background-color: #bed5ec;
    width: 400px;
   // height: 550px;
    margin-left: -20px;
    margin-top: -15px;
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
 .one{
  display: block;
  font-size: 16px;
  color: #000000;
  text-align: left;
  
  //float: left;
 }
 .tip{
  // position: absolute;
 //   font-family: Arial;
    color: #a8a9ad;
     margin-top: 10px;
     margin-right: 10px;
     font-size: 15px;

    
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
      //使用 /deep/ 深度修改标签样式
      /deep/ .el-card__body{
      padding: 15px ;

    }
    
 }
 //在图上添加文字
 el-carousel-item{position:relative;}
 
//公司要闻图片
.box-1{
    width: 320px;
    margin-top: -5px;
  }
 .box-2{
     float: right;
     width: 360px;
     height: 200px;
     background: rosybrown;
     margin-top: -210px;
   }
.back{
  width: 300px;
  height: 150px;
  background-image:url("../assets/new-normal.png");
}


</style>
