var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type":"text/html"});
  res.write("<html>");
  res.write("<head>");
  res.write("<title>Hello World Page</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("Hello World!");
  res.write("</body>");
  res.write("</html>");
  res.end('Hello Http');
});
server.listen(8080);
console.log("Server is listening");