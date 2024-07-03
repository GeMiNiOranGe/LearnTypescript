let person: {
    id: number;
    name: string;
} = {
    id: 1,
    name: "Abby",
};
console.log("No use         :", person);
console.log();

interface IPerson {
    id: number;
    name: string;
}

let doctor: IPerson = {
    id: 2,
    name: "Mike",
};
console.log("Use 'interface':", doctor);
console.log();

type TPerson = {
    id: number;
    name: string;
}
let engineer: TPerson = {
    id: 3,
    name: "Jessica",
};
console.log("Use 'type'     :", engineer);
