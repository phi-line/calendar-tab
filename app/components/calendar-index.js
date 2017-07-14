import Ember from 'ember';
const {A, Component, computed, computed: {readOnly, empty}, inject: { service }, observer, on} = Ember;

export default Component.extend({
  room: null,
  events: A([]),
  calendars: A([]),

  clock: service('my-shiny-new-clock'),
  time: computed('clock.date', function() {
    return this.get('clock.date');
  }),

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
          'maxResults': 10,
          'orderBy': 'startTime'
          }).then(function(response) {
            let events = response.result.items;
            self.set('events', events);
          })
      }
    }
  }),

  currentEvent: computed('events', function(){
    const self = this;
    let events = self.get('events');
    if(events.length > 0){
      let nowTime = new Date(); nowTime = nowTime.getTime();
      let topEvent = events['0'];
      let eventStart = new Date(topEvent.start['dateTime']); eventStart = eventStart.getTime();
      let eventEnd = new Date(topEvent.end['dateTime']); eventEnd = eventEnd.getTime();
      if(eventStart <= nowTime && nowTime <= eventEnd) {
        return topEvent;
      }
    }
    return events;
  }),

  isOpen: empty('currentEvent'),

  actions: {
    updateRoom: function(room) {
      this.set('room', room);
      let picNum = Math.floor((Math.random() * 30) + 1);
      $('body').css('backgroundImage', 'url("/assets/' + picNum + '.jpeg")');
    },

    addEvent: function() {
      alert('meow');
    }
  }
});
