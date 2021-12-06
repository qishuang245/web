<template>
 <!-- 
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
 -->
<div class="topnews">
    <p>重点关注:</p>
     <div class="line" />
    <ul id="example-1">
  <li ></li>
  <li>Tea</li>
  <li>Milk</li>
</ul>   <br>

</div>


<div  class="ooo">
   <div   v-for="item in items"   v-bind:key="item.id"  class="text item" >{{item.text}} 
    <router-link to="welcome">
   <div class="top1" >
     <p>无论是更深的蓝色还是较浅的的建筑</p>  <br>
     </div>
     </router-link>  
  <div class="line" />
      <router-link to="gongsi">
     <div class="top1" >
     <p>事实上，未来无论是更深的</p>  <br>
     </div>
     </router-link>  
  <div class="line" />
       <router-link to="gongsi">
     <div class="top1" >
     <p>事实上，未来无论是更深的</p>  <br>
     </div>
     </router-link>  
  <div class="line" />    
  </div>
 </div>
 


      <router-link to="gongsi">
     <div class="top1" >
     <p>事实上，未来无论是更深的</p>  <br>
     </div>
     </router-link>  
  <div class="line" />
       <router-link to="gongsi">
     <div class="top1" >
     <p>事实上，未来无论是更深的</p>  <br>
     </div>
     </router-link>  
  <div class="line" /> 

</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
     data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },  {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }

}
</script>

<style lang="less" scoped>
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

</style>