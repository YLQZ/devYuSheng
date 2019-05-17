# vue高级应用

## vue-cli 2.0 架构优化

1. 打包生成报告
   * ```npm run build``` 打包项目  
   * 或者 ```npm run build --report``` 打包并生成报告
2. 剔除
   * 根据生成报告 将占用存储空间比较大的插件等剔除分离
   * **分离方法**
   在**webpack.base.conf.js**中

   ```
    externals:{
        "vue":"Vue",
        "vue-router":"VueRouter",
        "vuex":"Vuex",
        "axios":"axios"
    }
   ```