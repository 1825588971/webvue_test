const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer:{
  //    overlay:{
  //       wanning: false,
  //       error: false
  //    }
  // }
  devServer: {
    // port: 8080,
    // openn: true,
    proxy :{
      //'/apis':{
       // target: '',
        // pathRewrite:{'/apis':''}

     // }
    }
  }
})
// module.exports ({
//   //transpileDependencies: true,
//   lintOnSave: false

// })