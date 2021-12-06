<template>
    
  <div>
    <highcharts :options="chartOptions" :callback="myCallback" class="photo">         
    </highcharts>
  </div>
 
</template>

<script>

export default {
  name: 'Product',
  data () {
    return {
      chartOptions: {
        chart: {
            spacingLeft:280,
              spacingRight:280,
              spacingTop:50,
        //图距框的距离上右下左
              marginTop:200,
              marginBottom:380,
      //   margin: [200, 560, 380, 550],
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
		       text: ' 产品部组织结构',
            y: 90,
		},
       
         plotOptions: {
           series: {
             cursor: 'pointer',
             events: {
                click:(e)=>{
                 if(e.target.parentNode.tagName ==='A'){
                   this.$router.push({path:'/shp_coo',query:{
                     id:e.target.parentNode.id
                   }})
                 }else{
                   location.hash = e.point.url;
                 }
        }
    },
    }
},
  
        series: [{
          type: 'organization',
          name: 'Highsoft1',
          keys: ['from', 'to'],
          data: [
          
           ['CSO', 'PR-01'],
           ['CSO', 'PR-04'],
       
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
            id: 'CSO',
            title: '常务副总经理 （技术支撑）',
            name: '刘军  <a id="3"><i class="el-icon-document"></i></a>',
            image: require('../../assets/staffpicture/3.jpg'),
            layout: 'hanging',
            url:'/gongsi',
          }, {
            id: 'PR-01',
            title: ' 高级产品经理',
            name: '齐允峰  <a id="22"><i class="el-icon-document"></i></a>',
            column: 1,
             url:'/solution',
            image: require('../../assets/staffpicture/22.jpg'),
          },{
            id: 'PR-04',
            title: ' 技术支持部经理',
            name: '马海清  <a id="23"><i class="el-icon-document"></i></a>',
            column: 1,
            image: require('../../assets/staffpicture/23.jpg'),
          },
         
          
          ],
          colorByPoint: false,
          color: '#4096E2',
          dataLabels: {
            color: 'white'
          },
          borderColor: '#B5A5A5',
          nodeWidth: 65,
           nodePadding :140,
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
  width: 400px;
  height: 400px;
    border: 1px solid #ddd;
  margin: auto;
  
}
</style>
