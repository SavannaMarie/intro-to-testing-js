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
// sayHello
function sayHello(input) {
    if (typeof input === "string" && input.length > 0 && parseFloat(input) !== input){
        return "Hello, " + input + "!";
    } else {
        return "Hello, World!";
    }
}

//  isFive
function isFive(input){
    return input === 5;
}
// isEven
function isEven(input) {
    if (typeof input != "string") {
        return parseInt(input) % 2 === 0;
    } else {
        return parseInt(input) % 2 === 0;
    }
}
// isVowel
function isVowel(input){
    return input ;
}