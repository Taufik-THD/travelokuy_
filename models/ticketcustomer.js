'use strict';
module.exports = (sequelize, DataTypes) => {
  var TicketCustomer = sequelize.define('TicketCustomer', {
    TicketId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER
  }, {});
  TicketCustomer.associate = function(models) {
    // associations can be defined here
  };
  return TicketCustomer;
};