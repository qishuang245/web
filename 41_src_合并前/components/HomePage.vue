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
  <router-link to="welcome">点击进入公司组织架构图 </router-link>  

  <div class="line" />

   <router-link to="sales"> 点击进入公司新闻界面</router-link>   <br>
   
   <div class="button-1">
   <el-button  type="info" round @click="news" >新闻</el-button>
    <el-button type="info" round @click="news" >预留区域</el-button>
</div>



 <!-- 列表区域 -->
<div class="topnews">
    <p>重点关注:</p>
     <div class="line" />
    <ul id="example-1">
  <li >从</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>   <br>
</div>

<!-- 头条-->
<el-card class="box-card-1">
  <div slot="header" class="clearfix">
    <span>重点关注</span>
      <span class="clearfix-tip" style="float: right;font-size:18px " > FOCUS ON </span>
  </div>
 
 <div  class="ooo">
   <div   v-for="item1 in items1"   v-bind:key="item1.id"  class="text item" >
    <router-link :to="item1.link">
   <div class="top1" >
     <p>   {{item1.news}}</p>  <br>
     </div>
     </router-link>  
  <div class="line" />
   
  </div>
 </div>

</el-card>

  <!-- 卡片区域 -->
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>新闻展示区-最新活动</span>
    <span class="clearfix-tip" style="float: right;font-size:18px " > NEWS INFOMATION </span>
     <!--  操作按钮右侧
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    -->
  </div>

                                      <!-- 内容栏滚动条 -->
  <div  class="text item" style="height:480px;overflow-y:auto">
     <!-- 第一栏 -->
    
    <div class="box-1" >
      <div class="photo-1">
           &nbsp;&nbsp;<a href="/#/gongsi"><img src="../assets/new-travel.png" ></a>        
      </div> 
  
      <div class="text-1">
        <div class="text-2" ><a href="/#/gongsi">
      <span>团建</span></a>    
      </div>
        <div class="text-3"> 
          <br>
      <span>  爬山事实上，未来无论是更深的蓝色还是较浅的蓝色都已经使用了几十年。法国海军和许多官方的建筑都一直使用海军蓝，但在1976年，在时任法国总统</span> <br>
      </div>    
     </div> 
     <div class="text-4"> 
      <span>2021-09-29</span> <br>
      </div>
        </div> 
         <div class="line" /> <br>

          


        <!-- 第二栏 -->
         <div class="box-1"  >
      <div class="photo-1">
           &nbsp;&nbsp;<a href="/#/sample"><img src="../assets/new-normal.png"> </a>        
      </div> 
     
      <div class="text-1">    
       <div class="text-2"><a href="/#/sample">
      <span>球赛</span> <br></a>
      </div>
        <div class="text-3">
           <br>
      <span>羽毛球最近新闻，详细内容组后再内容 ，，，，，</span> 
      </div>
     </div> 
         <div class="text-4"> 
      <span>2021-09-29</span> <br>
      </div>
        </div> 
        <div class="line" /> <br>
          

     
       
          <!-- 第三栏 -->
         
           <div class="box-1" > 
      <div class="photo-1">
           &nbsp;&nbsp;<a href="/#/welcome"><img src="../assets/new-travel.png">    </a>           
      </div> 
     
      <div class="text-1">
      <div class="text-2"><a href="/#/welcome">
      <span>宣传片</span> <br> </a>      
      </div>
        <div class="text-3">
           <br>
      <span>拍摄</span> 
      </div>
     </div> 
             <div class="text-4"> 
      <span>2021-09-29</span> <br>
      </div>
        </div > 
        <div class="line" />  <br>
       
         

           <!-- 第四栏 -->
         <div class="box-1"  >
      <div class="photo-1">
           &nbsp;&nbsp;<a href="/#/sample"><img src="../assets/new-normal.png"> </a>        
      </div> 
     
      <div class="text-1">      
       <div class="text-2"><a href="/#/sample">
      <span>9周年</span> <br></a>
      </div>
        <div class="text-3">
           <br>
      <span>最近新闻，内容 ，，，，，</span> 
      </div>
     </div> 
        <div class="text-4"> 
         <span>2021-09-29</span> <br>
       </div>
        </div> 
          <div class="line" /> <br>

          
  </div>
</el-card>

<br>
<br>


 <!-- 卡片区域2 -->
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>鹏云网络展示区</span>
     <!--  操作按钮右侧
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    -->
  </div>

  <div  class="text item">
     <!-- 第一栏 -->
    
    <div class="box-1" >
      <div class="photo-1">
           &nbsp;&nbsp;<a href="/#/gongsi"><img src="../assets/new-organ.png" ></a>        
      </div> 
     
      <div class="text-1">
        <div class="text-2" ><a href="/#/gongsi">
      <span>公司组织架构</span></a>    
      </div>
        <div class="text-3"> 
          <br>
      <span>鹏云网络有限公司组织架构介绍</span> 
      </div>
     </div> 

        </div> 
          <el-divider></el-divider>


          <!-- 第二栏 -->
         
           <div class="box-1" > 
      <div class="photo-1">
           &nbsp;&nbsp;<a href="/#/welcome"><img src="../assets/new-travel.png">    </a>           
      </div> 
     
      <div class="text-1">
      <div class="text-2"><a href="/#/welcome">
      <span>预留区域</span> <br> </a>      
      </div>
        <div class="text-3">
           <br>
      <span>鹏云网络有限公司预留区域，内容 ，，，，，</span> 
      </div>
     </div> 
           
        </div > 
         <el-divider></el-divider> 

          
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
           data() {
      return {
          
          items1:[
        {
        text:"第一组",
        link:'gongsi',
         news:'  直使用海军蓝，但在1976年，在时任法国总统',
         },
         {
        text:"第二组",
         link:'welcome',
         news:'  事实上，未来无论是更深的',
         },
        {
        text:"第三组",
        link:'sample',
         news:'  拍摄，详细内容组后再内容 统',
         },
       
    ],
  
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
    text-align: center;
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
    width: 500px;
    margin-left: 150px;
    margin-top: 50px;
    border:1px solid #1a1111;
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
.top1{
  height: 25px;
  
  p{
    margin-top: 5px;
  }
}
/* 头条*/
 .box-card-1 {
    width: 780px;
    margin-left: 350px;
    margin-top: 50px;
  }
</style>