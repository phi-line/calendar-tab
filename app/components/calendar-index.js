import Ember from 'ember';
import config from '../config/environment';
const {A, Component, computed, computed: {readOnly}, inject: { service }, observer, on} = Ember;

export default Component.extend({
  init() {
    this._super();
    this.set('room', 'The Shire');
  },

  room: null,
  //events: A([{name: 'Event A'}, {name: 'Event B'}, {name: 'Event C'}, {name: 'Event D'}, {name: 'Event E'}]),
  events: A([{name: 'Event A'}]),

  session: service('session'),
  isAuth: readOnly('session.isAuthenticated'),
  isSignedIn: Ember.on('init', observer('isAuth', function() {
    if (this.get('isAuth')) {
      alert('meow');
      //load calendar events
    }
    return true;
  })),

  onRoomChange: observer('room', function(){

  }),

  actions: {
    updateRoom: function(room) {
      this.set('room', room);
    }
  }
});
