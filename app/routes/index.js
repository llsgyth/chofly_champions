const glob = require('glob');
const Router = require('express').Router;
const auth = require('@raid/auth');

const init = (app) => {
    auth.init(app);

    glob
        .sync('**/*.js', { cwd: `${__dirname}/` })
        .map(filename => require(`./${filename}`))
        .filter(router => Object.getPrototypeOf(router) == Router)
        .forEach(route => app.use(route));

    return app;
}

module.exports = {
    init
};
