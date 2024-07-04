import Person from "./person";

export default class Student extends Person {
    private _grade?: number;

    constructor(name: string, age?: number, sex?: string, phoneNumber?: string, grade?: number) {
        super(name, age, sex, phoneNumber);
        this._grade = grade;
    }

    public get grade(): number | undefined {
        return this._grade;
    }
    public set grade(v: number | undefined) {
        this._grade = v;
    }

    public override toString(): string {
        return `${super.toString()},\tgrade: ${this._grade}`;
    }
}