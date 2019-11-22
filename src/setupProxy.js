const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy(
    '/users',
    {
        target: 'http://localhost:8081'
    }
  ));
  app.use(proxy(
    '/spotify/search',
    {
        target: 'http://localhost:8081'
    }
  ));
};