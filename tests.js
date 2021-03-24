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
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
});






// Exercise #2 Ensure our function returns the right data type.
//     New tests will each have their own expect, it, the describe
// Step 1: The smallest possible test, now that the function exists, is to ensure that calling the function gives us a string. Inside of tests.js, add an assertion to sayHello that it "should return a string when called.". The test should look similar to expect(typeof sayHello()).toBe("string")
// Step 2: Run all tests to make sure that the new test starts red.
//     Step 3: Have your sayHello function return a string. The simplest code and smallest change possible is to return an empty string return "".
//     Step 4: Now, run all the tests to ensure that the previously red test is now turned green by our impelementation.
//     Step 5: There's nothing to refactor.
// Step 6: Repeat (Repeat the process by moving to build the next, small test)
// Always: Add, commit, and push your work to GitHub.