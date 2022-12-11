
/* {
    let x = 5;
    let y = "10";
    // using the parseInt
    let yInt = Number.parseInt(y);
    console.log(x+yInt);
    // using the parseFloat
    let yFloat = "6.789 is my lucky number" ;
    let z  = Number.parseFloat(yFloat);
    console.log(x + z);
} */

/* var input = prompt("Enter a number");
console.log(input);
console.log("converting 11 to binary: ",Number.parseInt(input,2));
console.log("converting the number into octo deciamal: ",Number.parseInt(input,8));
console.log("converting the number into hexa deciamal: ", Number.parseInt(input,16)); */



/* // prompt returns an interger number, thus we need to convert it soo that is can accept a decimal
var inputNumber = Number(prompt("enter a number"));
console.log(inputNumber + " converted to decimal is: ")
// converting to binary
console.log(inputNumber + " converted to binary is " + inputNumber.toString(2));
// converting to octal
console.log(inputNumber + " converted to octal is " + inputNumber.toString(8));
// converting to hexa
console.log(inputNumber + " converted to hexa is " + inputNumber.toString(16)); */



/* // using instances of numbers
let x = 50014444;
// using exponential - 
console.log(x.toExponential(3));

// using to.fixed - used to cut the number in acertain length
let y = 5.789;
console.log("the price of the item is :$"+y.toFixed(2));

// using toLocaleString - it is used to print the number in a more freindly manner
let z = 557689789;
console.log("the price of the item is :$" + z.toLocaleString(z)); */

{
var abs = Math.abs(-100);
console.log(abs);

var powerUp = Math.pow(3,2);
console.log(powerUp);

var roundOf = Math.round(5.599);
console.log(roundOf);

var truncating = Math.trunc(6.83465);
console.log(truncating);

}
