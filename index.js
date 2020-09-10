const { server } = require('./config');
const app = require('./app');
const { sequelize } = require('@raid/model');

async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.error(`\tERROR! Unable to connect to the database:`);
		console.error(`\t${error.message}`);
		// process.exit(1);
	}
}

async function init() {
	await assertDatabaseConnectionOk();

	const devServer = () => {
		console.log('Starting browserSync....');
		const browserSync = require('browser-sync');
		browserSync({
		  files: [
			'public/**/*.{html,js,css}',
			'**/**/*.{js}',
			'**/*.{js}',
			'*.{js}',
			'views/**/**/*.{html,hbs}',
			'views/**/*.{html,hbs}',
			'views/*.{html,hbs}'
		  ],
		  online: false,
		  open: false,
		  port: Number(server.port) + 1,
		  proxy: `${server.host}:${server.port}`,
		  ui: {
			port: Number(server.port) + 2
		  }
		});
	  }

	  app.listen(server.port,
		app.isDev
		  ? devServer
		  : console.log('Running in production mode')
	  );
}

init();
