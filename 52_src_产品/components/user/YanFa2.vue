<template>
    
  <div>
    <highcharts :options="chartOptions" :callback="myCallback" class="photo">         
    </highcharts>
  </div>
 
</template>

<script>

export default {
  name: 'YanFa2',
  data () {
    return {
      chartOptions: {
        chart: {
          spacingLeft:470,
           spacingRight:470,
          spacingTop:50,
        //图距框的距离上右下左
       marginTop:200,
        marginBottom:380,
         //  margin: [200, 680, 380, 690],
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
		       text: ' 研发部张传印小组结构',
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
          name: 'Highsoft2',
          keys: ['from', 'to'],
          data: [
          
           ['YF-02', 'YF-07'],
       
          ],
          levels: [
            {
              level: 0,
              color: '#3379FD'
            }, {
              level: 1,
               color: '#60AAFF'
            },
          ],
          nodes: [{
            id: 'Shareholders'
          }, {
            id: 'Board'
          },{
             id: 'YF-02',
            title: ' 研发经理',
            name: '张传印  <a href="/#/shp_cto"><i class="el-icon-document"></i>档案</a>',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12140620/Christer.jpg',
            layout: 'hanging',
            url:'/yanfa',
          }, {
            id: 'YF-07',
            title: ' 软件工程师',
            name: '王建法  <a href="/#/shp_cto"><i class="el-icon-document"></i>档案</a>',
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
          nodeWidth: 65,
           //节点宽度
     //     nodePadding :280,
        }],
        tooltip: {
          outside: true
        },
        exporting: {
          enabled: false,
          allowHTML: true,
          sourceWidth: 800,
          sourceHeight: 600
        },
         credits: {
			enabled: false
		},
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
