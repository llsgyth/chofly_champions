const _ = require('underscore');
const { sequelize, Labels } = require('@raid/model');
const source = require('./source.json');

const seed = () => new Promise((resolve, reject) => {
    console.log(`\tSEEDING...`);
    Promise.all([
        sequelize.sync(),
        source.map(c => sequelize.models.Character.upsert(c))
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