1:快速构建nodejs工程
-   npm init    初始化项目
    npm init -y 快速构建
    - 得到package.json 文件，内容如下
{
  "name": "npmstudy",       //工程名
  "version": "1.0.1",       //工程版本
  "description": "我是一个node工程",    //描述
  "main": "index.js",       //入口js
  "scripts": {              //运行的脚本
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "dong",     //开发者名称
  "license": "ISC"      //授权协议
}
类似于pom.xml文件

2:快速安装和依赖模块
  2-1：快速安装第三方模块？
    npm install xxx or npm i xxx 模块名
  2-2：安装模块的使用
    //导入redis模块
      const redis = require("redis");
      const client = redis.createClient();
    //导入mysql模块
    // const mysql = reqiure("mysql");  

    client.on("error", function(error) {
        console.error(error);
      });
      
      client.set("key", "value", redis.print);
      client.get("key", redis.print);
    2-3: 运行的过程中可以不写.js
    
    下载并安装指定的版本号:
    npm i redis@3.0.2
    官方网站:
    https://www.npmjs.com/package/redis/v/3.0.2  

    //卸载依赖
    npm uninstall vue jquery
    如果最后package.json中没有任何依赖了，那么node_modules也都会消失