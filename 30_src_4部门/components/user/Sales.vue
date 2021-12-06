<template>
    
  <div>
    <highcharts :options="chartOptions" :callback="myCallback">         
    </highcharts>
  </div>
 
</template>

<script>

export default {
  name: 'Sales',
  data () {
    return {
      chartOptions: {
        chart: {
          height: 600,
          inverted: true
        },
        title: {
          text: ' 销售组织结构'
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
          name: 'Highsoft2',
          keys: ['from', 'to'],
          data: [
          
           ['SA-01', 'SA-02'],
           ['SA-01', 'SA-03'],
        
         
          
          ],
          levels: [
            {
              level: 0,
              color: 'pink'
            }, {
              level: 1,
               color: '#0D8AD7'
            },
          ],
          nodes: [{
            id: 'Shareholders'
          }, {
            id: 'Board'
          },{
           id: 'SA-01',
            title: ' 销售总监',
            name: '焦霜',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12140620/Christer.jpg',
            layout: 'hanging',
            url:'/market',
          }, {
            id: 'SA-02',
            title: ' 区域销售代表',
            name: '鲍胜剑',
            column: 1,
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg'
          }, {
            id: 'SA-03',
            title: ' 市场专员',
            name: '李孔烨子',
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
