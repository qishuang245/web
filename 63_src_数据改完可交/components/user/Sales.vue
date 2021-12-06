<template>
    
  <div>
    <highcharts :options="chartOptions" :callback="myCallback" class="photo">         
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
		       text: ' 销售部组织结构',
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
          name: 'Highsoft2',
          keys: ['from', 'to'],
          data: [
          
           ['SA-01', 'SA-02'],
           ['SA-01', 'SA-03'],
        
         
          
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
           id: 'SA-01',
            title: ' 销售总监',
            name: '焦霜 <a id="27"><i class="el-icon-document"></i></a>',
            image: require('../../assets/staffpicture/27.jpeg'),
            layout: 'hanging',
            url:'/market',
          }, {
            id: 'SA-02',
            title: ' 区域销售代表',
            name: '鲍胜剑  <a id="28"><i class="el-icon-document"></i></a>',
            column: 1,
            image: require('../../assets/staffpicture/28.jpg'),
          }, {
            id: 'SA-03',
            title: ' 市场专员',
            name: '李孔烨子  <a id="26"><i class="el-icon-document"></i></a>',
            column: 1,
            image: require('../../assets/staffpicture/26.jpg'),
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
  width: 600px;
  height: 400px;
  border: 1px solid #ddd;
  margin: auto;
}
</style>
