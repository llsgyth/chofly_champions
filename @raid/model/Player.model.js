const _ = require('underscore');
const { Model, DataTypes, sequelize} = require('./_db');

const schema = {
	emailAddress: {
        allowNull: false,
        primaryKey: true,
        unique: "idEmailAddressConstraint",
		type: DataTypes.STRING
    }
	, thumb: {
		allowNull: true,
		type: DataTypes.STRING
    }
	, historyId: {
		allowNull: true,
		type: DataTypes.STRING
    }
	, access_token: {
		allowNull: true,
		type: DataTypes.STRING
    }
	, refresh_token: {
		allowNull: true,
		type: DataTypes.STRING
    }
	, token_type: {
		allowNull: true,
		type: DataTypes.STRING
    }
	, expiry_date: {
		allowNull: true,
		type: DataTypes.BIGINT
    }
};

class Player extends Model {}
Player.init(schema, {sequelize}, { timestamps: false });

Player.findAllEager = (where) => Player.findAll(_.extend({ include: [{ all: true }]}, where));
Player.findOneEager = (where) => Player.findOne(_.extend({ include: [{ all: true }]}, where));
Player.findByEmail = (emailAddress) => Player.findOneEager({where: {emailAddress}});

module.exports = Player;
