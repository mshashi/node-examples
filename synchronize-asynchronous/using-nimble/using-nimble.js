var flow = require('nimble');

//more on nimble http://caolan.github.io/nimble/

flow.series(
[
function (callback) {
            setTimeout(function () {
                console.log('First');
                callback();
            }, 1000);
},
        function (callback) {
            setTimeout(function () {
                console.log('Next');
                callback();
            }, 500);
},
        function (callback) {
            setTimeout(function () {
                console.log('Last');
                callback();
            }, 100);
}
]);


var arr = [];

arr[21] = function (callback) {
    setTimeout(function () {
        console.log('First - 21');
        callback();
    }, 1000);
};

arr[43] = function (callback) {
    setTimeout(function () {
        console.log('Last - 43');
        callback();
    }, 100);
}



flow.series(arr);