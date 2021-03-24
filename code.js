// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// addOne
function addOne(input) {
    if (typeof input !== "number") {
        return NaN;
    } else {
        return input + 1;
    }
}