import Ember from 'ember';
const {Component, computed} = Ember;

export default Component.extend({
  eventName: computed('event.summary', function(){
    return this.get('event.summary');
  }),

  eventTime: computed('event.start.dateTime', 'event.end.dateTime', function() {
    let start = moment(this.get('event.start.dateTime'));
    let end = moment(this.get('event.end.dateTime'));
    let format = (start.format('h:mm') + ' - ' + end.format('h:mm'));
    return format;
  })
});
