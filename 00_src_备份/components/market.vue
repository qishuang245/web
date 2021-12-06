<template>
  <el-dialog :visible.sync="needVisible" title="market" width="30%" @close="closeDialog">
    <el-table :data="tableData" style="width:500px;border">
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="price" label="价格" />
      <el-table-column label="添加">
        <template slot-scope="scope">
          <el-button type="success" @click="addItem(scope.$index)">添加</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div slot="footer" class="dialog-footer">
      <el-button @click="needVisible = false">取 消</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'Market',
  props: {
    openMarket: {
      default: false,
      type: Boolean
      // prop父子传值，定义默认值和类型
    }
  },
  data() {
    return {
      needVisible: false,
      tableData: [
        {
          id: 3,
          name: '手机充电线',
          price: 19.8,
          num: 1
        },
        {
          id: 4,
          name: '手机电池',
          price: 98,
          num: 1
        },
        {
          id: 5,
          name: '手机钢化膜',
          price: 10,
          num: 1
        },
        {
          id: 6,
          name: '定制钥匙扣',
          price: 100,
          num: 1
        },
        {
          id: 7,
          name: '手机摄像头',
          price: 1998,
          num: 1
        }
      ]
    }
  },
  watch: {
    openMarket(val) {
      console.log(val);
      this.needVisible = val
    }
  },
  mounted() {
    // console.log(this.openMarket);
  },
  methods: {
    addItem(e) {
      // 子父传值，$emit，第一个参数事件名，父组件中，定义相同事件名，第二个传递的值
      this.$emit('addGood', this.tableData[e])
    },
    closeDialog() {
      this.$emit('closeMarket')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
