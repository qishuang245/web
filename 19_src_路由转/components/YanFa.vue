<template>
      <el-container class="yanfa-container">
            <el-button type="info" @click="logout">退出</el-button>
  <div>
    <highcharts :options="chartOptions" :callback="myCallback">         
    </highcharts>
  </div>
   </el-container>
</template>

<script>

export default {
  name: 'YanFa',
  data () {
    return {
      chartOptions: {
        chart: {
          height: 600,
          inverted: true
        },
        title: {
          text: ' 研发部组织结构'
        },
  
        series: [{
          type: 'organization',
          name: 'Highsoft1',
          keys: ['from', 'to'],
          data: [
          
           ['CTO', 'YF-01'],
           ['CTO', 'YF-02'],
          
          ],
          levels: [
            {
              level: 0,
              color: '#359154'
            }, {
              level: 1,
               color: 'pink'
            }, {
              level: 2,
              color: 'blue'
            },
          ],
          nodes: [{
            id: 'Shareholders'
          }, {
            id: 'Board'
          },{
            id: 'CTO',
            title: 'CTO  （产品研发）',
            name: '王中原',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12140620/Christer.jpg',
            layout: 'hanging',
          }, {
            id: 'YF-01',
            title: ' 研发部',
            name: '王文静',
            column: 1,
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg'
          },
          {
            id: 'YF-02',
            title: ' 研发部',
            name: '张传印',
            column: 1,
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg'
          },
          ],
          colorByPoint: false,
          color: '#007ad0',
          dataLabels: {
            color: 'white'
          },
          borderColor: 'white',
          nodeWidth: 65
        }],
        tooltip: {
          outside: true
        },
        exporting: {
          allowHTML: true,
          sourceWidth: 800,
          sourceHeight: 600
        }
      }
    }
  },
  mounted () {},
  methods: {
     logout() {
      window.sessionStorage.clear()
      //重新定向到登录页
      this.$router.push('/gongsi')
    },
    myCallback () {
      console.log('this is callback function')
    }
  }
}
</script>

<style>
.highcharts-container {
  width: 600px;
  height: 400px;
  border: 1px solid #ddd;
  margin: auto;
}
</style>
