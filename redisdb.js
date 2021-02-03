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