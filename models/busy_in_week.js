'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Busy_in_week extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Mentor , {foreignKey: 'mentor_id' , as: 'mentor'})
    }
  }
  Busy_in_week.init({
    time: DataTypes.STRING,
    weekday: DataTypes.STRING,
    text: DataTypes.STRING,
    mentor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Busy_in_week',
  });
  return Busy_in_week;
};