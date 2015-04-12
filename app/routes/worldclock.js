import Ember from 'ember';

var WorldclockRoute = Ember.Route.extend({
	model: function() {
		//localStorage.clear();

		var self = this;
		return this.store.find('worldclock').then(function(records) {
			// provide 1 clock as the default
			if (records.get('length') === 0) {
				return [self.store.createRecord('worldclock', {id: 1, cityName: 'Cupertino', timezoneOffset: -420}).save()];
			}
			return records;
		});
	},
	setupController: function(controller, model) {
		this.controllerFor('application').set('isWorldclock', true);
		this.controllerFor('application').set('isAddingCity', false);		
		controller.set('model', model);
		controller.setTitle();
		controller.start();
		Ember.$('body').removeClass('background-color');
	}
});

export default WorldclockRoute;