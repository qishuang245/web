<template>
    
  <div>
    <highcharts :options="chartOptions" :callback="myCallback">         
    </highcharts>
  </div>
 
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
         plotOptions: {
           series: {
             cursor: 'pointer',
             events: {
               click: function (e) {
                   location.hash = e.point.url;
                 // location.href = e.point.url;
                //上面是当前页跳转，如果是要跳出新页面，那就用
                //window.open(e.point.url);
                //这里的url要后面的data里给出
        }
    },
    }
},
  
        series: [{
          type: 'organization',
          name: 'Highsoft1',
          keys: ['from', 'to'],
          data: [
          
           ['CTO', 'YF-01'],
           ['CTO', 'YF-02'],
          ['CTO', 'YF-03'],
           ['CTO', 'YF-04'],
          ['CTO', 'CS-01'],
          
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
            title: 'CTO  （高级研发经理）',
            name: '王中原',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12140620/Christer.jpg',
            layout: 'hanging',
            url:'/gongsi',
          }, {
            id: 'YF-01',
            title: ' 研发经理',
            name: '王文静',
            column: 1,
             url:'/yanfa',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg'
          },
          {
            id: 'YF-02',
            title: ' 研发经理',
            name: '张传印',
            column: 1,
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
             url:'/yanfa2',
          },{
            id: 'YF-03',
            title: ' 研发经理',
            name: '冯钦',
            column: 1,
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
             url:'/yanfa3',
          }, {
            id: 'YF-04',
            title: ' 研发部',
            name: '高姣姣',
            column: 1,
              url:'/yanfa4',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg'
          },{
            id: 'CS-01',
            title: ' 测试经理',
            name: '吴文彰',
            column: 1,
             url:'/test',
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
    
    myCallback () {
      console.log('this is callback function')
    }
  }
}
</script>

<style>
.highcharts-container {
  width: 400px;
  height: 400px;
  border: 1px solid rgb(189, 78, 78);
  margin: auto;
  
}
</style>
