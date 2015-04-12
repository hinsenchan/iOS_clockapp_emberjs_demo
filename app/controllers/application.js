import Ember from 'ember';

var ApplicationController = Ember.Controller.extend({
	appTitle: "App Title",
	isEditing: false,
	editLabel: function() {
		if (this.get('isEditing')) {
			return 'Done';
		}
		else {
			return 'Edit';
		}
	}.property('isEditing')
});

export default ApplicationController;