//nodemon server.js

//1.引入http模块
const http = require("http")

//2.创建http服务对象
//http.createServer(回调函数)






const app = http.createServer((res)=>{
    var jwt = require("jsonwebtoken");

    var METABASE_SITE_URL = "http://localhost:3000";
    var METABASE_SECRET_KEY = "ae876f638d347d01de53cd566f4e9e28751e20a6f0c8b2efc9b2d27809b535c4";

    var payload = {
      resource: { dashboard: 193 },
      params: {},
      exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
    };
    var token = jwt.sign(payload, METABASE_SECRET_KEY);

    var iframeUrl = METABASE_SITE_URL + "/embed/dashboard/" + token + "#bordered=true&titled=true";

})

//3.监听端口
app.listen(8000)

