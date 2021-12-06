<template>
    
  <div>
    <highcharts :options="chartOptions" :callback="myCallback">         
    </highcharts>
  </div>
 
</template>

<script>

export default {
  name: 'Chief',
  data () {
    return {
      chartOptions: {
        chart: {
          height: 600,
          inverted: true
        },
        title: {
          text: ' 职能组织结构'
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
          
           ['COO', 'CH-01'],
           ['COO', 'CH-04'],
       
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
            id: 'COO',
             title: 'COO  （职能）',
            name: '张雪莹',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12140620/Christer.jpg',
            layout: 'hanging',
            url:'/gongsi',
          }, {
            id: 'CH-01',
            title: ' 人事行政经理',
            name: '王艳丽',
            column: 1,
             url:'/administration',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg'
          },{
            id: 'CH-04',
            title: ' 财务总监',
            name: '段瑜',
            column: 1,
             url:'/financial',
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
