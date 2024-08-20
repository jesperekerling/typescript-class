"use strict";
// Write a function and call it in the console.log() function to see the result in the console.
function generateIntroduction(name, age) {
    return `Hello my name is ${name} and i am ${age} years old.`;
}
console.log(generateIntroduction('Jesper', 38)); // Hello my name is Jesper and i am 38 years old.   
// Calculate the sum of two numbers
function multiply(a, b) {
    return `Calculation: ${a} + ${b} = ` + a * b;
}
console.log(multiply(2, 3)); // 6
// Remove value from list by index
function removeListIndex(list, index) {
    list.splice(index, 1);
}
const list = [1, 2, 3, 4, 5];
console.log(list + ' - List before remove function');
removeListIndex(list, 2);
console.log(list + ' - List after remove function is used'); // [1, 2, 4, 5]
function calculateArea(shape, dimension) {
    switch (shape) {
        case "CIRCLE":
            if (dimension <= 0) {
                return "Invalid dimension for a circle";
            }
            return Math.PI * dimension * dimension;
        case "SQUARE":
            if (dimension <= 0) {
                return "Invalid dimension for a square";
            }
            return dimension * dimension;
        default:
            return "Invalid shape";
    }
}
console.log(calculateArea("CIRCLE", 5)); // 78.53981633974483
