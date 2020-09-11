const _ = require('underscore');
const { Model, DataTypes, sequelize} = require('./_db');

const schema = {
	CharacterId: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
	, PlayerId: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
};

class PlayerCharacter extends Model {}
PlayerCharacter.init(schema, {sequelize}, { timestamps: false });

PlayerCharacter.findAllEager = (where) => PlayerCharacter.findAll(_.extend({ include: [{ all: true }]}, where));
PlayerCharacter.findOneEager = (where) => PlayerCharacter.findOne(_.extend({ include: [{ all: true }]}, where));

PlayerCharacter.associate = (models) => {
	models.Character.belongsToMany(models.Player, { through: PlayerCharacter});
	models.Player.belongsToMany(models.Character, { through: PlayerCharacter});
	console.log('Associated PlayerCharacters!');
}

module.exports = PlayerCharacter;
