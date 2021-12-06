<template>
  <div>
    <highcharts :options="chartOptions" :callback="myCallback">
        
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
          height: 600,
          inverted: true
        },
        title: {
          text: 'Highsoft 公司组织结构'
        },
        plotOptions: {
           series: {
             cursor: 'pointer',
             events: {
               click: function (e) {
                   location.hash = e.point.url;
                 // location.href = e.point.url;
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
            title: 'CEO',
            name: '陈靓',
            url:'http://www.baidu.com',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132317/Grethe.jpg'
          },{
            id: 'CTO',
            title: 'CTO  （产品研发）',
            name: '王中原',
            column: 1,
           url:'/yanfa',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12140620/Christer.jpg',
            layout: 'hanging',
          }, {
            id: 'COO',
            title: 'COO  （职能）',
            name: '张雪莹',
            column: 1,
             url:'/chief',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12131849/Torstein1.jpg',
             layout: 'hanging'
          }, {
            id: 'CSO',
            title: '常务副总经理 （销售）',
            name: '刘军',
            column: 1,
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132313/Anita.jpg',
            layout: 'hanging'
          }, {
            id: 'CMO',
            title: '产品（技术支撑）',
            name: 'Vidar Brekke',
            column: 1,
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
