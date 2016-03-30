'use strict';



var dollarToIndianValue = 64.44;

function roundTwoDecimals(amount) {
    return Math.round(amount * 10) / 10;
}

module.exports.convertDollarToRupee = function (dollar) {
    return roundTwoDecimals(dollar * dollarToIndianValue);
}

module.exports.convertRupeeToDollar = function (rupee) {
    return roundTwoDecimals(rupee / dollarToIndianValue);
}