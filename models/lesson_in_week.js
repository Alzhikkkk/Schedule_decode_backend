'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson_in_week extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Mentor, {foreignKey: 'mentor_id', as: 'mentor'})
      this.belongsTo(models.Course, {foreignKey: 'course_id', as: 'course'})
      this.belongsTo(models.Room, {foreignKey: 'room_id', as: 'room'})
      this.belongsTo(models.Group, {foreignKey: 'group_id', as: 'group'})
    }
  }
  Lesson_in_week.init({
    time: DataTypes.STRING,
    weekday: DataTypes.STRING,
    group_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    mentor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lesson_in_week',
  });
  return Lesson_in_week;
};