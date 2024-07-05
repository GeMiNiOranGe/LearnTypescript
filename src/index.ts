import { separateEachChar, alternateEachChar } from "./utilities";

try {
    const FIRST_MESSAGE: string = "Hello world!!!";
    console.log(alternateEachChar(FIRST_MESSAGE));
    console.log(separateEachChar(FIRST_MESSAGE));
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error(error);
    } else {
        throw error;
    }
} finally {
    console.log("Program end");
}
