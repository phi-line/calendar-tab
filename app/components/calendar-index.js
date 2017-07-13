import Ember from 'ember';
import config from '../config/environment';
const {A, Component, computed, inject: { service }, observer} = Ember;

export default Component.extend({
  init() {
    this._super();
    this.set('room', 'The Shire');
  },

  config: config.torii.providers['github-oauth2'],

  room: null,
  //events: A([{name: 'Event A'}, {name: 'Event B'}, {name: 'Event C'}, {name: 'Event D'}, {name: 'Event E'}]),
  events: A([{name: 'Event A'}]),

  session: service('session'),
  onSessionAuth: computed('session.isAuthenticated', function(){
    return true;
  }),

  propagateEvents() {
    alert('you did it!');
  },

  onRoomChange: observer('room', function(){

  }),

  actions: {
    updateRoom: function(room) {
      this.set('room', room);
    }
  }
});
