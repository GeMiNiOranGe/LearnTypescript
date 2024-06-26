// bigNum = 2^64
let bigNum: bigint = 18446744073709551616n;

// bigNum = 2^128
console.log("Big number:", bigNum ** 2n);
console.log();

let firstNum: number = 50;
let secondNum: number = 6.66;

let sum: number = firstNum + secondNum;
let difference: number = firstNum - secondNum;
let product: number = firstNum * secondNum;
let quotient: number = firstNum / secondNum;

console.log("First number :", firstNum);
console.log("Second number:", secondNum);
console.log("Result       :", [sum, difference, product, quotient.toFixed(2)].join(" | "));
