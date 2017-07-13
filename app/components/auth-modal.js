import Ember from 'ember';
const {observer, inject: { service }} = Ember;

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    authenticateSession() {
      this.get('session').authenticate('authenticator:torii', 'google-oauth2');
    },
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
