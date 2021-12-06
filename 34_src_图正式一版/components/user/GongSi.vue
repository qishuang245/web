<template>
  <div>
     
    <highcharts :options="chartOptions"  :callback="myCallback">
   
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
          //backgroundColor: '#FCFFC5',
        //图距框的距离上右下左
          margin: [200, 300, 380, 300],
            //背景颜色=渐进色
          backgroundColor: {
		     	linearGradient: [0, 0, 500, 500],
      			stops: [
				[0, 'rgb(255, 255, 255)'],
				[1, 'rgb(200, 200, 255)']
			]
		},
        
          height: 800,
            //width : 800,
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
        plotOptions: {
           series: {
             cursor: 'pointer',
             events: {
        
               click: function (e) {
                location.hash = e.point.url;

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
            ['CEO', 'CMO'],
          //  ['CTO', 'YF-111'],
          
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
            title: 'CEO   ',
            name: '陈靓  <a href="/#/shp_cto"><i class="el-icon-document"></i>档案</a>',
            url:'/gongsi',
         //外部链接照片
        // image : 'https://static.dingtalk.com/media/lQDPDhrVkFMAPtfNAy_NBbGwvUGVqM5NrgEBiyVLOkANAA_1457_815.jpg?auth_bizType=IM&auth_bizEntity=%7B%22cid%22%3A%22513874971%3A2468665777%22%2C%22msgId%22%3A%228788144832464%22%7D&bizType=im&open_id=2468665777',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132317/Grethe.jpg'
          },{
            id: 'CTO',
            title: 'CTO  （产品研发）',
            name : '王中原    <a href="/#/shp_cto"><i class="el-icon-document"></i>档案</a>',
           // name: '王中原    <a href="/#/shp_cto">主页 <img src="https://thumbnail1.baidupcs.com/thumbnail/3b9fe0ae9q4baa2de8c16648105e4135?fid=1100505717069-250528-940809382963630&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-CaaNL8Y1y389OACPlE1F9P4OmcI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=212122769389883860&dp-callid=0&time=1635987600&size=c1920_u1080&quality=90&vuk=1100505717069&ft=image&autopolicy=1   width="20" height="20" "></a> ',
            column: 1,
           url:'/yanfa',
           image :'https://thumbnail1.baidupcs.com/thumbnail/71c77088bo4dea087f1fcdbcb6949c60?fid=1100505717069-250528-353726000143979&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-eKkRxPtZCXgtgIiNCEBIEXRnfJM%3d&expires=8h&chkbd=0&chkv=0&dp-logid=211870717712376323&dp-callid=0&time=1635987600&size=c1920_u1080&quality=90&vuk=1100505717069&ft=image&autopolicy=1',
           // image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12140620/Christer.jpg',
            layout: 'hanging',
          }, {
            id: 'COO',
            title: 'COO  （职能）',
            name: '张雪莹    <a href="/#/sample"><a href="/#/sample"><i class="el-icon-document"></i>档案</a>', 
            column: 1,
             url:'/chief',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12131849/Torstein1.jpg',
             layout: 'hanging'
          }, {
            id: 'CSO',
            title: '常务副总经理 （技术支撑）',
            name: '刘军  <a href="/#/sample"><a href="/#/sample"><i class="el-icon-document"></i>档案</a>',
            column: 1,
             url:'/product',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132313/Anita.jpg',
            layout: 'hanging'
          }, {
            id: 'CMO',
            title: '副总经理（销售）',
            name: '秦言雷  <a href="/#/sample"><a href="/#/sample"><i class="el-icon-document"></i>档案</a>',
            column: 1,
             url:'/market',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
            layout: 'hanging'
          }, 
        ],
          colorByPoint: false,
          color: '#4096E2',
          dataLabels: {
            color: 'white'
          },
          borderColor: '#B5A5A5',
  
          nodeWidth: 65,
        //margin : [100,100,50,100],
        }],
        tooltip: {
          outside: true
        },
        exporting: {
          allowHTML: true,
          sourceWidth: 800,
          sourceHeight: 600
        }
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

<style>
.highcharts-container {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
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

/*  只有边框长度变化
.highcharts-node.highcharts-point{
  height: 150px ;
}*/
/*
highcharts-node highcharts-point highcharts-node
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
