// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(name) {
    if (name === true  || name === false){

        return "Hello, World";
    }

    else {
        return "Hello, " + name;
    }
}

function isFive(number) {
    return number == 5;
}

function isEven(number) {
    if (number % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}
function add(num1, num2) {
    if (isNaN(num1) || isNaN(num2)){
        return "NaN";
    }
    else {
        return parseInt(num1) + parseInt(num2);
    }
}
function isVowel(input) {
    var vowels = ["A","E","I","O","U","a","e","i","o","u"];
    if (vowels.includes(input)){
        return true;
    } else {
        return false;
    }
}
