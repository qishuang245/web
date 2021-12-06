<template>
    <div>
        Home 组件
        <el-button type="info" @click="logout">退出</el-button>
    </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
    methods :{
        logout (){
                window.sessionStorage.clear();
                //重新定向到登录页
                this.$router.push("/login");
        }
    },

}
</script>


<style lang="less" scoped>

</style>