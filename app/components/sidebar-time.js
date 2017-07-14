import Ember from 'ember';
const {Component} = Ember;

var curTime = new Date();

export default Component.extend({
  time: curTime.getHours() + " : " + curTime.getMinutes(),
  date: (curTime.getMonth() + 1) + "/" + curTime.getDate() + "/" + curTime.getFullYear()
});
