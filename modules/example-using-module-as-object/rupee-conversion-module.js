'use strict';

var ConversionModule = function(dollarToIndianValue){
this.dollarToIndianValue = dollarToIndianValue;
}


ConversionModule.prototype.roundTwoDecimals = function(amount) {
    return Math.round(amount * 10) / 10;
}

ConversionModule.prototype.convertDollarToRupee = function (dollar) {
    return this.roundTwoDecimals(dollar * this.dollarToIndianValue);
}

ConversionModule.prototype.convertRupeeToDollar = function (rupee) {
    return this.roundTwoDecimals(rupee / this.dollarToIndianValue);
}

module.exports = exports = ConversionModule;