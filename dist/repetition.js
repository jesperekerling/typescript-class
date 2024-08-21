"use strict";
// Primary types
// string, number, boolean, undefined, null, symbol
// array string[] boolean[] (...), {}
// Functions
// types param or kwargs
function addExample(a, b) {
    return a + b;
}
console.log(addExample(1, 2));
// Typed returns
function divide(a, b) {
    if (b === 0) {
        return NaN;
    }
    else {
        return a + b;
    }
}
console.log(divide(10, 1));
// void returns
function manipulateArray(array) {
    array.push(4);
}
console.log(manipulateArray([1, 2, 3]));
const l1 = {
    area: 100,
    address: "Stockholm",
    price: 5000,
    category: "house",
    salePercentage: 10,
    isOnSale: true
};
console.log(l1);
const l3 = {
    area: 100,
    address: "Stockholm",
    price: 5000,
    category: "house",
    isOnSale: true
};
console.log(l3);
