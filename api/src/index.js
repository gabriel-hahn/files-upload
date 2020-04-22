const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const app = express();

const routes = require('./routes');

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/upload');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(routes);

app.listen(process.env.PORT || 3333);
