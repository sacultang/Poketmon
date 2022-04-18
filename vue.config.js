const path = require('path')
module.exports = {
  // 옵션 추가
  configureWebpack: {
    resolve: {
      extensions:['.js','.vue'],
      alias:{
        '~':path.join(__dirname,'src')
      }
    }
  }
}
