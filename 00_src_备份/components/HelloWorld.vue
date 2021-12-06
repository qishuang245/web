<template>
  <div>
    <highcharts :options="chartOptions" :callback="myCallback">
          
    </highcharts>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      chartOptions: {
        chart: {
          height: 600,
          inverted: true
        },
        title: {
          text: 'Highsoft 公司组织结构'
        },
  
        series: [{
          type: 'organization',
          name: 'Highsoft',
          keys: ['from', 'to'],
          data: [
            ['CEO', 'CTO'],
            ['CEO', 'COO'],
            ['CEO', 'CSO'],
            ['CEO', 'CMO'],
          //  ['CTO', 'YF-111'],
            ['COO', 'RS-3']
          ],
          levels: [
            {
              level: 0,
              color: '#980104'
            }, {
              level: 1,
              color: '#359154'
            }, {
              level: 2,
              color: 'pink'
            },
            {
              level: 4,
              color: 'green'
            }
          ],
          nodes: [{
            id: 'Shareholders'
          }, {
            id: 'Board'
          }, {
            id: 'CEO',
            title: 'CEO',
            name: '陈靓',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132317/Grethe.jpg'
          },{
            id: 'CTO',
            title: 'CTO  （产品研发）',
            name: '王中原',
            column: 1,
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12140620/Christer.jpg',
            layout: 'hanging',
          }, {
            id: 'COO',
            title: 'COO  （职能）',
            name: '张雪莹',
            column: 1,
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12131849/Torstein1.jpg',
             layout: 'hanging'
          }, {
            id: 'CSO',
            title: '常务副总经理 （销售）',
            name: '刘军',
            column: 1,
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132313/Anita.jpg',
            layout: 'hanging'
          }, {
            id: 'CMO',
            title: '产品（技术支撑）',
            name: 'Vidar Brekke',
            column: 1,
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
            layout: 'hanging'
          }, 
          {
            id: 'RS-3',
            title: ' 前台',
            name: '江天禛',
            column: 2,
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg'
          }],
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
