<template>
  <div>
     <img src="@/assets/static/hs3.png" width="40" heght ="40" alt="">
    <highcharts :options="chartOptions"  :callback="myCallback">
    <!--
      <img : src="imgsrc" width="50" heght ="50">
      -->
       
    </highcharts>

  </div>
</template>

<script>
//import headImg from '../../assets/hs3.png'

export default {
  name: 'GongSi',
  data () {
    return {
      chartOptions: {
       
        chart: {
          height: 600,
          inverted: true
        },
        title: {
          text: '鹏云网络有限公司组织结构'
        },
        subtitle: {
			text: '点击可查看下属名单'
		},
        plotOptions: {
           series: {
             cursor: 'pointer',
             events: {
        
               click: function (e) {
                location.hash = e.point.url;

               // <a href="http://www.w3school.com.cn/">访问网页</a>

                 // alert(this.name +' clicked\n'+'highcharts 交流群294191384');
                 //location.hash = e.point.url;
                 //location.href = e.point.url;
                //上面是当前页跳转，如果是要跳出新页面，那就用
                //window.open(e.point.url);
                //这里的url要后面的data里给出
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
              color: '#980104'
            }, {
              level: 1,
              color: '#359154'
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
            title: 'CEO  <a href="http://www.w3school.com.cn/">个人主页</a> ',
            name: '陈靓',
           // url:'http://www.baidu.com',
            //img src="../assets/hs3.png",
           //   imgsrc : require('../../assets/hs3.png'),
            image :"../../assets/static/hs3.png",   //图片显示失败
           // image :'@/assets/static/hs3.png',
          //  image : require('../../assets/hs3.png'),
         // imgage : '../../assets/static/hs3.png',
           // image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132317/Grethe.jpg'
          },{
            id: 'CTO',
            title: 'CTO  （产品研发）',
            name: '王中原    <a href="/#/shp_cto">主页 <img src="/#/assets/hs3.png"></a> ',
           // name: '王中原    <a href="/#/sample">主页 </a> ',
            column: 1,
           url:'/yanfa',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12140620/Christer.jpg',
            layout: 'hanging',
          }, {
            id: 'COO',
            title: 'COO  （职能） <a href="/#/sample">个人主页 </a>',
            name: '张雪莹',
            column: 1,
             url:'/chief',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12131849/Torstein1.jpg',
             layout: 'hanging'
          }, {
            id: 'CSO',
            title: '常务副总经理 （技术支撑）',
            name: '刘军',
            column: 1,
             url:'/product',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132313/Anita.jpg',
            layout: 'hanging'
          }, {
            id: 'CMO',
            title: '副总经理（销售）',
            name: '秦言雷',
            column: 1,
             url:'/market',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
            layout: 'hanging'
          }, 
        ],
          colorByPoint: false,
          color: '#007ad0',
          dataLabels: {
            color: 'white'
          },
          borderColor: 'white',
          nodeWidth: 65
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

  width: 600px;
  height: 400px;
  border: 1px solid #ddd;
  margin: auto;
}
</style>
