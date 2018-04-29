const Model = require('../models');
const router = require('express').Router();
const hashPassword = require('../helpers/helper_hash_password');
const session = require('express-session')

class Controller {
  constructor() {

  }

  static viewAll(req, res){

    Model.Ticket.findAll()

      .then(list => {

        list.forEach(data =>{
          data.price = Model.Ticket.changePrice(data.price)
        })

        res.render('admin/admin_homepage',{ list })
      })
      .catch((err) => {
        console.log(err)
      })

  }

  static addAdmin(req, res){

    if (req.body.name == '' || req.body.phone_number == '' || req.body.email == '' || req.body.password == '') {

        res.send('error')

    } else {

      const new_account = {
        name: req.body.name,
        phone: req.body.phone_number,
        email: req.body.email,
        password: req.body.password,
        role : 'admin'
      }
      Model.Customer.create(new_account)

      .then(response => {
        res.redirect('/admin')
      })
    }

  }

  static addTicket (req,res) {

    Model.Ticket.create({
      namaPesawat : req.body.namaPesawat,
      seats : req.body.seats,
      price : req.body.price,
      destination: req.body.destination,
      flightSchedule: req.body.flightSchedule
    })

    .then(data =>{
      res.redirect('/admin')
    })
    .catch((err)=>{
      throw err
    })
  }

  static getEditTicket(req, res){

    Model.Ticket.findOne({where:{id: req.params.id}})

    .then(data => {

      res.render('../views/admin/edit_tiket.ejs', {data})

    })

  }

  static editTicket(req, res){

    Model.Ticket
      .update(req.body, { where: { id: req.params.id } })
      .then(result => {
        res.redirect('/admin');
      });

  }

  static deleteTicket(req, res){

    Model.Ticket.destroy({
      where: {
        id: req.params.id
      }
    })

    .then(response => {
      res.redirect('/admin')
    })

  }

}

module.exports = Controller;
