<template>
 <!-- 添加自定义class 主页面最外框-->
  <el-container class="home-container">
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
  <router-link to="welcome">点击进入公司组织架构图 </router-link>  

  <div class="line" />

   <router-link to="sales"> 点击进入公司新闻界面</router-link>   <br>
   
   <div class="button-1">
   <el-button  type="info" round @click="news" >新闻</el-button>
    <el-button type="info" round @click="news" >预留区域</el-button>
</div>

<timer></timer>
<!-- 天气
<iframe width="400" height="100" frameborder="0" scrolling="no" hspace="0" src="https://i.tianqi.com/?c=code&a=getcode&id=35&site=34&icon=1"></iframe>
-->
<div class="test">
<el-calendar v-model="value">
</el-calendar>
</div>





 <!-- 列表区域 -->
 <div class="con">
<div class="topnews">
    <p>重点关注:</p>
     <p>重点关注:</p>
     <div class="line" />
    <ul id="example-1">
  <li >从</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>   <br>
</div>

<div class="topnews1">
    <p>重点关注:</p>
     <p>重点关注:</p>
     <div class="line" />
    <ul id="example-1">
  <li >从</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>   <br>
</div>
</div>

<!-- 头条-->
<div class="zhong">
<div class="box-card-1">
<el-card >
  <div slot="header" class="clearfix">
    <span>重点关注</span>
      <span class="clearfix-tip" style="float: right;font-size:18px " > FOCUS ON </span>
  </div>
 
 <div  class="ooo">
   <div   v-for="(item1 ,a) in items1"   v-bind:key="item1.id"  class="text item" >
 
    <router-link :to="item1.link">
   <div :class="top1[a]" >
     <p>   {{item1.news}}</p>  <br>
     </div>
     </router-link>  
  <div class="line" />
  
  </div>
  </div>

</el-card>
</div>
<div class="box-card-1">
<el-card >
  <div slot="header" class="clearfix">
    <span>重点关注</span>
      <span class="clearfix-tip" style="float: right;font-size:18px " > FOCUS ON </span>
  </div>
 
 <div  class="ooo">
   <div   v-for="(item1 ,a) in items1"   v-bind:key="item1.id"  class="text item" >
 
    <router-link :to="item1.link">
   <div :class="top1[a]" >
     <p>   {{item1.news}}</p>  <br>
     </div>
     </router-link>  
  <div class="line" />
  
  </div>
  </div>

</el-card>
</div>
</div>



  <!-- 新闻卡片区域 -->
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>新闻展示区-最新活动</span>
    <span class="clearfix-tip" style="float: right;font-size:18px " > NEWS INFOMATION </span>
     <!--  操作按钮右侧
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    -->
  </div>

                                      <!-- 内容栏滚动条 -->
  <div class="el-card-body" style="height:500px;overflow-y:auto">
  <div   v-for="item2 in items2"   v-bind:key="item2.id"  class="text item" >
         <div  class="box-1" >  
      <div class="photo-1">
           &nbsp;&nbsp;<a :href="item2.url"><img  :src= "item2.picture"></a>        
      </div> 

      <div class="text-1">
        <div class="text-2" ><a :href="item2.url">
           <span> {{item2.title}} </span> </a>             
      </div>
        <div class="text-3"> 
          <br>
      <span>{{item2.message}}</span> <br> 
      </div>
     </div> 
      <div class="text-4"> 
      <span>{{item2.date}}</span> <br>
      </div>    
        </div> 
         <div class="line" /> <br>
  </div>
  </div>
</el-card> 

<br>
<br>


 <!-- 其他功能卡片区域2 -->
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>鹏云网络展示区</span>
     <!--  操作按钮右侧
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    -->
  </div>

 <div class="el-card-body" >
  <div   v-for="item3 in items3"   v-bind:key="item3.id"  class="text item" >
     <!-- 第一栏 -->
    
    <div class="box-1" >
      <div class="photo-1">
           &nbsp;&nbsp;<a :href="item3.url"><img  :src= "item3.picture"></a>    
      </div> 
     
      <div class="text-1">
        <div class="text-2" ><a :href="item3.url">
    <span> {{item3.title}} </span> </a>    
      </div>
        <div class="text-3"> 
          <br>
      <span>{{item3.message}}</span> 
      </div>
     </div> 

 
         </div>
          <el-divider></el-divider>
</div>
  </div>
</el-card>

<div class="block">
    <span class="demonstration">Click 指示器触发</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>



 </el-container>


</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import timer from './timedata.vue'
export default {
  
  components:{
    timer
  },
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
           data() {
      return {
        top1: [
                    "ss1",
                    "ss2",
                    "ss3",
                    "ss4",
                ],
          //头条
          items1:[
        {
        link:'gongsi',
         news:'  直使用海军蓝，但在1976年，在时任法国总统',
         },
         {
         link:'welcome',
         news:'  事实上，未来无论是更深的',
         },
        {
        link:'sample',
         news: '  拍摄，详细内容组后再内容 统',
         },
          {
        link:'sample',
         news: '  拍摄11，详细内容组后再内容 统',
         },
       
       
    ],
   

      //新闻
          items2:[
        {      
        url:'/#/news_1',
        picture: require('../assets/new-travel.png'),
         title:'砥砺前行 再创辉煌 鹏云网络9岁生日快乐',
         message:'  爬山事实上，未来无论是更深的蓝色还是较浅的蓝色都已经使用了几十年。法国海军和许多官方的建筑都一直使用海军蓝，但在1976年，在时任法国总统',
         date:'2021-09-29',
         },
        {
         url:'/#/sample',
         picture:require('../assets/new-normal.png'),
        title:'爬山',
         message:'拍摄，详细内容组后再内容 ，，，，，',
          date:'2021-09-21',
          },
        {
         url:'/#/welcome',
         picture:require('../assets/new-travel.png'),
         title:'跳水',
        message:'羽毛球最近新闻，详细内容组后再内容 ，，，，，',
         date:'2021-09-23',
         },
          {
         url:'/#/welcome',
         picture:require('../assets/new-travel.png'),
         title:'跳水',
        message:'羽毛球最近新闻，详细内容组后再内容 ，，，，，',
         date:'2021-09-23',
         },
          {
         url:'/#/welcome',
         picture:require('../assets/new-travel.png'),
         title:'跳水',
        message:'羽毛球最近新闻，详细内容组后再内容 ，，，，，',
         date:'2021-09-23',
         },
          {
         url:'/#/welcome',
         picture:require('../assets/new-travel.png'),
         title:'跳水',
        message:'羽毛球最近新闻，详细内容组后再内容 ，，，，，',
         date:'2021-09-23',
         },
          {
         url:'/#/welcome',
         picture:require('../assets/new-travel.png'),
         title:'跳水',
        message:'羽毛球最近新闻，详细内容组后再内容 ，，，，，',
         date:'2021-09-23',
         },
    ],
    //功能 组织图
           items3:[
        {      
        url:'/#/gongsi',
        picture: require('../assets/new-organ.png'),
         title:'公司组织架构',
         message:'  鹏云网络有限公司组织架构介绍',
         },
        {
         url:'/#/sample',
         picture:require('../assets/new-travel.png'),
        title:'预留区域',
         message:'鹏云网络有限公司预留区域，内容 ，，，，，',
          },
       
    ],
     value: new Date(),

      }
    },


}
</script>

<style lang="less"  scoped>
.home-container {
  //height: 100%;
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
    width: 950px;
    margin-left: 250px;
    margin-top: 50px;
  }

 .clearfix{
    text-align: left;
    margin-left: 30px;
    span{
    font-size: 25px;
    }
 }
 .clearfix-tip{
  // position: absolute;
 //   font-family: Arial;
    color: #c2c2c2;
     margin-top: 11px;
     margin-right: 25px;
    
 }
 .box-1{
    height: 100px;
 }
 .photo-1{
   float: left;
   //浮动效果
   a{
    :hover{
    box-shadow: 3px 8px 8px 3px rgba(0, 0, 0, .25);
    transition: all .2s ease-in-out;
    }
 }

  img{
    width: 175px;
    height: 105px;
  }
}
/*文字区样式*/
.text-1{
   float: right;
   width: 78%;
   height: 110px;
   
 // height: 111px;
}
/* 标题*/
.text-2{
  float: left;
  margin-top: 1px;
 /*   text-align: center;*/
 a{
    :hover{
     color:#4580ee;
    }
 }
  span{
  font-size: 25px;
  line-height: 21px;
  color: #333;
}
}
/* 文字说明*/
 .text-3{
   margin-top: 15px;
    line-height: 24px;
  span{
  font-size: 15px;
    color: #7e7e7e;
}
}
.text-4{
    width: 100px;
 position:relative;
	left:780px;
    top :-15px;
   span{
   font-size: 15px;
    color: #7e7e7e;
  
}
}
/* 
a{
    width: 840px;
}
*/
/*横线*/
.line{
  float:right;
  width: 100%;
  height:1px;
  margin-top: 1em;
  margin-bottom: 1em;
  background: #d4c4c4;
  position: relative;
  text-align: center;

}
.topnews{
    width: 150px;
    //margin-left: 50px;
    margin-top: 50px;
    border:1px solid #1a1111;
     float:left;
 //   clear:both;
}
.topnews1{
    width: 150px;
    margin-left: 10px;
    margin-top: 50px;
    border:1px solid #1a1111;
     float:left;
 //   clear:both;
}

//去除LI表格中的圆点
li 
{
  list-style-type:none;
}
.ooo{
   
  a{
   // text-align: center;
    float: left;
    font-size: 25px;
    color: #063a4e;
    :hover{
     color:#4580ee;
     font-size:105%;
    }
   
  
  }
}
 //.top1{
 //  height: 25px;
 //  p{
 //    margin-top: 5px;
 //      background: #9dd3e7;
 //  }
 //}
/* 头条*/
 .box-card-1 {
    width: 780px;
    margin-left: 150px;
    margin-top: 50px;
     float:left;
  }
   .ss1{
  //  background: #71b262 ;
  //  color :red ;
    height: 25px;
  p{
    margin-top: 5px;     
  }
  }
  .ss2{
 //   background: #6288b2;
    height: 25px;
  p{
    margin-top: 5px;
    //可选择头条加粗
    font-weight:bold;
   
  }
  }
  .ss3 {
  //  background: #ecac60;
     height: 25px;
  p{
    margin-top: 5px;
     //可选择头条加粗
    font-weight:bold;
  }
  }
 .ss4 {
  //  background: #ecac60;
     height: 25px;
  p{
    margin-top: 5px;
  }
  }
  //回顶部先不用
//  .page-component__scroll{
  //  position: absolute;
  //  top: 0;
  //  right: 0;
  //  bottom: 0;
  //  left: 0;
  //  overflow-x: hidden;
 // }
 //走马灯
 .el-carousel__item h3 {
    color: #ffffff;
    text-align: center;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .block{
     width: 950px;
    margin-left: 250px;
    margin-top: 50px;
    margin-bottom: 150px;
  }
  .small{
    font-size: 20px;
  }

.el-calendar{
  background-color: #bed5ec;
    width: 350px;
   // height: 550px;
      margin-left: 250px;
    margin-top: 50px;
    margin-bottom: 150px;
}
//修改日历高度
.test  /deep/  .el-calendar-table  .el-calendar-day{
  height: 40px ;
}

</style>

