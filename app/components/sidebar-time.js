import Ember from 'ember';
const {Component, inject: { service }} = Ember;

export default Component.extend({
  clock: service('my-shiny-new-clock'),

  time: Ember.computed('clock.date', function() {
    let clockDate = this.get('clock.date');
    let minutes = clockDate.getMinutes();
    if (minutes < 10) {
      let minutes = "0" + minutes;
    }
    return clockDate.getHours() + ":" + minutes + ":" + clockDate.getSeconds();
  })
});
