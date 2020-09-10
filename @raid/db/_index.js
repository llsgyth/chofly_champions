const { Sequelize, Model, DataTypes } = require('sequelize');

const init = (config) => {
    const sequelize = new Sequelize(
        config.db
        , config.login
        , config.secret
        , {
            host: config.host
            , dialect: 'postgres'
            , logging: config.logging
            , benchmark: true
            , define: {
                timestamps: config.timestamps
            }
    });
    return {
        Sequelize,
        Model,
        DataTypes,
        sequelize
    };
}

module.exports = (config) => init(config);