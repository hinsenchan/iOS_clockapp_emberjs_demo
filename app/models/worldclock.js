//import Ember from 'ember';
import DS from 'ember-data';

//worldclock model
var Worldclock = DS.Model.extend({
  cityName: DS.attr(''),
  timezoneOffset: DS.attr(''),
  //placeholderTime: DS.attr(''),
  //placeholderDay: DS.attr(''),
  //placeholderHours: DS.attr(''),
  //placeholderIsAhead: DS.attr(''),
  //placeholderIsLocalTime: DS.attr('')
});

/*
//worldclock fixtures
Worldclock.reopenClass({
  FIXTURES: [
    {
      cityName: 'Cupertino',
      timezoneOffset: -420,
      id: 1
    },
    {
      cityName: 'Stockholm',
      timezoneOffset: 120,
      id: 'stockholm'
    },
    {
      cityName: 'São Paulo',
      timezoneOffset: -180,
      id: 'sao_paulo'
    },
    {
      cityName: 'Tokyo',
      timezoneOffset: 540,
      id: 'tokyo'
    },
    {
      cityName: 'New York',
      timezoneOffset: -240,
      id: 'new_york'
    },
    {
      cityName: 'Bucharest',
      timezoneOffset: 180,
      id: 'bucharest'
    }
  ]
});
*/

export default Worldclock;