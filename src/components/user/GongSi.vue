<template>
  <div>
      <div class="head">
      <h3>公司组织架构图</h3>
        <!-- 面包屑导航区  -->
        <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size:18px ">
       <el-breadcrumb-item :to="{ path: '/homepage2' }">公司首页</el-breadcrumb-item>
       <el-breadcrumb-item :to="{ path: '/gongsi' }">组织图首页</el-breadcrumb-item>
       <el-breadcrumb-item>组织图</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <highcharts :options="chartOptions"  :callback="myCallback" class="photo">
   
    </highcharts>

  </div>
</template>

<script>

export default {
  name: 'GongSi',
  data () {
    return {
      chartOptions: {
       
        chart: {
          //图底色
          backgroundColor: '#eaedf1',
          lineColor:'#00ffff',
          //内边距spacing
          spacingLeft:280,
              spacingRight:280,
              spacingTop:50,
        //图距框的距离上右下左
        marginTop:200,
        marginBottom:250,
       //   margin: [200, 300, 380, 300],
            //背景颜色=渐进色
         // backgroundColor: {
		     //	linearGradient: [0, 0, 500, 500],
      		//	stops: [
	//			[0, 'rgb(255, 255, 255)'],
	//			[1, 'rgb(200, 200, 255)']
	//		]
	//	},
        //图表高度
          height: 800,
         //   width : 1500,
          inverted: true
        },
        title: {
         
          text: '鹏云网络有限公司组织结构',
         // x: 200,
			    y: 50,

        },
        subtitle: {
			text: '点击可查看下属名单',
       y: 90,
		},
    //数据列配置
        plotOptions: {
           series: {
             //光标，选中图像
             cursor: 'pointer',
             //人名框边厚度
             borderWidth: 3,
              // pointPadding: 85,
             events: {
              //点击事件
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
          name: 'Highsoft',
          keys: ['from', 'to'],
          data: [
            ['CEO', 'CTO'],
            ['CEO', 'COO'],
            ['CEO', 'CSO'],
          //  ['CEO', 'CMO'],
          //  ['CTO', 'YF-111'],
          
          ],
          levels: [
            {
              level: 0,
              color: '#3379FD',
              height: 25
            }, {
              level: 1,
              color: '#4babf8'
            }, {
              level: 2,
              color: 'pink'
            },
            {
              level: 4,
              color: 'green'
            }
          ],
          nodes: [{
            id: 'Shareholders'
          }, {
            id: 'Board'
          }, {
            id: 'CEO',
            title: '首席执行官兼董事长   ',
           //  name: '陈靓   ',
            name: '陈靓  <a id="0"><i class="el-icon-document"></i></a>',
            url:'/gongsi',
         //外部链接照片  iconfont icon-danju
            image: require('../../assets/staffpicture/0.jpg')
          },{
            id: 'CTO',
            title: '高级研发经理',
            name : '王中原    <a id="1"><i class="el-icon-document"></i></a>',         
           
            column: 2,
		      //	offset: '75%',
           url:'/yanfa',          
            image: require('../../assets/staffpicture/1.jpg'),
            layout: 'hanging',
          }, {
            id: 'COO',
            title: '首席运营官  ',
            name: '张雪莹    <a id="2"><i class="el-icon-document"></i></a>', 
            column: 1,
             url:'/chief',
            image: require('../../assets/staffpicture/2.jpg'),
             layout: 'hanging'
          }, {
            id: 'CSO',
            title: '首席营销官 ',
            name: '刘军  <a id="3"><i class="el-icon-document"></i></a>',
            column: 1,
             url:'/product',
            image: require('../../assets/staffpicture/3.jpg'),
            layout: 'hanging'
          }, 
        ],
        //点的色看是否每个系列接收一种颜色，还是每个点接收一种颜色
          colorByPoint: false,
        //  提示框边框颜色
          color: '#eaedf1',
          dataLabels: {
            color: 'white'
          },
         //圆角人名框的边界半径
         borderRadius :10,
         // plotBorderColor: 'yellow',
         //人名边框颜色
         borderColor: '#B5A5A5',  
         //人名框边框高度
          nodeWidth: 65,
          //节点宽度
          nodePadding :80,
         
        //margin : [100,100,50,100],
        }],
        tooltip: {
          outside: true
        },
        //导出功能关闭
       exporting: {
         enabled: false,
          allowHTML: true,
        sourceWidth: 800,
        sourceHeight: 600
       },
       //版权信息关闭
       credits: {
			enabled: false
		},
      }
    }
  },
  mounted () {},
  methods: {
    //路由跳转到研发？？？
    // IntoYanfa() {
     // window.sessionStorage.clear()
      //重新定向到登录页
     // this.$router.push('/yanfa')
    //},
    myCallback () {
      console.log('this is callback function')
    }
  }
}
</script>

<style lang="less" scoped>
.head{
  font-size: 25px;
   margin-left: 220px;
  
}
/deep/ .highcharts-container {
  width: 100%  ;
  height: 100%;
  .highcharts-label{
    &:nth-of-type(3){
      img{
        object-position: 0 1px;
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
    font-size: 15px;
}

/* 
.highcharts-plot-background{
  width: 50%  ! important;
}
.highcharts-series-group{
   width: 350px   ! important;
}

.highcharts-plot-border{
  width : 500px  ! important  ;
}
*/
 /*
.highcharts-label.highcharts-data-label.highcharts-data-label-color-undefined.highcharts-tracker{
   width: 150px  ! important  ;
}  
 只有边框长度变化 
.highcharts-node.highcharts-point.highcharts-node{
  height: 180px ;
} */
 /*
 只有边框长度变化
.highcharts-node.highcharts-point{
  height: 150px ;
} */
/*
highcharts-node highcharts-point highcharts-node
.element.style{
   font-size: 10px;
}
*/
/*  链接 */
a{ 
 /* text-decoration:none;*/
  
   /*color: rgb(224, 217, 235);
 */
  color: rgb(115, 32, 250);
  float: right;
  font-size: 14px;
  } 
  .iconfont{
    margin-right: 1px;
   
  }
  /*  人名h4    职位p */
  h4{
     font-size: 15px;
     /*
    color: rgb(19, 17, 17);
     */
  }
</style>
