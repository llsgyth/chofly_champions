const _ = require('underscore');
const { Model, DataTypes, sequelize } = require('./_db');

const schema = {
	color_legendary: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_epic: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_rare: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_uncommon: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_common: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_support: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_attack: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_defense: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_hp: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_void: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_magic: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_spirit: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_force: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_10: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_9: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_8: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_7: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_6: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_5: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_4: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_3: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_2: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, color_1: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, clanboss: {
		allowNull: false,
		type: DataTypes.DECIMAL(4,2)
	}
	, bookvalue: {
		allowNull: false,
		type: DataTypes.DECIMAL(4,2)
	}
	, arena: {
		allowNull: false,
		type: DataTypes.DECIMAL(4,2)
	}
	, farmer: {
		allowNull: false,
		type: DataTypes.DECIMAL(4,2)
	}
	, factionwars: {
		allowNull: false,
		type: DataTypes.DECIMAL(4,2)
	}
	, dragon: {
		allowNull: false,
		type: DataTypes.DECIMAL(4,2)
	}
	, spider: {
		allowNull: false,
		type: DataTypes.DECIMAL(4,2)
	}
	, minotaur: {
		allowNull: false,
		type: DataTypes.DECIMAL(4,2)
	}
	, fireknight: {
		allowNull: false,
		type: DataTypes.DECIMAL(4,2)
	}
	, icegolem: {
		allowNull: false,
		type: DataTypes.DECIMAL(4,2)
	}
	, forcekeep: {
		allowNull: false,
		type: DataTypes.DECIMAL(4,2)
	}
	, spiritkeep: {
		allowNull: false,
		type: DataTypes.DECIMAL(4,2)
	}
	, magickeep: {
		allowNull: false,
		type: DataTypes.DECIMAL(4,2)
	}
	, voidkeep: {
		allowNull: false,
		type: DataTypes.DECIMAL(4,2)
	}
};

class Settings extends Model { }
Settings.init(schema, { sequelize }, { timestamps: false });

Settings.findAllEager = (where) => Settings.findAll(_.extend({ include: [{ all: true }] }, where));
Settings.findOneEager = (where) => Settings.findOne(_.extend({ include: [{ all: true }] }, where));

Settings.associate = (models) => {
	console.log('Associated Settingss!');
}

module.exports = Settings;
