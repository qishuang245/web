<template>
 <!-- 添加自定义class 主页面最外框-->
  <el-container class="home-container">




 
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>

<div class="el-card-body" style="height:500px;overflow-y:auto">
  <div   v-for="item in items"   v-bind:key="item.id"  class="text item" >{{item.text}} 
         <div  class="box-1" >  
      <div class="photo-1">
           &nbsp;&nbsp;<a :href="item.url"><img  :src= "item.picture"></a>        
      </div> 

      <div class="text-1">
        <div class="text-2" ><a :href="item.url">
           <span> {{item.title}} </span> </a>             
      </div>
        <div class="text-3"> 
          <br>
      <span>{{item.message}}</span> <br> 
      </div>
     </div> 
      <div class="text-4"> 
      <span>{{item.date}}</span> <br>
      </div>    
        </div> 
         <div class="line" /> <br>
  </div>
  </div>
</el-card> 





 

 </el-container>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
     data() {
      return {
          
            items:[
        {
        text:"第一组",
        url:'/#/gongsi',
        picture: require('../assets/new-travel.png'),
         title:'团建',
         message:'  爬山事实上，未来无论是更深的蓝色还是较浅的蓝色都已经使用了几十年。法国海军和许多官方的建筑都一直使用海军蓝，但在1976年，在时任法国总统',
         date:'2021-09-29',
         },
        {
        text:"第二组",
         url:'/#/sample',
         picture:require('../assets/new-normal.png'),
        title:'爬山',
         message:'拍摄，详细内容组后再内容 ，，，，，',
          date:'2021-09-21',
          },
        {
        text:"第三组",
         url:'/#/welcome',
         picture:require('../assets/new-travel.png'),
         title:'跳水',
        message:'羽毛球最近新闻，详细内容组后再内容 ，，，，，',
         date:'2021-09-23',
         },
          {
              text:"第三组",
         url:'/#/welcome',
         picture:require('../assets/new-travel.png'),
         title:'跳水',
        message:'羽毛球最近新闻，详细内容组后再内容 ，，，，，',
         date:'2021-09-23',
         },
          {text:"第三组",
         url:'/#/welcome',
         picture:require('../assets/new-travel.png'),
         title:'跳水',
        message:'羽毛球最近新闻，详细内容组后再内容 ，，，，，',
         date:'2021-09-23',
         },
          {text:"第三组",
         url:'/#/welcome',
         picture:require('../assets/new-travel.png'),
         title:'跳水',
        message:'羽毛球最近新闻，详细内容组后再内容 ，，，，，',
         date:'2021-09-23',
         },
          {text:"第三组",
         url:'/#/welcome',
         picture:require('../assets/new-travel.png'),
         title:'跳水',
        message:'羽毛球最近新闻，详细内容组后再内容 ，，，，，',
         date:'2021-09-23',
         },
    ],
         
       

      
      }
    }

}
</script>

<style lang="less" scoped>

.topnews{
    width: 500px;
 //   clear:both;
}
.el-card-body{
  //background-color: burlywood;
  padding: -8px;
}

.el-table{
    margin-top: 1em;
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

  .box-card {
    width: 480px;
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
    width: 80px;
    height: 50px;
 position:relative;
	left:780px;
    right: 800px;
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
  margin-bottom: 1.5em;
  background: #d4c4c4;
  position: relative;
  text-align: center;

}


</style>