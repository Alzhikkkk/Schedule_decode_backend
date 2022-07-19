'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Rooms', [
      {
        number: '1',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        number: '2',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        number: '3',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        number: '4',
        createdAt : new Date(),
        updatedAt: new Date() 
      },
      {
        number: '5',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        number: '6',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        number: '7',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        number: '506',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        number: 'Online',
        createdAt : new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Rooms', null, {});
  }
};
