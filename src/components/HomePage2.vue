<template>
 <div class="con">
<!-- 走马灯 -->
  <div class="carouBlock">
    <el-carousel :interval="4000"  indicator-position="none" height="180px">
      <el-carousel-item > <!-- 可以设置链接跳转 -->
        
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

<!-- 天气0 -->
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

<!-- 公司要闻1 -->
<div class="card1">
<el-card class="box-card1">
<div slot="header"  class="clearfix">
  <img src="../assets/logo/新闻.png">
  <span>公司要闻</span>
  <a href="http://www.pengyunnetwork.com/#/News" target="blank">更多>></a>
</div>

<div  class="companyNews">
   <div class="compImg">
    <el-carousel trigger="click" height="198px">
      <el-carousel-item >
        <!-- 可以设置链接跳转 -->
        <a href="/#/news_1">
          <img src="../assets/news/new-pengyun.jpeg" >
          <p> &nbsp;鹏云网络在这九年再创辉煌！</p> 
        </a>
      </el-carousel-item>

      <el-carousel-item >
        <!-- 可以设置链接跳转 -->
        <a href="/#/news_1">
        <img src="../assets/news/new-save.jpeg" >
        <p> &nbsp;鹏云亮相第十届中国云计算大会</p> 
        </a>
      </el-carousel-item>
      <el-carousel-item >
        <!-- 可以设置链接跳转 -->
        <a href="/#/news_1">
        <img src="../assets/news/new-message.jpeg" >
        <p> &nbsp;鹏云网络云计算推动信息化建设！</p> 
        </a>
      </el-carousel-item>

    </el-carousel>
  </div>
  <div class="compText">
    <div>
      <a href="https://www.sohu.com/a/290420864_100138316" target="blank">
    <p>大象融媒携手鹏云网络，助力县融媒体中心建设</p> 
    <span >近日，南阳市首个县级融媒体中心-南召县融媒体中心正式挂牌！这标志着南阳市在推进传统媒体与新兴媒体深度融合上向前迈出</span> </a>
    </div>
    <div class="line" />
    <div>
      <a href="https://www.sohu.com/a/290414204_100138316?spm=smpc.author.fd-d.4.16384108835438wNnMya" target="blank">
    <p>鹏云网络中标福建联通</p> 
    <span >2018年中国联合网络通信有限公司福建省分公司信息系统工程IT设备采购公布结果，鹏云网络以第一中标候选人的优秀成绩成功中标</span> </a>
    </div>

  </div>

 
</div>

</el-card>
</div>

<!-- 法制规章2 -->
<div class="card2">
<el-card class="box-card2">
<div slot="header" class="clearfix">
  <img src="../assets/logo/法制规章.png">
  <span>法制规章</span>
  <a href="./static/ZBOX.pdf" target="_blank">更多>></a>
</div>
<div  class="rule">
  <ul>
    <li >
    <div class="logo2" >
        <div class="img"></div>
     </div>
    <div class="news">
      <a href="./static/ZBOX.pdf" target="_blank">
        公司礼品管理制度
       </a>
      <span  class="tip"> 2021-09-21 </span>
        </div>
    </li>
     <li >
    <div class="logo2" >
        <div class="img"></div>
     </div>
    <div class="news">
      <a href="./static/鹏云网络总06--组织架构调整及部门职责.pdf" target="_blank">
        组织架构调整及部门职责
       </a>
      <span  class="tip"> 2021-08-15 </span>
        </div>
    </li>
     <li >
    <div class="logo2" >
        <div class="img"></div>
     </div>
    <div class="news">
      <a href="./static/鹏云网络总06--组织架构调整及部门职责.pdf" target="_blank">
        鹏云网络知识产权
       </a>
      <span  class="tip"> 2021-05-21 </span>
        </div>
    </li>
     <li >
    <div class="logo2" >
        <div class="img"></div>
     </div>
    <div class="news">
      <a href="./static/鹏云网络总06--组织架构调整及部门职责.pdf" target="_blank">
        商业保密条款
       </a>
      <span  class="tip"> 2021-02-01 </span>
        </div>
    </li>
    
  </ul>

</div>
</el-card>
</div>

<!-- 日历3 -->
<div class="card3">
<el-card class="box-card3">
<!-- 日历 -->
<div class="test">
<el-calendar v-model="value">
</el-calendar>
</div>
</el-card>
</div>

<!-- 公告通知4 -->
<div class="card4">
<el-card class="box-card4" >
<div slot="header" class="clearfix">
  <img src="../assets/logo/公告.png">
  <span>公告通知</span>
  <a href="http://www.pengyunnetwork.com/#/Main" target="blank">更多>></a>
</div>
<div  class="text4 item">
  <ul>
    <li><a href="http://www.pengyunnetwork.com/#/Main" target="blank">
    <span >鹏云网络总05-关于召开2021年1-3季度经营分析会议的通知</span> </a>
    <span  class="tip" style="float: right;font-size:14px "  > 2021-09-21 </span>
    </li>
     <li><a href="http://www.pengyunnetwork.com/#/Main" target="blank">
    <span >关于2021年端午节放假通知</span> </a>
    <span  class="tip" style="float: right;font-size:14px " > 2021-09-21 </span>
    </a></li>
     <li><a href="http://www.pengyunnetwork.com/#/Main" target="blank">
    <span >PY-20210101关于2021年春节放假通知</span> </a>
    <span class="tip" style="float: right;font-size:14px " > 2021-09-21 </span>
    </li>
    <li><a href="http://www.pengyunnetwork.com/#/Main" target="blank">
    <span >PY-20211101关于2021年国庆节放假通知</span> </a>
    <span class="tip" style="float: right;font-size:14px " > 2021-09-21 </span>
    </li>
  </ul>

</div>
</el-card>
</div>

<!-- 鹏云产品5 -->
<div class="card5">
<el-card class="box-card5">
<div slot="header" class="clearfix">
  <img src="../assets/logo/产品库.png">
  <span>鹏云产品</span>
  <a href="http://www.pengyunnetwork.com/#/support/Material" target="blank">更多>></a>
</div>

<div  class="product">
  <a href="./static/ZettaStor.pdf" download="ZettaStor.pdf">
  <div class="prodImg">
    <img src="../assets/PDF文档.png">
    <div>
    <p>分布式块存储DBS白皮书</p> 
    <span >对外文件下载</span> 
    </div>
    </div> 
  </a>
  <p>2021-09-21</p>
</div>

<div class="line" />

<div  class="product">
  <a href="./static/ZBOX.pdf" download="ZBOX产品白皮书.pdf">
  <div class="prodImg">
    <img src="../assets/工作表.png">
    <div>
    <p>产品统计表分布式块存储DBS白皮书</p> 
    <span >内部文件下载</span> 
    </div>
    </div> 
  </a>
  <p>2021-09-21</p>
</div>

</el-card>
</div>

<!-- 鹏云之家6 -->
<div class="card6">
<el-card class="box-card6">
<div slot="header" class="clearfix">
  <img src="../assets/logo/家.png">
  <span>鹏云之家</span>
  <a href="http://www.pengyunnetwork.com/#/News " target="blank">更多>></a>
</div>
<div  class="family">
   <div class="familyImg">
    <el-carousel trigger="click" height="330px">
      <el-carousel-item >
        <!-- 可以设置链接跳转 -->
        <a href="http://www.pengyunnetwork.com/#/NewsDetail/85622893530570610" target="blank">
          <img src="../assets/new-travel.png" >
          <p> &nbsp;&nbsp;丰盛且别有风味的“野餐”后，大家开始了合作运球、数字接力、坐地起身等各种小游戏。这些小游戏不仅增加了快乐，还增进了团队的合作。</p> 
        </a>
      </el-carousel-item>

      <el-carousel-item >
        <!-- 可以设置链接跳转 -->
        <a href="http://www.pengyunnetwork.com/#/NewsDetail/85622893530570610" target="blank">
        <img src="../assets/new-happy.png" >
        <p> &nbsp;&nbsp;鹏云网络在这九年的风风雨雨中，始终坚信没有解决不了的问题，我们鹏云人会将登山精神一直发扬下去！未来会一直砥砺前行，再创辉煌！</p> 
        </a>
      </el-carousel-item>

      <el-carousel-item >
        <!-- 可以设置链接跳转 -->
        <a href="/#/gongsi">
        <img src="../assets/news/new-organ.png" >
        <p> &nbsp;&nbsp;鹏云网络组织架构图：企业组织结构是进行企业流程运转、部门设置及职能规划等最基本的结构依据。</p> 
        </a>
      </el-carousel-item>

      
    </el-carousel>
  </div>

 
</div>
</el-card>
</div>

<!-- 行业资讯7 -->
<div class="card7">
<el-card class="box-card7">
<div slot="header" class="clearfix">
  <img src="../assets/logo/资讯栏目.png">
  <span>行业资讯</span>
  <a href="https://mp.sohu.com/profile?xpt=ZmVuZ196aGVuZzEyN0Bzb2h1LmNvbQ==&_f=index_pagemp_1&spm=smpc.content.author.1.1638531872045xiJ1eOK" target="blank">更多>></a>
</div>
<div class="information">
  <a href="http://news.sohu.com/a/504503287_100184917" target="blank">
    <div class="inforImg">
       <img src="../assets/news/new-big.png" > 
    </div>
    <div class="inforText">
      <p>万字深研：元宇宙应该是生产力工具，而不只是游戏娱乐</p> 
      <span >云存储，云计算，云传输。然后这里会有那些公司呢？比如说数据中心公司，会有一些CDN公司，会有显卡公司和显示芯片公司，这些东西都是基本生态</span>    
    </div>
  </a>
</div>
 <div class="line" />
<div class="information">
  <a href="https://www.sohu.com/a/290414204_100138316?spm=smpc.author.fd-d.4.1638531875289c8JkGRY" target="blank">
    <div class="inforImg">
       <img src="../assets/news/new-big2.png" > 
    </div>
    <div class="inforText">
      <p>鹏云网络中标福建联通</p> 
      <span >2018年中国联合网络通信有限公司福建省分公司信息系统工程IT设备采购公布结果，鹏云网络以第一中标候选人的优秀成绩成功中标</span>    
    </div>
  </a>
</div>

</el-card>
</div>

<!-- 员工论坛8 -->
<div class="card8">
<el-card class="box-card8">
<div slot="header" class="clearfix">
  <img src="../assets/logo/论坛.png">
  <span>员工论坛</span>
  <a href="http://www.pengyunnetwork.com/#/support/Skills" target="blank">更多>></a>
</div>
<div  class="text4 ">
  <ul>
    <li><a href="https://blog.csdn.net/qq_35553341/article/details/70230951" target="blank">
    <span >【Java数据结构】栈与队列详解</span> </a>
    <span  class="tip" style="float: right;font-size:16px "  > 2021-09-21 </span>
    </li>
     <li><a href="https://blog.csdn.net/yangzongbin/article/details/78394621" target="blank">
    <span >【Kotlin初学者】Android Studio 运行 main 函数报错解决</span> </a>
    <span  class="tip" style="float: right;font-size:16px " > 2021-09-21 </span>
    </a></li>
     <li><a href="https://blog.csdn.net/L_ZB_/article/details/110918675" target="blank">
    <span >【MySQL数据库系列】二，MySQL数据库增删改查</span> </a>
    <span class="tip" style="float: right;font-size:16px " > 2021-09-21 </span>
    </li>
     <li><a href="https://blog.csdn.net/L_ZB_/article/details/110918675" target="blank">
    <span >【MySQL数据库系列】一，MySQL数据库</span> </a>
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
   },
   data() {
      return {
        image : require("../assets/news/1.jpg"), 
        image2 : require('../assets/news/2.jpg'),  
        image3 : require('../assets/news/3.jpg'),   
        value: new Date(),             
         }
       },

}
</script>

<style lang="less" scoped>
.con{
   width: 1615px;
    height: 860px;
    padding: 5px;
    //width:100%;
  // height: 100%;
    background: cac3c3;

 //最上面走马灯
 .carouBlock{
   margin-bottom: 5px;
   width: 1215px;
   height: 180px;
   margin-left: -10px;
    float: left;
  // margin-top: 5px;
  img{
    width: 1215px;
    height: 180px;
  }
  p{
   font-size:20px;
   color:rgb(255, 254, 254);
   position:absolute;
   top:120px;
   left:80px;}
 }


//1框内文字公司要闻
.companyNews{
   display: flex;
    justify-content: space-between;
  .compImg{
   margin-bottom: 5px;
   width: 260px;
   a{
     display: block;
      width: 260px;
      height: 190px;
      //border: 1px solid #000;
      text-decoration: none;
      img{
        width: 260px;
        height: 150px;
        //margin-right: 20px;
      }
      p{
       color: #606060;
       margin-top: 2px;
       font-size: 16px; 
      }
   }
  }
  .compText{
    //display: block;
   // float: right;
    margin-left: 15px;
    width: 420px;
    height: 190px;
    //border: 1px solid rgb(219, 89, 89);
    div{
      width: 410px;
      height: 80px;
      margin-top: -5px;
      margin-bottom: 4px;
      a{
      text-decoration:none;
      p{
        font-size: 16px;
        margin-left: 15px;
        margin-top: -5px;
        margin-bottom: 18px;
        color: #3b3c3e;
      }
      span{
        display: block;
        margin-top: -10px;
        font-size: 14px;
        color: #a8a9ad;
      }
      }
    }


  }
}
//2框内文字规章制度
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
      font-size: 14px;
      margin-right: 18px;
      color: #a8a9ad;
    }
  }
}
}
//4框内文字公告通知
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
//5框内文字鹏云产品
  .product{
    display: flex;
    justify-content: space-between;
    a{
      text-decoration: none;
      display: block;
      width: 410px;
      height: 85px;
      margin-top: -16px;
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
    p{
    color: #a8a9ad;
  }
}
//6框内文字鹏云之家
.family{
  .familyImg{
   margin-bottom: 5px;
   width: 450px;
   //border: 1px solid #000;
   a{
     display: block;
      width: 440px;
      height: 310px;
      //border: 1px solid #000;
      text-decoration: none;
      img{
        width: 440px;
        height: 230px;
        //margin-right: 20px;
      }
      p{
       color: #606060;
       margin-top: 2px;
       font-size: 16px; 
      }
   }
  }
}
//7框内文字行业资讯
.information{
  display: flex;
  justify-content: space-between;
  margin-top: -2px;
  margin-bottom: 5px;
  a{
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    //display: block;
    width: 550px;
    height: 60px;
    //background-color:rgb(231, 95, 95);
    .inforImg{
     display: flex;
     align-items: center;
     img{
        width: 80px;
        height: 55px;
        //margin-right: 20px;
      } 
    }
    .inforText{
      margin-left: 10px;
      p{
        color: #3b3c3e;
        font-size: 14px;
         margin-top:-1px;
         margin-left: 5px;
      }
      span{
        position: relative;
        display: block;
         margin-top: -12px;
        //top: -15px;
        font-size: 12px;
        color: #a8a9ad;
        }
    }

  }

}

 // .item {
 //   margin-bottom: 12px;
 // }

  //题头样式
  .clearfix{
    margin-left: 10px;
    margin-top: -10px;
    margin-bottom: -10px;
    span{
    font-size: 20px;
    margin-left: 12px;
    //文字间距
    letter-spacing: 2px;
    }
    a{
      color: #a4a4a4;
      float: right;
      padding: 3px 0;
      text-decoration: none;
      font-size: 14px;
    }
  }


//天气
.box-card0 {
 width: 400px;
 height: 100px;
 background: #f2f9ff;
 margin-left: 5px;
// padding: 10px;
   float: right;
 }
 //要闻
.box-card1 {
 width: 745px;
 height: 270px;
 margin-left: -10px;
// padding: 10px;
   float: left;
   /*横线*/
  .line{
    float:right;
    width: 100%;
    height:1px !important;
    margin-top: 0.5em !important;
    margin-bottom: 1em!important;
    background: #e9e3e3;
    position: relative;
    text-align: center;
    }
 
 }
 .box-card2 {
 width: 464px;
  height: 270px;
 margin-left: 5px;
 //padding: -20px;
   float: left;
 }
 //日历
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
 width: 570px;
 height: 200px;
//padding: 10px;
 margin-left: -10px;
 margin-top: 5px;
   float: left;
    .one{
  display: block;
  font-size: 16px;
  color: #fa0000;
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
 }

 .box-card5 {
   width: 564px;
   height: 200px;
   margin-left: 5px;
  // padding: 10px;
   float: left;
   margin-top: 5px;
  /*横线*/
  .line{
    float:right;
    width: 100%;
    height:1px;
    margin-top: -1em;
    margin-bottom: -1em;
    background: #e9e3e3;
    position: relative;
    text-align: center;
    }
 }
  .box-card6 {
  width: 475px;  
    height: 410px;
    //padding: 10px;
    float: right;
    margin-left: -50px;
      margin-top: 5px;
 }
  .box-card7 {
   width: 570px;  
    height: 205px;
    //padding: 10px;
    float: left;
    margin-left: -10px;
     margin-top: 5px;
      /*横线*/
  .line{
    //float:right;
    width: 100%;
    height:1px ;
    margin-top: -0.2em ;
    margin-bottom: 0.3em;
    background: #e9e3e3;
    //position: relative;
    //text-align: center;
    }
 }
 .box-card8 {
    width: 564px;  
    height: 205px;
    //padding: 10px;
    float: left;
    margin-left: 5px;
      margin-top: 5px;
      //使用 /deep/ 深度修改标签样式
      /deep/ .el-card__body{
      padding: 15px ;

    }
     .one{
  display: block;
  font-size: 16px;
  color: #fa0000;
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
 }
 //在图上添加文字
 el-carousel-item{position:relative;}
 //修改轮播底部颜色
 /deep/ .el-carousel__button{
   background-color: #8c8c8c;
 }


}
</style>
