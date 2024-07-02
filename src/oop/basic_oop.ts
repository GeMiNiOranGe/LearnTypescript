import Person from "./person";
import Student from "./student";

let person = new Person("Mike", 30);
let student = new Student("Abby", 16, "female", undefined, 10);

console.log(person);
console.log(person.toString());
console.log();

console.log(student);
console.log(student.toString());
