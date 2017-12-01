excel-npv
==========
Get Finance NPV values as similar to Excel NPV function with Node package solution.


<div class="wrappper">

 <h2 id="intro">Introduction</h2>

 <p>excel-npv makes it easy to incorporate common npv calculations into your application. The library is built on pure JavaScript without any dependencies.</p>

 <p>This project is <a href="https://github.com/govardhan-srinivas/excel-npv">hosted on GitHub</a>. You can report bugs and discuss features on the <a href="https://github.com/govardhan-srinivas/excel-npv/issues">GitHub issues page</a>.

 <h2 id="start">Getting Started</h2>

 <pre><code>npm install excel-npv --save</code></pre>

 <p><strong>or</strong></p>

 <ul>
   <li>Download or fork the repository from GitHub.</li>
   <li>Extract the file excel-npv from the project and include it in your application on the client side.</li>
 </ul>

 <h2 id="example-usage">Example Usage</h2>

 	var Finance = require('excel-npv');
 	var finance = new Finance();
 	// To calculate Amortization
 	finance.NPV(3.125, -100000, 50000, 40000, 30000, 20000);
 	// => 30,192.11

 ### Typescript

	import { Finance } from 'financejs'
	let finance = new Finance();
	// To calculate Amortization
	finance.NPV(3.125, -100000, 50000, 40000, 30000, 20000);
 	// => 30,192.11


 <h3 id="NPV">Net Present Value (NPV)<br>

 <code class="highlight">finance.NPV(discountRate, intialInvestment, [cash flows]);</code></h3>

 <p>Net Present Value (NPV) compares the money received in the future to an amount of money received today, while accounting for time and interest [through the discount rate]. It's based on the principal of time value of money (TVM), which explains how time affects monetary value.<sup><a href="http://www.investopedia.com/articles/fundamental-analysis/09/net-present-value.asp" target="_blank">1</a></sup></p>

 <p><code>[cash flows]</code> takes any number of projected cash flows.</p>

 <pre><code>// e.g., If discount rate is 10%, initial investment is -$1,000, cash flow in year 1 is $200,000, year 2 is $300,000, and year 3 is $200,000, the NPV is $80,015.03.

 finance.NPV(10, -500000, 200000, 300000, 200000);
 => 72740.93</code></pre>

### Contributing

Contributions are welcome to aid in the expansion of the library. In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality, and please lint and test your code.

### Reference

1. <a href="http://www.investopedia.com/articles/fundamental-analysis/09/net-present-value.asp" target="_blank">Investopedia</a>
