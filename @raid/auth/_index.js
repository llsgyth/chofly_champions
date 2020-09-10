const _ = require('underscore');
const { Player } = require('@raid/model');
const { google } = require('googleapis');
const gmail = google.gmail('v1');
const { googleAuth } = require('../../config');

let app;
var referrer = '/';

const User = (tokens) => new Promise((resolve, reject) => {
    //TODO: check for cookie, and use to auth user against database
    if (app.authUser) {
        resolve(app.authUser);
    }
    if (tokens) {
        googleAuth.setCredentials(tokens);
    }
    gmail.users.getProfile({
        userId: 'me',
        auth: googleAuth
    }, (err, response) => {
        try {
            let data = _.extend(response.data, tokens || {});
            Player.upsert(data)
                .then(player => {
                    app.authUser = player[0];
                    console.log(`Player upserted. ${app.authUser.emailAddress}`);
                    resolve(app.authUser);
                })
                .catch(e => {
                    console.log(`Unable to updateByEmail ${e.message || e}`);
                    reject(e);
                })
        }
        catch (e) {
            console.log(`Unable to set user profile. ${e.message || e}`);
            resolve(null);
        }
    });
});

const authenticate = (req, res, next) => {
    if (!app.authUser) {
        // Generate an OAuth URL and redirect there
        const url = googleAuth.generateAuthUrl({
            access_type: 'offline',
            scope: 'https://www.googleapis.com/auth/gmail.readonly'
        });
        referrer = req.originalUrl;
        res.redirect(url);
    }
    else {
        next();
    }
}

const callback = (req, res, next) => {
    const code = req.query.code
    referrer = referrer == '/auth' ? "/" : referrer;
    const done = () => res.redirect(referrer);
    if (code) {
        // Get an access token based on our OAuth code
        googleAuth.getToken(code, function (err, tokens) {
            if (err) {
                console.log(`Error authenticating: ${err}`);
                done();
            } else {
                console.log('Successfully authenticated');
                User(tokens)
                    .then(user => {
                        done();
                    })
                    .catch(e => {
                        console.log(`....BUT: ${e.message || e}`);
                        done();
                    })
            }
        });
    }
}

const init = (instance) => {
    app = instance;
    app.get('/auth', (req, res, next) => authenticate(req, res, next))
    app.get('/auth/google/callback', (req, res, next) => callback(req, res, next))
}

module.exports = {
    authenticate
    , callback
    , User
    , init
}