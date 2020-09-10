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
		, padNum
		, padRandNum
		, randNum
		, propsToString
		, isString
		, stringify
	}
}

module.exports = helpers;