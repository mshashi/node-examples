'use strict';

var RUNNING_PORT = 3000; //Port that we listen to

require('./child-module1'); //child 1 is called first so that it overrides the parent printMe1 method
var childModule2 = require('./child-module2');

childModule2.printMe();