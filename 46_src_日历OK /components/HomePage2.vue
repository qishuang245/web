<template>
  
  <el-menu
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
   :unique-opened="true"
  :router="true"
  default-active="/gongsi"
  class="el-menu-demo"
   mode="horizontal"
  
  >
  <el-menu-item class="li1" index="gongsi">处理中心</el-menu-item>
 <el-menu-item class="li2" index="homepage">我的工作台</el-menu-item>   
  <el-menu-item class="li3" index="3">消息中心</el-menu-item>
  <el-menu-item class="li4" index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>


  
</template>

<script>
export default {
    data() {
      return {
       // activeIndex: '1',
      //  activeIndex2: '1'

      //  @select="handleSelect"
      // 
      };
    },
    methods: {
    //  handleSelect(key, keyPath) {
     //   console.log(key, keyPath);
    //  }
    }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-demo{
  margin-left: 20px;
  height: 100px;

  
}
.el-menu--horizontal>.el-menu-item{
  margin-top: 20px;
  margin-left: 50px;

}
.li1{
  margin-left: 250px !important;
  font-size: 30px;
  margin-top: 20px;

}
.li2{
  margin-left: 50px;
}
.li3{
  margin-left: 50px;
}
.li4{
  margin-left: 50px;
}
</style>