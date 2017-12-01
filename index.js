	/*
* Author: Govardhan
* Title: excel-npv
* Description: Calculate NPV as per excel function
* Date: 11-10-2017
*/
(function(){
	let Finance = function() {};

	Finance.NPV = function()  {
	    let npv = 0;
	    discountRate = arguments[0]/100; // Converting discount rate into percent
	    for (let i = 1; i < arguments.length; i++) {
	        npv += arguments[i] / Math.pow(1 + discountRate, i);
	    }
	    return Math.round(npv * 100) / 100;
	}

	module.exports = Finance;
})();
