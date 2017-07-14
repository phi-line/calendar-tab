import Ember from 'ember';
const {computed: {readOnly}, inject: { service }, on} = Ember;

export default Ember.Component.extend({
  session: service('session'),
  isAuthenticated: on('init', readOnly('session.isAuthenticated')),

  actions: {
    authenticateSession() {
      this.get('session').authenticate('authenticator:torii', 'google-oauth2');
    },
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
