
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tickets', [{
      namaPesawat: 'AirAsia',
      seats:20,
      price:300000,
      flightSchedule: new Date(2018,04,26,null,null,null),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      namaPesawat: 'Garuda',
      seats:10,
      price:1000000,
      flightSchedule: new Date(2018,04,26,null,null,null),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Tickets', null, {});
  }
};
