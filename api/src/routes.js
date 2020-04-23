const routes = require('express').Router();
const multer = require('multer');

const multerConfig = require('./config/multer');
const PostController = require('./controllers/PostController');

routes.get('/posts', PostController.index);
routes.post('/posts', multer(multerConfig).single('file'), PostController.store);
routes.delete('/posts/:id', PostController.remove);

module.exports = routes;
