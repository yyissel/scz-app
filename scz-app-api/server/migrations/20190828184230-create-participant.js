'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Participants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      zip_code: {
        type: Sequelize.INTEGER
      },
      check_sleep: {
        type: Sequelize.BOOLEAN
      },
      check_food: {
        type: Sequelize.BOOLEAN
      },
      check_activity: {
        type: Sequelize.BOOLEAN
      },
      check_heart: {
        type: Sequelize.BOOLEAN
      },
      check_weight: {
        type: Sequelize.BOOLEAN
      },
      check_location: {
        type: Sequelize.BOOLEAN
      },
      check_247: {
        type: Sequelize.BOOLEAN
      },
      start_time: {
        type: Sequelize.TIME
      },
      end_time: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Participants');
  }
};