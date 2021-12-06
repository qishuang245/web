<template>
    <div>
        <h3>人员组织组件</h3>
        <!-- 面包屑导航区  -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>导航栏二</el-breadcrumb-item>
  <el-breadcrumb-item>二级菜单导航一-1</el-breadcrumb-item>
</el-breadcrumb>
 <!-- 卡片视图区域 -->
<el-card >
    <!-- 搜索与添加区域 -->
  <el-row :gutter="20">
        <el-col :span="7">
           <el-input placeholder="请输入内容" >
            <el-button slot="append" icon="el-icon-search" ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <!-- 添加用户区域 -->
          <el-button type="primary" @click="addDialogVisible = true">用户添加</el-button>
        </el-col>
         <el-col :span="4">
          <!-- 编辑按钮 -->
          <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
          <!-- 删除按钮 -->
          <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
        </el-col>
      </el-row>
</el-card>

 <!-- 添加用户的对话框-->
<el-dialog
  title="添加用户"
  :visible.sync="addDialogVisible"
  width="50%"
   >
   <span>111</span>
    <!-- 内容主体区
  <el-form :model="addForm" :rules="rules" ref="addFormRules" label-width="100px" class="demo-ruleForm">
  <el-form-item label="活动名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  </el-form>
  -->
   <!-- footer底部区域-->
  <span slot="footer" class="dialog-footer">
    <el-button @click="addDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

    </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
    data(){
        return {
            //控制用户对话框的显示和隐藏
            addDialogVisible : false,
             // 添加用户数据的对象
      addForm: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      //添加表单的验证规则对象
      addFormRules  :{},
        }

    },

}
</script>

<style lang="less" scoped>

</style>