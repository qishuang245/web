<template>
  <div class="container">
    <!-- <div class="carousel">
      <div class="img1" :style="testA">123</div>
    </div> -->
    <el-table :data="tableData" style="width:800px;margin:150px" border>
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="price" label="价格" />
      <el-table-column prop="num" label="数量" />
      <el-table-column label="增加/减少">
        <template slot-scope="scope">
          <el-button type="primary" @click="plusItem(scope.$index)">+</el-button>
          <el-button type="danger" @click="minusItem(scope.$index)">-</el-button>
        </template>
      </el-table-column>
      <el-table-column label="删除">
        <template slot-scope="scope">
          <el-button type="success" @click="delItem(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="position:absolute;top: 20%;left: 55%;">
      <el-button @click="showDialog">打开商城</el-button>
      <p>totalPrice:{{ totalPrice }}</p>
    </el-row>
    <!-- :value:value， prop传的值，@event:event名 -->
    <diaglog :open-market="openMarket" @closeMarket="receiveMessage" @addGood="addGood" />
  </div>
</template>
<script>
import diaglog from './market.vue'
export default {
  name: '',
  components: {
    diaglog
  },
  data() {
    return {
      openMarket: false,
      form: {

      },
      tableData: [
        {
          id: 1,
          name: '手机',
          price: 998,
          num: 1
        },
        {
          id: 2,
          name: '手机壳',
          price: 9.8,
          num: 2
        }
      ]
    }
  },
  computed: {
    // 循环计算总价数组 reduce方法
    totalPrice() {
      return this.tableData.reduce((pre, cur) => {
        return pre + cur.num * cur.price
      }, 0)
      // return this.tableData.reduce(function (pre,cur,index) {
      //   console.log(pre,cur,index);
      // },0)
    }
  },
  methods: {
    addGood(item) {
      // 判断新添加的商品是否已有，根据id判断，有就数量加1，没有就添加到表格
      const existGood = this.tableData.findIndex((i,index) => {
        return i.id === item.id
      })
      if (existGood !== -1) {
        this.tableData[existGood].num++
      } else {
        this.tableData.push(item)
      }
    },
    receiveMessage() {
      this.openMarket = false
    },
    showDialog() {
      this.openMarket = true
    },
    // e传递index获取对应的item
    delItem(e) {
      this.tableData.splice(e, 1)
    },
    plusItem(e) {
      this.tableData[e].num++
    },
    minusItem(e) {
      if (this.tableData[e].num === 0) {
        return
      } else {
        this.tableData[e].num--
      }
    }
  }
}
</script>
<style lang="less" scoped>
  // .carousel{
  //   width: 1200px;
  //   height: 180px;
  // }
</style>>
