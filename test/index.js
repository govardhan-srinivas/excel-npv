let finance = require('excel-npv');

// Example:
// Invest $100,000 in Year 1 and receive revenues $50,000, $40,000, $30,000, $20,000 from Year 2 to 5. 
// What is the Investment Rate of Return? If the required rate of return (discount rate) is 3.125%, what is the net present value?

let discountRate = 3.125, intialInvestment =  -100000, cashflows = [ 50000, 40000, 30000, 20000 ]; //cash flows can be n number

// Procedures:
// Enter cash flows -100000, 50000, 40000, 30000, 20000 for Year 1 to 5. Enter 3.125 to the Discount Rate as first argument or pass 0 if you are not considering discount rate for npv. 

let output = finance.NPV(discountRate, intialInvestment, ...cashflows); 
// Or you can follow this syntax also
// let output = finance.NPV(3.125, -100000, 500000, 400000, 300000, 200000); 

console.log(output);
// Answers:
// The net worth of this project is $30,192.11. 

//Note: Initial Investment always represented in negative(-) sign. NPV can accept n number of cash flows.