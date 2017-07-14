import Ember from 'ember';
import config from '../config/environment';
const {Component, computed, computed: {readOnly}, on} = Ember;

export default Component.extend({
  rooms: config.rooms,
  currentRoom: on('init', computed('rooms', function(){
    return this.get('rooms').get('firstObject');
  })),

  actions: {
    updateRoom: function(room){
      this.set('currentRoom', room);
      this.sendAction('updateRoom', room);
    }
  }
});
