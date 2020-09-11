const {app, Router} = require('./../../express');
const { Character, Player } = require('@raid/model');
const { User } = require('@raid/auth');

Router
  .get('/',
    async (req, res, next) => {
      Character.findAllEager()
        .then(characters => {
          res.render('home', {
            layout: 'chofly'
            , title: 'ChoFly'
            , player: app.authUser
            , isDev: app.isDev
            , characters
          })
        })
    });

module.exports = Router;
