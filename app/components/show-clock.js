import Ember from 'ember';

var ShowClockComponent = Ember.Component.extend({
	actions: {
		removeClock: function(id) {			
			this.set('idToRemove', id);
		}
	}	
});

export default ShowClockComponent;