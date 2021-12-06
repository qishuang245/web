<template>
    
  <div>
    <highcharts :options="chartOptions" :callback="myCallback" class="photo">         
    </highcharts>
  </div>
 
</template>

<script>

export default {
  name: 'Financial',
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
          //margin: [200, 580, 380, 590],
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
		       text: ' 财务组织结构',
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
          name: 'Highsoft1',
          keys: ['from', 'to'],
          data: [
          
           ['CH-04', 'CH-05'],
           ['CH-04', 'CH-06'],
       
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
            id: 'CH-04',
            title: ' 财务总监',
            name: '段瑜 <a id="29"><i class="el-icon-document"></i></a>',
             url:'/chief',
            image: require('../../assets/staffpicture/29.png'),
          },{
            id: 'CH-05',
            title: ' 出纳',
            name: '井云云 <a id="6"><i class="el-icon-document"></i></a>',
            column: 1,
            image: require('../../assets/staffpicture/6.jpg'),
          },{
            id: 'CH-06',
            title: ' 会计',
            name: '潘雪芹 <a id="5"><i class="el-icon-document"></i></a>',
            column: 1,
            image: require('../../assets/staffpicture/5.jpg'),
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
