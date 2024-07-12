var http = require('https'),
  httpProxy = require('http-proxy');
  const fs = require('fs');
var proxy = httpProxy.createProxyServer({
  secure: false,
  followRedirects: true,
  changeOrigin: true,
  
  // agent: new http.Agent({
  //   port: 443,
  //   key: fs.readFileSync('./.cert/key.pem'),
  // cert: fs.readFileSync('./.cert/cert.pem'),
  // })
})

const options = {
  key: fs.readFileSync('./.cert/key.pem'),
  cert: fs.readFileSync('./.cert/cert.pem'),
};

var server = http.createServer(options, function (req, res) {

  const {url} = req;
  console.log(url, 111)
  if (url.includes('org')) {
    console.log(url)
  }

  if (url.includes('/ajax')) {
    console.log(url, 111)
    proxy.web(req, res, { target: 'https://fx-trading.tradesmarter.co' });
  } else {
    proxy.web(req, res, { target: 'https://fx-react.tradesmarter.co:3000' });
  }
});

const port = 443;
console.log("listening on port ", port)
server.listen(port);

/**
 * Restart process on failure
 */
process.on('uncaughtException', (err) => {
  console.error('uncaughtException', err)
  process.exit(-1)
})
process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection', err)
  process.exit(-1)
})