const routes = require('express').Router()
const Controller = require('../controllers/controller_menu');

const bodyParser = require('body-parser');

routes.get('/', Controller.listView)

routes.get('/transaction/:id', Controller.buyingTicket)

routes.post('/transaction/:id', Controller.createAtConjungtion)




module.exports =  routes;
