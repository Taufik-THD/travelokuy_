
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tickets', [{
      namaPesawat: 'LionAir',
      seats:20,
      price:300000,
      flightSchedule: "2017-12-01",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      namaPesawat: 'Tempur',
      seats:10,
      price:1000000,
      flightSchedule: "2017-06-02",
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
