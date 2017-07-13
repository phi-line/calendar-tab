import Ember from 'ember';
const {A, Component, inject: { service }, observer} = Ember;

export default Component.extend({
  init() {
    this._super();
    this.set('room', 'The Shire');
  },

  googleCalendar: service(),

  room: null,
  events: A([{name: 'Event A'}, {name: 'Event B'}, {name: 'Event C'}, {name: 'Event D'}, {name: 'Event E'}]),

  onRoomChange: observer('room', function(){

  }),

  actions: {
    updateRoom: function(room) {
      this.set('room', room);
    }
  }
});
