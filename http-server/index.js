const http = require('http');
const fs = require('fs');

function routes(req, res) {
  const { url, method } = req;
  switch (url) {
    case '/users': {
      fs.readFile('./users.json', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(data.toString('utf8'));
        res.end();
      });
    }
    default: {
      res.writeHead(404);
      res.end();
    }
  }
}


http.createServer(function (req, res) {
  routes(req, res);
}).listen(8080);
