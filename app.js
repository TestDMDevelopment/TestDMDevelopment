const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const hotelRoute = require('./routes/hotel');
const conveniencesRoute = require('./routes/conveniences');

const keys = require('./config/keys');

const app = express();

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error));

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

app.use('/api/hotel', hotelRoute);
app.use('/api/conveniences', conveniencesRoute);


module.exports = app;
