import Ember from 'ember';
const {A, Component, computed, computed: {readOnly}, inject: { service }, observer, on} = Ember;

export default Component.extend({
  room: null,
  events: A([]),
  calendars: A([]),

  session: service('session'),
  isAuth: readOnly('session.isAuthenticated'),
  getRooms: on('init', observer('isAuth', function() {
    const self = this;
    if (this.get('isAuth')) {
      gapi.client.calendar.calendarList.list({
      }).then(function(response) {
        let calendars = response.result.items;
        calendars = calendars.filter(function(cal) {
          return cal.summary.includes('(Room)');
        });
        self.set('calendars', calendars);
      });
    }
  })),


  getRoomEvents: observer('room', function(){
    const self = this;
    if (self.get('calendars').length > 0){
      let roomCalendar = self.get('calendars').filter(function(cal) {
        return cal.summary.includes(self.get('room'));
      });
      if (roomCalendar) {
        let start = new Date();
        let end = new Date(start.getTime());
        end.setHours(23,59,59,999); //set time to 11:59 pm
        gapi.client.calendar.events.list({
          'calendarId': roomCalendar[0].id,
          'timeMin': (start.toISOString()),
          'timeMax': (end.toISOString()),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 5,
          'orderBy': 'startTime'
          }).then(function(response) {
            let events = response.result.items;
            self.set('events', events);
          })
      }
    }
  }),

  currentEvent: observer('events', function(){
    const self = this
    let events = self.get('events');
    if(events.length > 0){
      let nowTime = new DateTime();
      let topEvent = event[0];
      if(topEvent.timeMin <= nowTime && nowTime <= topEvent.timeMax) {
        return topEvent;
      }
    }
  }),

  actions: {
    updateRoom: function(room) {
      this.set('room', room);
    }
  }
});
