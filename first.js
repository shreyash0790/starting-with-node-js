const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/home') {
    res.setHeader('Content-Type', 'text/html');
    res.write('Welcome home');
  } else if (url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write('Welcome to About Us page');
  } else if (url === '/node') {
    res.setHeader('Content-Type', 'text/html');
    res.write('Welcome to my Node Js project');
  } 
  res.end();
});

server.listen(4000, () => {
  console.log('Server started on port 4000');
});