const path = require('path')

const resolve = dir => path.join(__dirname, dir)

// const BASE_URL = process.env.NODE_ENV === 'production' ? '/api' : '/api'


module.exports = {
  lintOnSave: false,
  // publicPath: BASE_URL,
  chainWebpack: config => {
      config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_a', resolve('src/assets'))     
  
  },
  productionSourceMap: false,
  // devServer: {
  //     proxy: {
  //       '/api':{
  //         target: 'http://localhost:3000',
  //         changeOrigin: true, 
  //         pathRewrite: {
  //             '^/api': '' 
  //         }
  //        }      
  //     }
  // }
  devServer: {
    proxy: {
      '/api':{
        target: 'http://120.25.170.10',
        changeOrigin: true, 
        pathRewrite: {
            '^/api': '' 
        }
      }     
    }
  }
}
