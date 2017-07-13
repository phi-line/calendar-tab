import Ember from 'ember';
import config from '../config/environment';
const {Component, computed} = Ember;

export default Component.extend({
  rooms: config.rooms,
  currentRoom: 'The Shire',

  actions: {
    updateRoom: function(room){
      this.set('currentRoom', room);
      this.sendAction('updateRoom', room);
    }
  }
});
