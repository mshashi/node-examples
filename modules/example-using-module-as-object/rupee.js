'use strict';

var RupeeConversion = require('./rupee-conversion-module');
var dollarToIndianValue = 64.44;

var ConversionModule = new RupeeConversion(dollarToIndianValue);

exports.convertCurrency = function (fromCurrency, toCurrency, currency) {

    if (fromCurrency === toCurrency) {
        return currency;
    }

    if (toCurrency === 'dollar') {
        return ConversionModule.convertRupeeToDollar(currency);
    }

    if (toCurrency === 'rupee') {
        return ConversionModule.convertDollarToRupee(currency);
    }
};