const express = require('express');
const morgan = require('morgan');
const app = express();

const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(routes);

app.listen(process.env.PORT || 3000);
