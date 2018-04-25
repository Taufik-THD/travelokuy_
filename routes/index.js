const routes = require('express').Router()
const Controller = require('../controllers/controller');

routes.get('/register', (req, res) => {
  res.render('register/register')
})

routes.post('/register', Controller.register)

routes.get('/login', (req, res) => {
  res.render('login/login')
})

module.exports = routes;
