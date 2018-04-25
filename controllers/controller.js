const router = require('express').Router();
const Model = require('../models');

class Controller {
  constructor() {

  }

  static register(req, res){

    const new_account = {
      name: req.body.name,
      phone: req.body.phone_number,
      email: req.body.email,
      password: req.body.password
    }

    Model.Customer.create(new_account)

    .then(response => {
      res.render('login/login')
    })

  }


}

module.exports = Controller;
