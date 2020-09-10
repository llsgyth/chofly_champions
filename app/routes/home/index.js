const {app, Router} = require('./../../express');
const { Player } = require('@raid/model');
const { User } = require('@raid/auth');

Router
  .get('/',
    async (req, res, next) => {
      res.render('home', {
        layout: 'chofly'
        , title: 'ChoFly'
        , player: app.authUser
        , isDev: app.isDev
      })
    });

module.exports = Router;
