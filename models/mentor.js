'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Lesson_in_week , {foreignKey: 'mentor_id' , as: 'lessons'})
      this.hasMany(models.Busy_in_week , {foreignKey: 'mentor_id' , as: 'busy'})
    }
  }
  Mentor.init({
    full_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mentor',
  });
  return Mentor;
};