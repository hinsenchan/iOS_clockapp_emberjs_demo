import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
	beforeModel: function() {
		this.transitionTo('worldclock');
	}
});

export default IndexRoute;