import Ember from 'ember';

//stopwatch app
var StopwatchController = Ember.Controller.extend({
  needs: 'application',
  state: "INIT",
  startTime: null,
  startLap: null,
  timeElapsed: new Date(0),
  lapElapsed: new Date(0),
  lap: 1,
  lapTimeList: "",

  //handle button events for stopwatch
  actions: {
    leftAction: function() {
      if (this.get('state') === 'RUNNING') {
        this.stopTimer();
      }
      else {
        this.startTimer();
      }
    },

    rightAction: function() {
      if (this.get('state') === 'RUNNING') {
        this.lapTimer();
      }
      else if (this.get('state') === 'STOPPED') {
        this.resetTimer();
      }
    }
  }, 

  //container for left button
  leftLiClass: function() {
    if (this.get('state') === 'RUNNING') {
      return 'stopwtch-stop';
    }
    else {
      return 'stopwtch-start';
    }
  }.property('state'),

  //left button icon
  leftButtonClass: function() {
    if (this.get('state') === 'RUNNING') {
      return 'stop-icon';
    }
    else {
      return 'start-icon';
    }
  }.property('state'),

  //left button name
  leftButtonName: function() {
    if (this.get('state') === 'RUNNING') {
      return 'Stop';
    }
    else {
      return 'Start';
    }
  }.property('state'),

  //right button container
  rightLiClass: function() {
    if (this.get('state') === 'RUNNING') {
      return 'stopwtch-reset';
    }
    else {
      return 'stopwtch-lap';
    }
  }.property('state'),

  //right button icon
  rightButtonClass: function() {
    if (this.get('state') === 'RUNNING') {
      return 'lap-icon';
    }
    else if (this.get('state') === 'STOPPED') {
      return 'reset-icon';
    }
    else {
      return 'lap-icon-disabled';
    }
  }.property('state'),

  //right button name
  rightButtonName: function() {
    if (this.get('state') === 'STOPPED') {
      return 'Reset';
    }
    else {
      return 'Lap';
    }
  }.property('state'),  

  //set app title
  setTitle: function() {
    this.set('controllers.application.appTitle', "Stopwatch");
  },

  //run stopwatch app
  runTimer: function() {
    if (this.get('state') === "RUNNING") {
      this.calcElapsedTime();
      this.calcElapsedLap();
      Ember.run.later(this, this.runTimer, 10);
    }
  },  
    
  //start stopwatch app
  startTimer: function() {
    this.set('startTime', new Date()); //set start time to current time
    this.set('startLap', new Date()); //set start lap to current time
    
    if (this.get('state') === "STOPPED") {
      //continue from elapsed time if stopwatch is restarted
      var startTime = new Date();
      startTime.setTime(this.get('startTime').getTime() - this.get('timeElapsed').getTime());
      this.set('startTime', startTime);
      //continue from elapsed lap if stopwatch is restarted
      var startLap = new Date();
      startLap.setTime(this.get('startLap').getTime() - this.get('lapElapsed').getTime());
      this.set('startLap', startLap);
    }
    
    this.set('state', "RUNNING");
    this.runTimer();
  },
  
  //stop stopwatch app
  stopTimer: function() {
    this.set('state', "STOPPED");
  },
  
  //show last lap time; track next lap time
  lapTimer: function() {    
    var lapTime = this.get('elapsedLapLabel');
    var lapTimeList = new Ember.Handlebars.SafeString(
      this.get('lapTimeList') +
      "<div class='lap'>" +
        "<span class='lap-num'>Lap " + this.get('lap') + "</span>" +
        "<span class='lap-time'>" + lapTime + "</span>" +
      "</div>");

    this.set('lapTimeList', lapTimeList);    
    this.set('startLap', new Date());
    this.calcElapsedLap();
    this.set('lap', (this.get('lap') + 1));
  },
  
  //reset stopwatch app
  resetTimer: function() {
    this.set('state', "INIT");
    this.set('startTime', new Date());
    this.set('startLap', new Date());
    this.set('lap', 1);
    this.calcElapsedTime();
    this.calcElapsedLap();
    this.set('lapTimeList', '');
  },
  
  //calculate time elapsed for stopwatch
  calcElapsedTime: function() {
    var currentTime = new Date();
    var elapsedTime = new Date();
    elapsedTime.setTime(currentTime.getTime() - this.get('startTime').getTime());
    this.set('timeElapsed', elapsedTime);
  },
  
  //calculate time elapsed for current lap
  calcElapsedLap: function() {
    var currentTime = new Date();
    var elapsedTime = new Date();
    elapsedTime.setTime(currentTime.getTime() - this.get('startLap').getTime());
    this.set('lapElapsed', elapsedTime);
  },
  
  //format elapsed time for display
  elapsedTimeLabel: function() {
    var hundredthSeconds = Math.round(this.get('timeElapsed').getMilliseconds() / 10);
    var seconds = this.get('timeElapsed').getSeconds();
    var minutes = this.get('timeElapsed').getMinutes();
    
    if (hundredthSeconds < 10) {hundredthSeconds = "0" + hundredthSeconds;}    
    if (seconds < 10) {seconds = "0" + seconds;}    
    if (minutes < 10) {minutes = "0" + minutes;}
    
    return (minutes + ":" + seconds + "." + hundredthSeconds);
  }.property('timeElapsed'),
  
  //format lap time for display
  elapsedLapLabel: function() {
    var hundredthSeconds = Math.round(this.get('lapElapsed').getMilliseconds() / 10);
    var seconds = this.get('lapElapsed').getSeconds();
    var minutes = this.get('lapElapsed').getMinutes();
    
    if (hundredthSeconds < 10) {hundredthSeconds = "0" + hundredthSeconds;}    
    if (seconds < 10) {seconds = "0" + seconds;}    
    if (minutes < 10) {minutes = "0" + minutes;}
    
    return (minutes + ":" + seconds + "." + hundredthSeconds);
  }.property('lapElapsed') 
});

export default StopwatchController;
