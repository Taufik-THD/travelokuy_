'use strict';
var bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.belongsToMany(models.Ticket, { through: models.TicketCustomer })
  };

  Customer.hook('beforeSave', (user, options) => {
    const saltRounds = 10;
    const myPlaintextPassword = user.password
    console.log(myPlaintextPassword)
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(myPlaintextPassword, salt);
    console.log(hash)

    user.password = hash

  });

  return Customer;

};
