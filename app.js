const express = require('express');
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

const router = require('./routes/index');
const routerIndex = require('./routes/index');

app.use('/', routerIndex)


app.listen(3000)
