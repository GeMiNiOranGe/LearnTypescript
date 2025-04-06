// type Person = [number, string];
// or
type PersonTuple = [id: number, name: string];
let employee: PersonTuple = [1, "Steve"];

console.log(employee[0], "-", employee[1]);
console.log(employee);

type NewPersonTuple = [...PersonTuple, address: string]
const newPerson: NewPersonTuple = [2, "Mike", "123 Street"];

console.log(newPerson);
