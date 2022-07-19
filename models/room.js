'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Lesson_in_week , {foreignKey: 'room_id' , as: 'lessons'})
    }
  }
  Room.init({
    number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};