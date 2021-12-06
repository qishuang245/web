<template>
    
  <div>
    <highcharts :options="chartOptions" :callback="myCallback" class="photo">         
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
               spacingLeft:30,
          spacingTop:50,
        //图距框的距离上右下左
       marginTop:200,
        marginBottom:380,
       //   margin: [200, 300, 380, 300],
            //背景颜色=渐进色
          backgroundColor: {
		     	linearGradient: [0, 0, 500, 500],
      			stops: [
				[0, 'rgb(255, 255, 255)'],
				[1, 'rgb(200, 200, 255)']
			]
		},
          height: 800,
        // width : 1200,
          inverted: true
        },
        title: {
          text: '鹏云网络有限公司组织结构',
         // x: 200,
			    y: 50,
          
        },
          subtitle: {
		       text: ' 研发部组织结构',
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
          
           ['CTO', 'YF-01'],
           ['CTO', 'YF-02'],
          ['CTO', 'YF-03'],
           ['CTO', 'YF-04'],
          ['CTO', 'CS-01'],
          
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
          },{
            id: 'CTO',
            title: 'CTO  （高级研发经理）',
            name: '王中原   <a href="/#/shp_cto"><i class="el-icon-document"></i>档案</a>',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12140620/Christer.jpg',
            layout: 'hanging',
            url:'/gongsi',
          }, {
            id: 'YF-01',
            title: ' 研发经理',
            name: '王文静   <a href="/#/shp_cto"><i class="el-icon-document"></i>档案</a>',
            column: 1,
             url:'/yanfa',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg'
          },
          {
            id: 'YF-02',
            title: ' 研发经理',
            name: '张传印   <a href="/#/shp_cto"><i class="el-icon-document"></i>档案</a>',
            column: 1,
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
             url:'/yanfa2',
          },{
            id: 'YF-03',
            title: ' 研发经理',
            name: '冯钦   <a href="/#/shp_cto"><i class="el-icon-document"></i>档案</a>',
            column: 1,
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
             url:'/yanfa3',
          }, {
            id: 'YF-04',
            title: ' 软件工程师',
            name: '高姣姣   <a href="/#/shp_cto"><i class="el-icon-document"></i>档案</a>',
            column: 1,
              url:'/yanfa4',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg'
          },{
            id: 'CS-01',
            title: ' 测试经理',
            name: '吴文彰   <a href="/#/shp_cto"><i class="el-icon-document"></i>档案</a>',
            column: 1,
             url:'/test',
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
           nodePadding :40,
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

<style  >
.highcharts-container {
  width: 400px;
  height: 400px;
border: 1px solid #ddd;
  margin: auto;
  
}

/*  标题 */
.highcharts-title{
   font-size: 30px  ! important;
}
/*  副标题 */
.highcharts-subtitle{
    font-size: 20px  ! important;
}
/*
highcharts-node highcharts-point highcharts-node
.highcharts-node.highcharts-point{
   height: 100px;
.element.style{
   font-size: 10px;
}
*/
/*  链接 */
a{ 
  text-decoration:none;
  
   /*color: rgb(224, 217, 235);
 */
  color: rgb(115, 32, 250);
  float: right;
  font-size: 14px;
  } 
  /*  人名h4    职位p */
  h4{
     font-size: 15px;
     /*
    color: rgb(19, 17, 17);
     */
  }
</style>
