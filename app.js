const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const checkIsLogin = require('./middlewares/checkIsLogin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

const router = require('./routes/index');
const routerIndex = require('./routes/index');
const menu = require('./routes/menu')
const admin = require('./routes/admin')

app.use('/', routerIndex)
app.use('/menu', menu)
app.use('/admin', admin)


app.listen(3000)
