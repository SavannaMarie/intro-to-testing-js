// Unit tests for the helloWorld function

describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe("addOne", function() {
    it('should be a defined function', function() {
        expect(typeof addOne).toBe("function");
    });
    it('should return a number when called', function() {
        expect(typeof addOne()).toBe("number");
    });
    it('should return the number 3 when passed the argument of the number 2', function() {
        expect(addOne(2)).toBe(3);
    });
    it("should return the number -43 when passed the argument of the number -44", function() {
        expect(addOne(-44)).toBe(-43);
    });
    it('should return the number 18 when passed the argument of the number 17', function() {
        expect(addOne(17)).toBe(18);
    });
    it("should return the number -2.14 when passed the argument of the number -3.14", function() {
        expect(addOne(-3.14)).toBe(-2.14);
    });
    it('should return the number 34 when passed the argument of the number 33', function() {
        expect(addOne(33)).toBe(34);
    });
    it("should return the number 4.58 when passed the argument of the number 3.58", function() {
        expect(addOne(3.58)).toBe(4.58);
    });
    it("should return NaN when passed the string 'Hakeem Olajuwon.'", function() {
        expect(Number.isNaN(addOne("Hakeem Olajuwon"))).toBe(true);
    });
    it("should return NaN when passed the boolean true", function() {
        expect(Number.isNaN(addOne(true))).toBe(true);
    });
    it("should return NaN when passed the array [1,2,3]", function() {
        expect(Number.isNaN(addOne([1,2,3]))).toBe(true);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Jane!' when called", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return 'Hello, Alex!' when called", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return 'Hello, Pat' when called", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return 'Hello, world!' when called", function() {
        expect(sayHello()).toBe("Hello, World!");
    });
});
describe("isFive", function() {
    it("should be a defined function", function() {
        expect(typeof isFive).toBe("function");
    });
    it("should return a boolean no matter what the input", function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it("should return true when passed 5", function() {
        expect(isFive(5)).toBe(true);
    });
});
describe("isEven", function() {
    it("should be a defined function", function() {
        expect(typeof isEven).toBe("function");
    });
    it("should return a boolean no matter what the input", function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return false when passed 5", function() {
        expect(isEven(5)).toBe(false);
    });
    it("returns false when called with isEven(\"banana\")", function() {
        expect(isEven("banana")).toBe(false);
    });
    it("returns true when called with isEven(\"8\")", function() {
        expect(isEven("8")).toBe(true);
    });
    it("returns false when called with isEven(Infinity)", function() {
        expect(isEven("infinity")).toBe(false);
    });
    it("return false when called with a boolean input like isEven(true) or isEven(false)", function() {
        expect(isEven("boolean")).toBe(false);
    });
    it("returns false when called without an argument like isEven()", function() {
        expect(isEven("")).toBe(false);
    });
});
describe("isVowel", function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should always return a boolean no matter the input', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when passed "a" as an argument', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed "A" as an argument', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed "y" as an argument', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed 4 as an argument', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed true', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed false', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed the string of "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when passed an empty parameter "isVowel()"', function () {
        expect(isVowel()).toBe(false);
    });
});
describe("add", function () {
    it('should return 5 when passed 2 and 3 as arguments', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when passed -3 and -9 as arguments', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when passed string of "5" and 6 as arguments', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when passed string of "-4" and "10" as arguments', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when passed string of "banana" and "split" as arguments', function () {
        expect(Number.isNaN(add("banana", "split"))).toBe(true);
    });
    it('should return NaN when passed 2 and "apples" as arguments', function () {
        expect(Number.isNaN(add(2, "apples"))).toBe(true);
    });
    it('should return NaN when passed no parameters', function () {
        expect(Number.isNaN(add())).toBe(true);
    });
});



