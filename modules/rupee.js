'use strict';

var RupeeConversion = require('./rupee-conversion-module');


exports.convertCurrency = function (fromCurrency, toCurrency, currency) {

    if (fromCurrency === toCurrency) {
        return currency;
    }

    if (toCurrency === 'dollar') {
        return RupeeConversion.convertRupeeToDollar(currency);
    }

    if (toCurrency === 'rupee') {
        return RupeeConversion.convertDollarToRupee(currency);
    }
};