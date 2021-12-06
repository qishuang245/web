<template >
 <!--   组件的结构  -->
  <div  class="login_container">
      登录组件111
      <div class="login_box"></div>
  </div>
</template>

<script>
// 组件交互相关的代码（数据，方法等）
export default {
}
// export   default          //默认暴露       引入时import ??? from ???
</script>

<style >
.login_container{
    background-color: #cc3ac5 ;
    height: 100%;
}

.login_box{
    width: 450px;
    height: 300px;
    background-color:  #fff;
    border-radius:  3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
