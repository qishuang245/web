<template >
 <!--   组件的结构  -->
  <div  class="login_container">
      登录组件111
      <div class="login_box">
          <!--      头像区域-->
           <div class="avatar_box">
          <img src="../assets/logo.png" alt="" />
            </div>
      </div>
  </div>
</template>

<script>
// 组件交互相关的代码（数据，方法等）
export default {
}
// export   default          //默认暴露       引入时import ??? from ???
</script>

<style  lang="less" scoped>
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
    .avatar_box {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    box-shadow: 0 0 10px #ddd;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eeeeee;
    }
  }
}
</style>
