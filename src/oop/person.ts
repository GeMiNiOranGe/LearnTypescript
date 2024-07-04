import { NotPositiveNumberException } from "./custom_exception";

export default class Person {
    private _name: string;
    private _age?: number;
    private _sex?: string;
    private _phoneNumber?: string;

    constructor(name: string, age?: number, sex?: string, phoneNumber?: string) {
        this._name = name;
        this._age = age;
        this._sex = sex;
        this._phoneNumber = phoneNumber;
    }

    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }

    public get age(): number | undefined {
        return this._age;
    }
    public set age(v: number | undefined) {
        if (typeof v !== "undefined" && v < 0) {
            throw new NotPositiveNumberException("age");
        }
        this._age = v;
    }

    public get sex(): string | undefined {
        return this._sex;
    }
    public set sex(v: string | undefined) {
        this._sex = v;
    }

    public get phoneNumber(): string | undefined {
        return this._phoneNumber;
    }
    public set phoneNumber(v: string | undefined) {
        this._phoneNumber = v;
    }

    public toString(): string {
        return `name: ${this._name},\tage: ${this._age},\tsex: ${this._sex},\tphone number: ${this._phoneNumber}`;
    }
}