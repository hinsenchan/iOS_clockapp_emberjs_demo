import Ember from 'ember';

//timer app
var TimerController = Ember.Controller.extend({
  needs: 'application',
  state: "INIT",
  timeRemaining: new Date(0),
  timerSet: false,
  hours: "",
  minutes: "",

  //handle button events for timer
  actions: {
    leftAction: function() {
      if (this.get('state') === 'INIT') {
        this.startTimer();
      }
      else {
        this.cancelTimer();
      }
    },

    rightAction: function() {
      if (this.get('state') === 'RUNNING') {
        this.pauseTimer();
      }
      else if (this.get('state') === 'PAUSED') {
        this.resumeTimer();
      }
    }
  }, 

  //container for left button
  leftLiClass: function() {
    if (this.get('state') === 'INIT') {
      return 'timer-start';
    }
    else {
      return 'timer-cancel';
    }
  }.property('state'),

  //left button icon
  leftButtonClass: function() {
    if (this.get('state') === 'INIT') {
      return 'start-icon';
    }
    else {
      return 'cancel-icon';
    }
  }.property('state'),

  //left button name
  leftButtonName: function() {
    if (this.get('state') === 'INIT') {
      return 'Start';
    }
    else {
      return 'Cancel';
    }
  }.property('state'),

  //right button container
  rightLiClass: function() {
    if (this.get('state') === 'PAUSED') {
      return 'timer-resume';
    }
    else {
      return 'timer-pause';
    }
  }.property('state'),

  //right button icon
  rightButtonClass: function() {
    if (this.get('state') === 'RUNNING') {
      return 'pause-icon';
    }
    else if (this.get('state') === 'PAUSED') {
      return 'resume-icon';
    }
    else {
      return 'pause-icon-disabled';
    }
  }.property('state'),

  //right button name
  rightButtonName: function() {
    if (this.get('state') === 'PAUSED') {
      return 'Resume';
    }
    else {
      return 'Pause';
    }
  }.property('state'),  

  //set app title
  setTitle: function() {
    this.set('controllers.application.appTitle', "Timer");
  },
  
  //set target for timer
  setTimer: function() {
    var inputTime = this.calcInputTime();
    if (inputTime > 1000) {
      this.set('timerSet', true);  
      var newTime = new Date();
      newTime.setTime(inputTime);
      this.set('timeRemaining', newTime);
    }
  },
  
  //run timer app
  runTimer: function () {    
    if (this.get('state') === 'RUNNING') {
      if (this.get('timeRemaining').getTime() > 0) {
        this.decRemainingTime();
        Ember.run.later(this, this.runTimer, 1000);
      }
      else {
        alert('Time is up!!');
        this.cancelTimer();
      }
    }
  },
  
  //start timer app
  startTimer: function() {    
    this.setTimer();
    if (this.get('timeRemaining').getTime() > 0) {
      this.set('state', 'RUNNING');       
      this.runTimer();
    }
  },
  
  //cancel timer
  cancelTimer: function() {
    if (this.get('state') === "RUNNING" || this.get('state') === "PAUSED") {
      this.set('state', "INIT");
      var newTime = new Date(0);
      this.set('timeRemaining', newTime);
      this.set('timerSet', false);
    }
  },
  
  //pause timer
  pauseTimer: function() {
    if (this.get('state') === "RUNNING") {
      this.set('state', "PAUSED");
    }
  },
  
  //resume timer
  resumeTimer: function() {
    if (this.get('state') === "PAUSED") {
      this.set('state', "RUNNING");    
      this.runTimer();      
    }
  },
  
  //shows remaining time on timer
  timerLabel: function() {
    return this.get('timeRemaining').toUTCString().split(" ")[4];
  }.property('timeRemaining'),
    
  //decrement remaining time value from target
  decRemainingTime: function() {
    var prevTime = this.get('timeRemaining');
    var newTime = new Date(prevTime.getTime() - 1000);
    this.set('timeRemaining', newTime);
  },
  
  //capture user defined values and set target remaining time
  calcInputTime: function() {
    var inputTime = new Date(); 
    inputTime.setTime(
      (this.get('hours') * 60 * 60 * 1000) + 
      (this.get('minutes') * 60 * 1000) + 1000 //added 1000ms to account for computed prop delay
      //(this.getInputMinutes() * 60 * 1000) + 1000 //added 1000ms to account for computed prop delay
    );
    return inputTime;
  }
});

export default TimerController;