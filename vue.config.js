module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8443',
        // 是否代理 websockets
        ws: true,
        // 设置同源  默认false，是否需要改变原始主机头为目标URL
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
