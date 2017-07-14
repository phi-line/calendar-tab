import Ember from 'ember';
import Torii from 'ember-simple-auth/authenticators/torii';

const { inject: {service} } = Ember;

export default Torii.extend({
  torii: service('torii'),

  authenticate(options) {
    return this._super(options).then(function (data) {
      //alert(`authorizationCode:\n${data.authorizationCode}\nprovider: ${data.provider}\nredirectUri: ${data.redirectUri}`);
    });
  },
});
