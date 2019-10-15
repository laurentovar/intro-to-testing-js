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
//test

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
         expect(typeof isEven).toBe('boolean');
     });
     it('should return true for 2', function () {
         expect(typeof isEven(2)).toBe(true);
     });
     it('should return false for 3', function () {
         expect(typeof isEven(3)).toBe(false);
     });
     it('should return true for -4', function () {
         expect(typeof isEven(-4)).toBe(true);
     });
     it('should return false for "banana"', function () {
         expect(typeof isEven("banana")).toBe(false);
     });
     it('should return true for "8"', function () {
        expect(typeof isEven("8")).toBe(true);
     });

     it('should return false when called with a boolean input isEven(true)', function () {
        expect(typeof isEven(false)).toBe(false);
     });
     it('should return false when called without an argument', function () {
        expect(typeof isEven(" ")).toBe(false);
     });
     it('should return false for Infinity', function () {
     expect(typeof isEven(Infinity)).toBe(false);
     });

});

//unit test for isVowel function
describe('isVowel', function () {
    it("should be a defined function", function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should be a boolean when called', function () {
        expect(typeof isVowel).toBe('boolean');
    });
    it('should return true for "a"', function () {
        expect(typeof isVowel("a")).toBe(true);
    });
    it('should return true for "A"', function () {
        expect(typeof isVowel("A")).toBe(true);
    });
    it('should return true for "y"', function () {
        expect(typeof isVowel("y")).toBe(false);
    });
    it('should return false if input is a boolean', function () {
        expect(typeof isVowel(true)).toBe(false);
    });
    it('should return true for "8"', function () {
        expect(typeof isVowel("banana")).toBe(false);
    });
    it('should return false when called with a boolean input isEven(true)', function () {
        expect(typeof isVowel()).toBe(false);
    });

});

//Unit test for add function
describe('isVowel', function () {
    it("should be a defined function", function () {
        expect(typeof add).toBe('function');
    });
    it('should be a 5 when input (2,3)', function () {
        expect(typeof add(2,3)).toBe(5);
    });
    it('should return -12 when input (-3, -9)', function () {
        expect(typeof add(-3, -9)).toBe(-12);
    });
    it('should return 11 when input ("5", 6)', function () {
        expect(typeof add("5", 6)).toBe(11);
    });
    it('should return 6 when input ("-4","10")', function () {
        expect(typeof add("-4", "10")).toBe(6);
    });
    it('should return NaN if input ("banana", "split")', function () {
        expect(typeof add("banana", "split")).toBe(NaN);
    });
    it('should return NaN for (2, "apples")', function () {
        expect(typeof add(2, "apples")).toBe(NaN);
    });
    it('should return NaN for ()', function () {
        expect(typeof add(" ")).toBe(NaN);
    });
});



