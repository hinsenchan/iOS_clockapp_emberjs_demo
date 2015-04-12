import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ClockappENV.locationType
});

Router.map(function() {
	this.route('addcity');
	this.resource('worldclock');
	this.resource('timer');
	this.resource('stopwatch');
});

export default Router;
