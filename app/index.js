const path = require('path');
const { app, express } = require('./express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const helpers = require('./helpers');
const routes = require('./routes');

// use express-handlebars view engine and set views template directory
const hbs = exphbs.create({
	handlebars: allowInsecurePrototypeAccess(Handlebars),
	extname: '.hbs',
	partialsDir: path.join(__dirname, './../views/partials'),
	helpers: helpers()
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './../views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public'))) // serve public files
app.use(express.static(path.resolve(__dirname, 'data'))) // serve json files
app.use(favicon(path.join(__dirname,'./../public/images/favico.ico')));

app.use(function (req, res, next) {
	req.rawBody = '';
	req.on('data', (chunk) => req.rawBody += chunk);
	next();
});

module.exports = routes.init(app);
