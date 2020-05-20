'use strict';
module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define('Participant', {
    user_id: DataTypes.STRING,
    first_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.DATE,
    zip_code: DataTypes.INTEGER,
    check_sleep: DataTypes.BOOLEAN,
    check_food: DataTypes.BOOLEAN,
    check_activity: DataTypes.BOOLEAN,
    check_heart: DataTypes.BOOLEAN,
    check_weight: DataTypes.BOOLEAN,
    check_location: DataTypes.BOOLEAN,
    check_247: DataTypes.BOOLEAN,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME
  }, {});
  Participant.associate = function(models) {
    // associations can be defined here
  };
  return Participant;
};