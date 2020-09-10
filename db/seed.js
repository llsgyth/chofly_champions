const _ = require('underscore');
const { sequelize, Labels } = require('@raid/model');
const source = require('./seeds/source.json');

const seed = (set) => new Promise((resolve, reject) => {
    console.log(`\tSEEDING...`);
    Promise.all([
        sequelize.sync()
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