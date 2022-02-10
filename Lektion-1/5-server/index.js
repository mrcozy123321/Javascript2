const http = require('http')

const server = http.createServer((req, res) => {
  res.end('<p>test</p>')
})

const PORT = process.env.PORT || 9999;

server.listen(PORT, 'localhost', () => {
  console.log('Server running at http://localhost:' + PORT);
})