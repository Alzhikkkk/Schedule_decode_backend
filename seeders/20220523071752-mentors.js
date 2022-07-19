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
    await queryInterface.bulkInsert('Mentors', [
      {
        full_name: 'Ziya Meiramova',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Dinmukhamed Tleuzhanuly',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Almas Abdugaliev',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Yelnur Seitzhanov',
        createdAt : new Date(),
        updatedAt: new Date() 
      },
      {
        full_name: 'Nurailym Khudaibergenkyzy',
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
     await queryInterface.bulkDelete('Mentors', null, {});
  }
};
