module.exports = {
  devServer: {
  
     // 默认端口号
    port: "8081 "
  },

  // 生产环境配置
  // 默认，部署时按服务器下根路径寻找资源
  // 编译时资源使用相对路径
  publicPath:"./",

  // 编译后不生成map 映射文件
  productionSourceMap:false

}
