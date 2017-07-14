import Ember from 'ember';
const {A, Component, computed, computed: {readOnly}, inject: { service }, observer, on} = Ember;

export default Component.extend({
  init() {
    this._super();
    this.set('room', 'The Shire');
  },

  room: null,
  events: A([{name: 'Event A'}]),

  session: service('session'),
  isAuth: readOnly('session.isAuthenticated'),
  calendars: on('init', computed('isAuth', function() {
    if (this.get('isAuth')) {
      gapi.client.calendar.calendarList.list({
      }).then(function(response) {
        let calendars = response.result.items;
        calendars = calendars.filter(function(cal) {
          return cal.summary.includes('(Room)');
        })
        return calendars;
      });
    }
  })),

  onRoomChange: observer('room', function(){

  }),

  actions: {
    updateRoom: function(room) {
      this.set('room', room);
    }
  }
});
