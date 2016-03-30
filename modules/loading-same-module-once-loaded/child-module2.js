var parentModule = require("./parent-module");


//This should call the overrided method if child module 1 is called before this module.
exports.printMe = function () {
    parentModule.printMe1();
}