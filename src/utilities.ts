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
