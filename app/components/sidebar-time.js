import Ember from 'ember';
const {Component, inject: { service }} = Ember;

export default Component.extend({
  clock: service('my-shiny-new-clock'),

  time: Ember.computed('clock.date', function() {
    let clockDate = this.get('clock.date');
    let hours = clockDate.getHours();
    let minutes = clockDate.getMinutes();
    if (hours === 0) {
      hours = 12;
    }
    if (hours > 12) {
      hours -= 12;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return hours + ":" + minutes;
  })
});
