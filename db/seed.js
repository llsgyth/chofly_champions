const _ = require('underscore');
const { sequelize, Labels, Settings } = require('@raid/model');
const source = require('./source.json');
const settings = require('./settings.json');

const seed = () => new Promise((resolve, reject) => {
    console.log(`\tSEEDING...`);
    Promise.all([
        sequelize.sync(),
        source.map(c => sequelize.models.Character.upsert(c)),
        sequelize.models.Settings.upsert(settings)
        // TODO: iterate through json and seeeed!
    ])
    .then((resultSet) => {
        console.log(`\tSEEDING COMPLETE!`);
        resolve();
    })
    .catch(e => {
        console.error(`\tSEEDING ERROR: ${e.message || e}`);
        reject(e);
    });
});

seed()
    .then(() => {
        console.log('Please wait...');
        return;
    })
    .catch(e => {
        console.error('FAILED...');
        return;
    });