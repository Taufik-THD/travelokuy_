'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ticket = sequelize.define('Ticket', {
    namaPesawat: DataTypes.STRING,
    seats: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    flightSchedule: DataTypes.STRING,
    destination: DataTypes.STRING
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
    Ticket.belongsToMany(models.Customer, { through: models.TicketCustomer })
  };

  Ticket.changePrice = function(price) {

     return 'Rp. ' +price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  }

  return Ticket;
};
