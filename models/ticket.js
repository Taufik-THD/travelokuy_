'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ticket = sequelize.define('Ticket', {
    namaPesawat: DataTypes.STRING,
    seats: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    flightSchedule: DataTypes.DATE
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
    Ticket.belongsToMany(models.Customer, { through: models.TicketCustomer })
  };
  return Ticket;
};
