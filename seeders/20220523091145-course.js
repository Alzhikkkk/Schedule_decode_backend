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
    await queryInterface.bulkInsert('Courses', [
      {
        name: 'Web dev',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Python',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SQL',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name: 'C++',
        createdAt : new Date(),
        updatedAt: new Date() 
      },
      {
        name: 'IT гений',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Unity',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Java SE',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Data Analytics',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Android',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Node JS',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name: 'React JS',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Комп грамотность',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name: 'IOS',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Django',
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Go',
        createdAt : new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Courses', null, {});
  }
};
