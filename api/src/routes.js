const routes = require('express').Router();

routes.get('/', (req, res) => {
  return res.send('Success');
});

module.exports = routes;
