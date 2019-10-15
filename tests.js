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

//unit test for sayHello function
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should be a string', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane' , function() {
        expect(sayHello("Jane")).toBe("Hello, Jane");
    });
    it('should return Hello, Alex' , function() {
        expect(sayHello("Alex")).toBe("Hello, Alex");
    });
    it('should return Hello, Pat' , function() {
        expect(sayHello("Pat")).toBe("Hello, Pat");
    });
    it('should return "Hello, World" when passed the boolean true', function () {
        expect(sayHello(true)).toBe("Hello, World");
    });
    it('should not return "Hello, World" when passed the boolean false', function () {
        expect(sayHello(false)).toBe("Hello, World");
    });


});


//unit test for isFive function
describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should be true when equal to 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should be true if "5"', function () {
        expect(isFive("5")).toBe(true);
    });
    it('should be false if given 50', function () {
        expect(isFive(50)).toBe(false);
    });
    it('should return false if given 8', function () {
        expect(isFive(8)).toBe(false);
    })
});

 //unit test for isEven function
describe('isEven', function () {
     it("should be a defined function", function () {
         expect(typeof isEven).toBe('function');
     });
     it('should be a boolean when called', function () {
         expect(typeof isFive()).toBe('boolean');
     });
     it('should return true for 2', function () {
         expect(typeof isFive(true)).toBe(2);
     });
     it('should return false for 3', function () {
         expect(typeof isFive(false)).toBe(3);
     });
     it('should return true for -4', function () {
         expect(typeof isFive(true)).toBe(-4);
     });
     it('should return true for 2', function () {
         expect(typeof isFive(true)).toBe(2);
     });



 });






