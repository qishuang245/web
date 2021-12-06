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
        marginBottom:180,
       //   margin: [200, 300, 380, 300],
            //背景颜色=渐进色
           backgroundColor: '#eaedf1',
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
          
           ['CTO', 'YF-01'],
           ['CTO', 'YF-02'],
          ['CTO', 'YF-03'],
           ['CTO', 'YF-04'],
          ['CTO', 'CS-01'],
          ['CTO', 'P-01'],
          
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
            name: '王中原   <a id="1"><i class="el-icon-document"></i></a>',
            image: require('../../assets/staffpicture/1.jpg'),
            layout: 'hanging',
            url:'/gongsi',
          }, {
            id: 'YF-01',
            title: ' 研发经理',
            name: '王文静   <a id="12"><i class="el-icon-document"></i></a>',
            column: 2,
             url:'/yanfa',
            image: require('../../assets/staffpicture/12.jpg'),
          },
          {
            id: 'YF-02',
            title: ' 研发经理',
            name: '张传印   <a id="11"><i class="el-icon-document"></i></a>',
            column: 2,
            image: require('../../assets/staffpicture/11.jpg'),
             url:'/yanfa2',
          },{
            id: 'YF-03',
            title: ' 研发经理',
            name: '冯钦   <a id="10"><i class="el-icon-document"></i></a>',
            column: 2,
            image: require('../../assets/staffpicture/10.jpg'),
             url:'/yanfa3',
          }, {
            id: 'YF-04',
            title: ' 软件工程师',
            name: '戴辰   <a id="17"><i class="el-icon-document"></i></a>',
            column: 2,
              url:'/yanfa4',
            image: require('../../assets/staffpicture/17.jpg'),
          },{
            id: 'CS-01',
            title: ' 测试经理',
            name: '吴文彰   <a id="18"><i class="el-icon-document"></i></a>',
            column: 1,
             url:'/test',
            image: require('../../assets/staffpicture/18.jpg'),
          }, {
            id: 'P-01',
            title: ' 高级产品经理',
            name: '齐允峰  <a id="22"><i class="el-icon-document"></i></a>',
            column: 1,
            // url:'/solution',
            image: require('../../assets/staffpicture/22.jpg'),
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

<style lang="less" scoped>
/deep/ .highcharts-container {
  width: 100%  ;
  height: 100%;
  .highcharts-label{
    &:nth-of-type(3){
      img{
        object-position: 0 -20px;
      }
    }
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
