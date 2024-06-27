// let numbers: Array<number> = [5, 12, 6, 4, 35];
// or
let numbers: number[] = [5, 12, 6, 4, 35];
let mixedArray: (number | string)[] = [...numbers, "Hello"];

numbers.push(3);
mixedArray.push("world");

console.log(numbers);
console.log(mixedArray);
