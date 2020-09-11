const {app, Router} = require('./../../express');
const { Character, Player, Settings } = require('@raid/model');
const { User } = require('@raid/auth');

Router
  .get('/',
    async (req, res, next) => {
      Promise.all([
        Character.findAllEager(),
        Settings.findOne()
      ])
        .then(results => {
          res.render('home', {
            layout: 'chofly'
            , title: 'ChoFly'
            , config: results[1]
            , player: app.authUser
            , isDev: app.isDev
            , characters: results[0]
          })
        })
    });

module.exports = Router;
