import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  CLIENT_ID: config.key,
  DISCOVERY_DOCS: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
  SCOPES: "https://www.googleapis.com/auth/calendar.readonly"

});
