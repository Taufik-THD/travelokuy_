const Model = require('../models');
const router = require('express').Router();
const session = require('express-session')


class Controller{

  static listView(req,res){

    Model.Ticket.findAll()
      .then(listDataTickets=>{
        res.render('menu/homeMenu',{ listDataTickets })
      })
      .catch((err) => {
        console.log(err)
      })

  }

  static buyingTicket(req,res){
    Model.Ticket.findOne(
      {
        where:
        {
          id:req.params.id
        }
      })
      .then(listDataTicket => {
        res.render('menu/sureToBuy',{ listDataTicket})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static createAtConjungtion(req,res){
    let conjungtionID = {
      TicketId : req.params.id,
      CustomerId : req.session.idCustomer
    }

    if(conjungtionID.TicketId === null || conjungtionID.CustomerId === null){
      res.redirect('login/login')
    }else{
    Model.TicketCustomer.create(conjungtionID)
      .then(listData =>{
        res.send('berhasil add conjungtion')
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}









module.exports = Controller;
