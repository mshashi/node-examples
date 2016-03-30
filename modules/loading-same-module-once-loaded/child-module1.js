var parentModule = require("./parent-module");


//overriding the parent module method
parentModule.printMe1 = function () {
    console.log("print me in child1");
};