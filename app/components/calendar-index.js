import Ember from 'ember';
const {Component} = Ember;

export default Component.extend({
  init() {
    this._super();
    this.set('room', 'The Shire');
  },

  room: null,

  actions: {
    updateRoom: function(room) {
      this.set('room', room);
    }
  }
});
