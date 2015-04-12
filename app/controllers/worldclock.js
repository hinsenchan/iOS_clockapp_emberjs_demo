import Ember from 'ember';

//worldclock app
var WorldclockController = Ember.ArrayController.extend({  
  needs: 'application',
  localTime: new Date(),
  itemController: 'clocks',

  //set app title
  setTitle: function() {
    this.set('controllers.application.appTitle', "World Clock");
  },
  
  //start clock app
  start: function() {
    this.runClocks();    
  },
  
  //run clock app
  runClocks: function() {  
    this.set('localTime', new Date());
    Ember.run.later(this, this.runClocks, 1000);
  }
});

export default WorldclockController;
