import Person from "./person";
import Student from "./student";

let person = new Person("Mike", 30);

console.log(person);
person.phoneNumber = "0127983719";
console.log(person.toString());
console.log();

let student = new Student("Abby", 16, "female", undefined, 10);

console.log(student);
console.log(student.toString());
