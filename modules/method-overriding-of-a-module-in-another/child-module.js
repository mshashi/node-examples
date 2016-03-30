var parentModule = require("./parent-module");

parentModule.printMe1 = function () {
    console.log("print me in child");
};


exports.printMe = function () {
    parentModule.printMe1();
}