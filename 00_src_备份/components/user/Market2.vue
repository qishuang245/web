<template>
    
  <div>
    <highcharts :options="chartOptions" :callback="myCallback" class="photo">         
    </highcharts>
  </div>
 
</template>

<script>

export default {
  name: 'Market2',
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
           backgroundColor: '#eaedf1',
          height: 800,
          inverted: true
        },
          title: {
          text: '鹏云网络有限公司组织结构',
         // x: 200,
			    y: 50,
          
        },
          subtitle: {
		       text: ' 营销部组织结构',
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
                   if(!e.point.url){
                     return
                   }else{
                     location.hash = e.point.url;
                   }
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
          
           ['SA-02', 'SA-03'],
        
         
          
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
            id: 'SA-02',
            title: ' 市场经理',
            name: '陈少东  <a id="25"><i class="el-icon-document"></i></a>',
            //column: 1,
            url:'/product',
            layout: 'hanging',
            image: require('../../assets/staffpicture/25.jpg'),
          },{
            id: 'SA-03',
            title: ' 市场专员',
            name: '李孔烨子 <a id="26"><i class="el-icon-document"></i></a>',
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

<style  lang="less" scoped>
/deep/ .highcharts-container {
  width: 100%  ;
  height: 100%;
  .highcharts-label{
   // &:nth-of-type(1){
      //img{
       // object-position: 0 px;
      //}
    //}
    img{
      width:50px;
      object-fit: cover;
    }
  }
}
/*  图表最外圈*/
.photo{
  width: 1200px ;
    margin: auto;
   
}
/*  标题 */
.highcharts-title{
   font-size: 30px  ! important;
}
/*  副标题 */
.highcharts-subtitle{
    font-size: 15px;
}
</style>
