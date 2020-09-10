const { pg } = require('../../config');
const {Sequelize, Model, DataTypes, sequelize} = require('@raid/db')(pg);

module.exports = {
    Sequelize,
    Model,
    DataTypes,
    sequelize
}