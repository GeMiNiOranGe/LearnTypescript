export class NotPositiveNumberException extends RangeError {
    constructor(argument: string) {
        let message: string = `'${argument}' must be a positive number`;
        super(message);
        Object.setPrototypeOf(this, NotPositiveNumberException.prototype);
    }
}
