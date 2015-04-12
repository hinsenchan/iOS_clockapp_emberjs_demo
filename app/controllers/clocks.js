import Ember from 'ember';

//itemController for worldclock
var ClockController = Ember.ObjectController.extend({
  needs: ['application', 'worldclock'],
  idToRemove: '',

  removeClock: function() {
    this.store.find('worldclock', this.get('idToRemove')).then(function(city){
      city.deleteRecord();
      city.save();
    });
  }.observes('idToRemove'),

  isEditing: function() {
    return this.get('controllers.application.isEditing');
  }.property('controllers.application.isEditing'),  
  
  //retrive local time value from worldclock to trigger run loop
  localTime: function() {
    return this.get('controllers.worldclock.localTime');
  }.property('controllers.worldclock.localTime'),

  //time value displayed
	placeholderTime: function() {
    var localTime = this.get('localTime');
    var localOffset = localTime.getTimezoneOffset();
    var cityTime = new Date();
    var cityOffset = this.get('timezoneOffset');
    var strLen;
    var time;    
    
    if ((localOffset + cityOffset) === 0) {
    	time = localTime.toLocaleTimeString();
    }
    else {
    	cityTime.setTime(localTime.getTime()+((localOffset+cityOffset)/60)*60*60*1000);
    	time = cityTime.toLocaleTimeString();
    }

    strLen = time.length;
    time = time.substring(0, (strLen-6)) + time.substring(strLen-3, strLen);
    return time;
    }.property('localTime'),    

  //day value displayed
	placeholderDay: function() {
		var localDate = new Date();
    var cityDate = new Date();
    var localOffset = localDate.getTimezoneOffset();
    var cityOffset = this.get('timezoneOffset'); 
    var date;   
    cityDate.setTime(cityDate.getTime() + (((localOffset+cityOffset)/60) * 60 * 60 * 1000));
    
    if (cityDate.getDay() > localDate.getDay()) {
      date = "Tomorrow";
    }
    else if (cityDate.getDay() < localDate.getDay()) {
      date = "Yesterday";
    }
    else {
      date = "Today";
    }

    return date;
	}.property(),

  //hour value displayed
	placeholderHours: function() {
		var localTime = new Date();
		var localOffset = localTime.getTimezoneOffset();
		var cityOffset = this.get('timezoneOffset');
    var hours = (localOffset + cityOffset) / 60;
    return hours;
	}.property(),

  //ahead or behind value displayed
	placeholderIsAhead: function() {
		var localTime = new Date();
		var localOffset = localTime.getTimezoneOffset();
		var cityOffset = this.get('timezoneOffset');
		var ahead;

    if (localOffset + cityOffset >= 0) {
      ahead = 'ahead';
    }
    else if (localOffset + cityOffset < 0) {
      ahead = 'behind';
    }

    return ahead;
	}.property(),

  //determine if time is local
	placeholderIsLocalTime: function() {
		var localTime = new Date();
		var localOffset = localTime.getTimezoneOffset();
		var cityOffset = this.get('timezoneOffset');
		var isLocal;

    if ((localOffset + cityOffset) === 0) {
      isLocal = true;
    }
    else {
      isLocal = false;
    }		

    return isLocal;
	}.property()
});

export default ClockController;