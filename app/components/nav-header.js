import Ember from 'ember';

var NavHeaderComponent = Ember.Component.extend({
	actions: {
		toggleIsEditing: function() {
			var isEditing = this.get('isEditing');
			if (isEditing) {
				this.set('isEditing', false);
			}
			else {
				this.set('isEditing', true);
			}
		}
	}	
});

export default NavHeaderComponent;