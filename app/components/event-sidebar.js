import Ember from 'ember';
const {Component} = Ember;

export default Component.extend({
  color: Ember.computed('isOpen', function(){
    let isOpen = this.get('isOpen');
    let bgColor = '';
    if (isOpen)
      bgColor = 'background-color: rgba(136,202,102,0.95)';
    else
      bgColor = 'background-color: rgba(234,111,98,0.95)';
    return new Ember.Handlebars.SafeString(bgColor);
  }),

  actions:{
    addEvent: function() {
      this.sendAction('addEvent');
    }
  }
});
