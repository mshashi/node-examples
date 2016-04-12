function asyncFunction(callback) {
    setTimeout(callback, 200);
}
var color = 'blue';

//javascscript closure
(function (color) {
    asyncFunction(function () {
        console.log('The color is ' + color);
    })
})(color);

color = 'green';


//refer for more tricks - https://strongloop.com/strongblog/node-js-callback-hell-promises-generators/