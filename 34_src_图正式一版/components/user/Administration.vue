<template>
    
  <div>
    <highcharts :options="chartOptions" :callback="myCallback">         
    </highcharts>
  </div>
 
</template>

<script>

export default {
  name: 'Administration',
  data () {
    return {
      chartOptions: {
        chart: {
            margin: [200, 580, 380, 590],
            //背景颜色=渐进色
          backgroundColor: {
		     	linearGradient: [0, 0, 500, 500],
      			stops: [
				[0, 'rgb(255, 255, 255)'],
				[1, 'rgb(200, 200, 255)']
			]
		},
          height: 800,
          inverted: true
        },
          title: {
          text: '鹏云网络有限公司组织结构',
         // x: 200,
			    y: 50,
          
        },
          subtitle: {
		       text: ' 人事行政组织结构',
            y: 90,
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
          
           ['CH-01', 'CH-02'],
           ['CH-01', 'CH-03'],
       
          ],
          levels: [
            {
              level: 0,
              color: '#3379FD'
            }, {
              level: 1,
               color: '#60AAFF'
            }, {
              level: 2,
              color: 'blue'
            },
          ],
          nodes: [{
            id: 'Shareholders'
          }, {
            id: 'Board'
          }, {
            id: 'CH-01',
            title: ' 人事行政经理',
            name: '王艳丽  <a href="/#/shp_cto"><i class="el-icon-document"></i>档案</a>',
             url:'/chief',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg'
          },{
            id: 'CH-02',
            title: ' 行政主管',
            name: '刘国燕  <a href="/#/shp_cto"><i class="el-icon-document"></i>档案</a>',
            column: 1,
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg'
          },{
            id: 'CH-03',
            title: ' 前台',
            name: '江天禛  <a href="/#/shp_cto"><i class="el-icon-document"></i>档案</a>',
            column: 1,
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg'
          },
          ],
          colorByPoint: false,
          color: '#4096E2',
          dataLabels: {
            color: 'white'
          },
          borderColor: '#B5A5A5',
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
   border: 1px solid #ddd;
  margin: auto;
  
}
</style>
