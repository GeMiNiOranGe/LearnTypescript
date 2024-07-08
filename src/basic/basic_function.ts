function handleException(message: string): never {
    throw new Error(message);
}
// console.log(handleException("This is an error message"));

const printOnConsole = (message: string): void => {
    console.log(message);
};
printOnConsole("Hello world!!!");
