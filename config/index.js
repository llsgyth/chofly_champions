require('dotenv').config();
const { google } = require('googleapis');
const env = process.env;

const server = {
    host: 'localhost'
    , port: env.PORT || 8080
    , env: env.env || 'stage'
}

const presentAndTrue = (val) => val && val == 'true'

const pg = {
    host: env.DB_HOST
    , port: env.DB_PORT
    , db: env.DB_NAME
    , login: env.DB_LOGIN
    , secret: env.DB_SECRET
    , logging: presentAndTrue(env.DB_LOG_QUERY)
    , timestamps: presentAndTrue(env.DB_TIMESTAMPS)
}

const googleAuth = new google.auth.OAuth2(
    env.GOOGLE_CLIENT_ID
    , env.GOOGLE_CLIENT_SECRET
    , env.GOOGLE_AUTH_REDIRECT
);

const auth = {
    google: {
        client_id: env.GOOGLE_CLIENT_ID,
        project_id: env.GOOGLE_PROJECT_ID,
        auth_uri: env.GOOGLE_AUTH_URI,
        token_uri: env.GOOGLE_TOKEN_URI,
        auth_provider_x509_cert_url: env.GOOGLE_CERT_URL,
        client_secret: env.GOOGLE_CLIENT_SECRET,
        redirect_uris: env.GOOGLE_REDIRECT_URIS.split(','),
        javascript_origins: env.GOOGLE_JAVASCRIPT_ORIGINS.split(',')
    }
}

const isDev = server.env == 'development' || server.env == 'dev';
const isProd = server.env == 'prod' || server.env == 'production';

module.exports = {
    auth
    , googleAuth
    , pg
    , server
    , isDev
    , isProd
}