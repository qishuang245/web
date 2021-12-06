<template >
 <!--   组件的结构  -->
  <div  class="login_container">
      登录组件111
      <div class="login_box">
          <!--      头像区域-->
           <div class="avatar_box">
          <img src="../assets/logo.png" alt="" />
            </div>
         <!-- 登录表单区域-->
         <el-form label-width="0px"  class="login_form">
              <!--        用户名 -->
        <el-form-item >
          <el-input></el-input>
        </el-form-item>
        <!--        密码-->
        <el-form-item >
          <el-input ></el-input>
        </el-form-item>    
        <!--        按钮区-->
        <el-form-item class="btns">
          <el-button type="primary" >登录</el-button>
          <el-button type="info" >重置</el-button>
        </el-form-item>
      </el-form>
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
    .login_form {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
  }
   .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
