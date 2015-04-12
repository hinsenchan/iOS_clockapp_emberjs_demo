import Ember from 'ember';

var StopwatchRoute = Ember.Route.extend({
	setupController: function(controller) {
		controller.setTitle();
		this.controllerFor('application').set('isWorldclock', false);
		this.controllerFor('application').set('isAddingCity', false);
		Ember.$('body').removeClass('background-color');
	}
});

export default StopwatchRoute;