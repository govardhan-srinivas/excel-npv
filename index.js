/*
* Author: Govardhan
* Title: excel-npv
* Description: Calculate NPV as per excel function
* Date: 11-10-2017
*/
var Finance = function() {};

Finance.NPV = function(rate)  {
    let npv = 0;
    rate /=100;
    for (var i = 1; i < arguments.length; i++) {
        npv += arguments[i] / Math.pow(1 + rate, i);
    }
    return Math.round(npv * 100) / 100;
}
module.exports = Finance;