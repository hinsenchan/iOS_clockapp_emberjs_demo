import Ember from 'ember';

var AddcityRoute = Ember.Route.extend({	
	setupController: function(controller) {
		this.controllerFor('application').set('isWorldclock', false);
		this.controllerFor('application').set('isAddingCity', true);
		controller.set('searchText', '');
		Ember.$('body').addClass('background-color');
	}
});

export default AddcityRoute;