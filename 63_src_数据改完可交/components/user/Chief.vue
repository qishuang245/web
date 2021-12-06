<template>
    
  <div>
    <highcharts :options="chartOptions" :callback="myCallback" class="photo">         
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
             spacingLeft:280,
              spacingRight:280,
              spacingTop:50,
        //图距框的距离上右下左
              marginTop:200,
              marginBottom:380,
        //  margin: [200, 580, 380, 590],
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
		       text: ' 职能组织结构',
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
          
           ['COO', 'CH-01'],
           ['COO', 'CH-04'],
       
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
            id: 'COO',
             title: 'COO  （职能）',
            name: '张雪莹 <a id="2"><i class="el-icon-document"></i></a>',
            image: require('../../assets/staffpicture/2.jpg'),
            layout: 'hanging',
            url:'/gongsi',
          }, {
            id: 'CH-01',
            title: ' 人事行政经理',
            name: '王艳丽 <a id="7"><i class="el-icon-document"></i></a>',
            column: 1,
             url:'/administration',
            image: require('../../assets/staffpicture/7.jpg'),
          },{
            id: 'CH-04',
            title: ' 财务总监',
            name: '段瑜 <a id="29"><i class="el-icon-document"></i></a>',
            column: 1,
             url:'/financial',
            image: require('../../assets/staffpicture/29.png'),
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
