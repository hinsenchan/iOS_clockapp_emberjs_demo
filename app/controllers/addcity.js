import Ember from 'ember';

//Add City Controller for Worldclock app
var AddcityController = Ember.ArrayController.extend({  
  needs: 'application',
  searchText: '',
  searchResults: [],
  actions: {
  	addcity: function(header, city) {
  		var searchResults = this.get('searchResults');

  		for (var j=0; j<searchResults.length; j++) {
  			if (searchResults[j].header === header) {
  				for (var k=0; k<searchResults[j].cityName.length; k++) {
  					var cityName = searchResults[j].cityName[k];
  					if (cityName === city) {
	  					var id = searchResults[j].id[k];
	  					var timezoneOffset = searchResults[j].timezoneOffset[k];
	  					this.store.createRecord('Worldclock', {id: id, cityName: cityName, timezoneOffset: timezoneOffset}).save();
	  					break;			
	  				}
  				}
  				break;
  			}
  		}
  	}
  },
  searchCities: function() {
  	this.set('searchResults', []);
  	var searchText = this.get('searchText');
  	var self = this;

  	if (searchText.length > 1) {
	  	Ember.$.ajax({
	      url: 'http://coen268.peterbergstrom.com/timezones.php?search=' + searchText,
	      dataType: 'jsonp'
	    }).then(function(response) {
	      var searchResults = [];
	      var resultGroup = {header: '', id: [], cityName: [], timezoneOffset: []};

	      if (response && response.length) {
	        for(var i=0; i<response.length; i++) {
	        	var header = response[i].id.charAt(0).toUpperCase();
	        	var id = response[i].id;
	        	var cityName = response[i].cityName;
	        	var timezoneOffset = response[i].timezoneOffset;

	        	if (header !== resultGroup.header) {
	        		resultGroup = {header: '', id: [], cityName: [], timezoneOffset: []};
	        		searchResults.pushObject(resultGroup);
	        		resultGroup.header = header;
	        	}
	        	resultGroup.id.pushObject(id);
	        	resultGroup.cityName.pushObject(cityName);
	        	resultGroup.timezoneOffset.pushObject(timezoneOffset);
	        }
	      }
	      self.set('searchResults', searchResults);
	    });
  	}
  }.observes('searchText')
});

export default AddcityController;
