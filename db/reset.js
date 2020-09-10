const model = require('@raid/model');

async function reset() {
	console.log('Rebuilding the database!');
	
	model.reset()
		.then(() => {
			console.log('SUCCESS!\nPlease wait...');
			return;
		})
		.catch(e => {
			console.error(`ERRORRRRRR: ${e.message || e}`)
			return;
		});
}

reset();
