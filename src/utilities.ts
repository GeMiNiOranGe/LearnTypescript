/**
 * Count the number of duplicate elements.
 * @param args Array of elements.
 * @returns `{element: numberOfDuplicate, ... }`
 */
export function countDuplicateElements(...args: any[]): object {
    let initialValue = {};
    return args.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
        return accumulator;
    }, initialValue);
}
// console.log("Number count   :", countDuplicateElements(...[11, 21, 11, 19, 46, 46, 19, 21]));
// console.log("Number count   :", countDuplicateElements(11, 21, 11, 19, 46, 46, 19, 21));

/**
 * Create a character-separated string.
 * 
 * Example: `hello world` => `.h..e..l..l..o.. ..w..o..r..l..d.`.
 * @param message The input message wants to separate each character.
 * @param delimiter can be set with `||`, `~`, `\n`, ...
 */
export function separateEachChar(message: string, delimiter: string = " "): string {
    let insideDelim = delimiter.repeat(2);
    let chars = Array.from(message)
        .join(insideDelim);
    return delimiter + chars + delimiter;
}

/**
 * Create a character-alternated string.
 * 
 * Example: `hello world` => `h.e.l.l.o. .w.o.r.l.d`.
 * @param message The input message wants to alternate each character.
 * @param delimiter can be set with `||`, `~`, `\n`, ...
 */
export function alternateEachChar(message: string, delimiter: string = " "): string {
    return Array.from(message)
        .join(delimiter);
}
