//在根目录下建立vue.config.js,以下配置：
module.exports = {
    devServer: {
      proxy: {  
        '/api': {
          target: 'http://localhost:8080', //路径指向本地主机地址及端口号
          ws: true, 
          changeOrigin: true,
          pathRewrite:{
              '^/api': '/data' //路径转发代理
          }
        }
      }
    }
  }