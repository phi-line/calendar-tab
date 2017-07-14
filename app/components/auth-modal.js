import Ember from 'ember';
const {computed: {readOnly}, inject: { service }} = Ember;

export default Ember.Component.extend({
  session: service('session'),
  isAuthenticated: Ember.on('init', readOnly('session.isAuthenticated')),

  actions: {
    authenticateSession() {
      this.get('session').authenticate('authenticator:torii', 'google-oauth2');
    },
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
