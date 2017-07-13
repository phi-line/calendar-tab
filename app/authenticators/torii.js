import Ember from 'ember';
import config from '../config/environment';
import Torii from 'ember-simple-auth/authenticators/torii';

const { service } = Ember.inject;

export default Torii.extend({
  torii: service('torii'),
  authenticate(options) {
    return this._super(options).then(function (data) {
      alert(`authorizationCode:\n${data.authorizationCode}\nprovider: ${data.provider}\nredirectUri: ${data.redirectUri}`);
    });
  },

  initGAPI(){
    gapi.client.init({
        'apiKey': config.apiKey,
        'scope': config.scope,
        'discoveryDocs': config.docs
    }).then(function () {
        GoogleAuth = gapi.auth2.getAuthInstance();
        GoogleAuth.isSignedIn.listen(propagateEvents);
    });
  },

  propagateEvents() {
    //sends data to model store
  }
});
