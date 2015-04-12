import Ember from 'ember';

var RoundButtonComponent = Ember.Component.extend({
	 click: function() {
    this.sendAction();
  }
});

export default RoundButtonComponent;