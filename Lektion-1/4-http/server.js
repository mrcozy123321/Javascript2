const http = require('http');

const server = http.createServer((req /*request*/, res /*response*/) => {
  console.log('request made');
  console.log(req.url);
  // res.write('<h1>HELLO</h1>');

  if(req.url === '/') {
    res.end('<h1>HELLO</h1>');
  }
  else if(req.url === '/about') {
    res.end('<h1>ABOUT</h1>');
  }
})

server.listen(9999, () => console.log('Server is running on http://localhost:9999'))