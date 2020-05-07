/** @format */

const PORT = 8888;
var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
// req : 从浏览器带来的请求信息
// res : 从服务器返回给浏览器的信息
var server = http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;

  if (!pathname || pathname == "/") {
    pathname = "index.html";
  }
  var realPath = path.join(__dirname, pathname);
  fs.readFile(realPath, function (err, data) {
    if (err) {
      res.writeHead(404, {
        "content-type": "text/plain",
      });
      res.statusCode = "404";
      res.write("404 not found");
      res.end();
    } else {
      res.writeHead(200, {
        "content-type": 'text/html;charset="utf-8',
      });
      res.write(data);
      res.end();
    }
  });
});
server.listen(PORT); //监听端口
console.log("server start success\n");
