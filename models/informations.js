'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Informations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Informations.init({
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    information: DataTypes.STRING,
    validationDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Informations',
  });
  return Informations;
};