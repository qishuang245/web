<template>
    
  <div>
    <highcharts :options="chartOptions" :callback="myCallback"  class="photo">         
    </highcharts>
  </div>
 
</template>

<script>

export default {
  name: 'YanFa4',
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
           // margin: [200, 680, 380, 690],
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
		       text: ' 研发部高姣姣小组结构',
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
          
           ['YF-04', 'YF-08'],
       
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
             id: 'YF-04',
            title: ' 软件工程师',
            name: '戴晨 <a id="17"><i class="el-icon-document"></i></a>',
             image: require('../../assets/staffpicture/17.jpg'),
            layout: 'hanging',
            url:'/yanfa',
          }, {
            id: 'YF-08',
            title: ' 软件工程师',
            name: '齐双源 <a id="16"><i class="el-icon-document"></i></a>',
            column: 1,
             image: require('../../assets/staffpicture/16.jpg'),
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
