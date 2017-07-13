/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'calendar-tab',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.rooms = ['The Shire', 'NCC-1701', 'Hogwarts',
                 'Kings Landing', 'Endor', 'Fortress of Solitude'];

    ENV.torii = {
      providers: {
        'google-oauth2': {
          apiKey: "938170035981-632lquku902aqgvv1tgq9g7mimjo16kt.apps.googleusercontent.com",
          redirectUri: "http://localhost:4200/oauth2callback"
        }
      }
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
