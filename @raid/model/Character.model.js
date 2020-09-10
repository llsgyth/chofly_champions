const _ = require('underscore');
const { Model, DataTypes, sequelize } = require('./_db');

const schema = {
	name: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, affinity: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, specialty: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, faction: {
		allowNull: false,
		type: DataTypes.STRING
	}
	, overall: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, clanboss: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, bookvalue: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, arena: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, farmer: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, factionwars: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, dragon: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, spider: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, fireknight: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, icegolem: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, minotaur: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, voidkeep: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, spiritkeep: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, magickeep: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
	, forcekeep: {
		allowNull: false,
		type: DataTypes.INTEGER
	}
};

class Character extends Model { }
Character.init(schema, { sequelize }, { timestamps: false });

Character.findAllEager = (where) => Character.findAll(_.extend({ include: [{ all: true }] }, where));
Character.findOneEager = (where) => Character.findOne(_.extend({ include: [{ all: true }] }, where));

Character.associate = (models) => {
	Character.hasMany(models.Artifact);
	Character.belongsTo(models.Player);
	console.log('Associated Characters!');
}

module.exports = Character;
