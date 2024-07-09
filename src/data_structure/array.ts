// let numbers: Array<number> = [5, 12, 6, 4, 35];
// or
let numbers: number[] = [5, 12, 6, 4, 35];
numbers.push(3);
console.log("Number array:", numbers);
console.log("Number array:", numbers.toSorted((a, b) => a - b));
console.log();

let mixedArray: (number | string)[] = [...numbers, "Hello"];
mixedArray.push("world");
console.log("Mixed array :", mixedArray);
