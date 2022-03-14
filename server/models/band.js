'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Band.hasMany(models.BandPersonnel2,{foreignKey: 'band_id'})
      Band.hasMany(models.Personnel,{foreignKey: 'band_id'})

    }
  }
  Band.init({
    name: DataTypes.STRING,
    member: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};