# What is iOS Clock App Ember.js Demo?

It is a lightweight, web app demonstration of the clock app from iOS. The clock app is developed with the Ember.js MVC framework and coded using HTML5, CSS3, JavaScript, and jQuery. Ember.js uses the Handlebars template language which extends the Mustache template syntax. It uses plain HTML expressions and describes the user interface using good semantics. Each template is also backed by a model object which updates the template automatically. There is a router which monitors the browser window and automatically keeps track of the application state. A model which is a JavaScript object is used to store persistent state. The controllers decorate mdoels with display logic. Data is stored and retrieved by using the REST API. 

Utilizing the power of the Ember.js framework, the clock app is developed using only a single page. It functions as both a native-style mobile and desktop web application. Its components are modularized to ensure its maintainability, reusability, and extendability. The clock app contains a World Clock, Timer, and Stopwatch function. Each of these functions appear as its own page to the user. The state of each clock function can operate individually, so all 3 "pages" may run at the same time. This implementation allows you to move between each function without terminating its previously set states.

## Mobile

![mobile_collage](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/mobile_collage.png)

## Desktop

![desktop_collage](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/desktop_collage.png)

# Features

## World Clock

The World Clock will load a list of cities along with its GMT time offsets using a JSON call. The app will update each fixture item in real time, calculate the local offset in the timezone relative to the system time, and display the correct time in the application.

The World Clock list uses the DS.LSAdapter which uses local storage via the browser to save the list of clocks persistently.

The World Clock and Timer refreshes its display time every second using Ember's built in Ember.run.later() function. The Stopwatch refreshes every 1/100 of a second. World Clock will continue to run even if the user switches to the Timer or Stopwatch function.

![img1_worldclock_mobile](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img1_worldclock_mobile.png)

### Search: query the list of cities from the JSON API

The query will attempt to auto-complete as the user is typing.

![img7_worldclock_add](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img7_worldclock_add.png)

The search results are alphabetized and scrollable.

![img8_worldclock_scrolladdlist](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img8_worldclock_scrolladdlist.png)

### Add: target city can be added to the list of clocks displayed

Target clock is added to the main clock list.

![img9_worldclock_addedClock](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img9_worldclock_addedClock.png)

### Remove: delete stored clocks from the list

Edit opens up the function to delete clocks. Click the icon to remove a clock.

![img10_worldclock_edit](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img10_worldclock_edit.png)

Clock has been removed.

![img11_worldclock_removedCity](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img11_worldclock_removedCity.png)

Clicking done exits the edit mode.

![img12_worldclock_completedEdit](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img12_worldclock_completedEdit.png)

## Timer

The Timer can be running, cancelled, paused, and resumed. Hours and minutes can be used to set the total countdown time. The timer will continue to operate even if the user switches to the World Clock or Stopwatch function.

![img2_timer_mobile](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img2_timer_mobile.png)

### Setup: select time to countdown

![img13_timer_setup](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img13_timer_setup.png)

### Running: timer is counting down

![img14_timer_running](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img14_timer_running.png)

### Paused: timer is paused

![img15_timer_paused](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img15_timer_paused.png)

### Resumed: timer is resumed

![img16_timer_resumed](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img16_timer_resumed.png)

### Cancelled: countdown is cancelled

![img17_timer_cancelled](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img17_timer_cancelled.png)

## Stopwatch

The Stopwatch can be running, stopped, resumed, lapped, and reset. Lap will record the elapsed time since the last lap was recorded. Stopwatch will continue to operate even if the user swithces to the World Clock or Timer function.

![img3_stopwatch_mobile](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img3_stopwatch_mobile.png)

### Running: stopwatch is running

![img18_stopwatch_running](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img18_stopwatch_running.png)

### Stopped: stopwatch is stopped

![img19_stopwatch_stopped](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img19_stopwatch_stopped.png)

### Resumed: stopwatch is resumed

![img20_stopwatch_resumed](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img20_stopwatch_resumed.png)

### Lapped: stopwatch records lap times

![img21_stopwatch_lapped](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img21_stopwatch_lapped.png)

### Reset: stopwatch resets all elapsed time

![img3_stopwatch_mobile](https://github.com/hinsenchan/iOS_clockapp_emberjs_demo/blob/master/readme/img3_stopwatch_mobile.png)

# Setup Instructions (with Ember.js previously installed)

1. run “ember server” to start ember server service
2. goto http://localhost:4200/ to view app
3. add "/node_modules" and "/vendor/*" to .gitignore to stop git from updating these static dependencies

# Setup Instructions (without Ember.js installed)

This README outlines the details of collaborating on this Ember application.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

# Reference

* Ember JS: http://emberjs.com/
* Ember-CLI: http://www.ember-cli.com/
* w3Schools: http://www.w3schools.com/

# Credits

This software was developed by Hinsen Chan at Santa Clara University in Summer 2014.
