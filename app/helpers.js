const { Settings } = require('@raid/model');
let settings;
Settings.findOne()
	.then(r => {
		settings = r.dataValues;
	})
	.catch(e => {
		console.error(e.message || e);
	});

const eq = (x, y) => x == y;

const notEq = (x, y) => !eq(x, y);

const isArray = (array) => Array.isArray(array);

const padNum = (val, len) => {
	let res = val.toString();
	while (res.length < len) {
		res = `0${res}`;
	}
	return res;
};

const overall = (char, round) => {
	let result = 0;
	Object.entries(settings).forEach((k, v) => {
		if (char[k[0]] && k[0] !== 'id') {
			result+=char[k[0]]*Number(k[1]);
		}
	});
	return round == true
		? Math.round(result)
		: result.toFixed(1);
}

const randNum = (x, y) => Math.floor(Math.random() * (y - x) + x);

const padRandNum = (x, y, pad) => padNum(randNum(x, y), pad);

const propsToString = (obj) => {
	let result = '';
	Object.entries(obj).forEach((k) => {
		result += `
		<div class="row col-3 item-property">${k[0]}</div>
		<div class="row col-9 item-value">${k[1]}</div>
	  `;
	})
	return `
	<div class="row col-12 item-results">
	  ${result}
	</div>
	`;
}
const isString = (str) => str && str.length > 0;

const stringify = (obj) => {
	return JSON.stringify(obj);
};

const helpers = () => {
	return {
		eq
		, notEq
		, isArray
		, overall
		, padNum
		, padRandNum
		, randNum
		, propsToString
		, isString
		, stringify
	}
}

module.exports = helpers;