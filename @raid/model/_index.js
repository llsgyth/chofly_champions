const { Sequelize, Model, DataTypes, sequelize } = require('./_db');

const Character = require('./Character.model');

const init = () => new Promise((resolve, reject) => {
	sequelize.sync()
		.then((r) => {
			console.log('Database synced!')
			resolve(r);
		})
		.catch(e => {
			console.log(`ERROR: ${e.message || e}`);
			reject(e);
		});
});

const reset = () => new Promise((resolve, reject) => {
	sequelize.sync({force: true})
		.then((r) => {
			console.log('Database synced!')
			resolve(r);
		})
		.catch(e => {
			console.log(`ERROR: ${e.message || e}`);
			reject(e);
		});
});

const Labels = {
	Affinities: {
		MAGIC: 'Magic'
		, FORCE: 'Force'
		, SPIRIT: 'Spirit'
		, VOID: 'Void'
	}
	, Artifacts: {
		WEAPON: 'Weapon'
		, HELMET: 'Helmet'
		, SHIELD: 'Shield'
		, GAUNTLETS: 'Gauntlets'
		, CHESTPLATE: 'Chestplate'
		, BOOTS: 'Boots'
		, RING: 'Ring'
		, AMULET: 'Amulet'
		, BANNER: 'Banner'
	}
	, Attributes: {
		HP: 'HP'
		, ATK: 'Attack'
		, DEF: 'Defense'
		, SPD: 'Speed'
		, CRATE: 'Critical Rate'
		, CDMG: 'Crit Damage'
		, RES: 'Resist'
		, ACC: 'Accuracy'
	}
	, Rarity: {
		COMMON: 'Common'
		, UNCOMMON: 'Uncommon'
		, RARE: 'Rare'
		, EPIC: 'Epic'
		, LEGENDARY: 'Legendary'
	}
	, Specialty: {
		ATTACK: 'Attack'
		, DEFENSE: 'Defense'
		, SUPPORT: 'Support'
		, HP: 'HP'
	}
}

module.exports = {
	init,
	reset,
	Sequelize,
	Model,
	DataTypes,
	sequelize,
	models: sequelize.models,
	Labels,
	Character
}
