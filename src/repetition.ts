// Primary types

// string, number, boolean, undefined, null, symbol
// array string[] boolean[] (...), {}



// Functions

// types param or kwargs
function addExample(a: number, b: number): number {
    return a + b
}
console.log(addExample(1, 2))

// Typed returns

function divide(a: number, b: number): number {
    if ( b === 0) {
        return NaN
    }
    else {
        return a + b
    }
    
}
console.log(divide(10, 1))


// void returns

function manipulateArray(array: any[]):void  {
    array.push(4)
}

console.log(manipulateArray([1, 2, 3]))

// ta reda på hur man gör enkel-streck på mac




// Types

type Listings = {
    area: number,
    address: string,
    price: number,
    category: string,
    salePercentage: number
    isOnSale: boolean
}

const l1: Listings = {
    area: 100,
    address: "Stockholm",
    price: 5000,
    category: "house",
    salePercentage: 10,
    isOnSale: true
}

console.log(l1)


type CoperationAgent = {
    name: string,
    email: string
}
type PrivateAgent = {
    name: string,
    email: string
}


// Type aliases

type ListingType = "apartment" | "house" | "office";

type ListingsAgent = CoperationAgent | PrivateAgent;



// Optional 


type UpdatedListing = {
    area?: number,
    address?: string,
    price?: number,
    category?: ListingType,
    salePercentage?: number
    isOnSale?: boolean
}


const l3: UpdatedListing = {
    area: 100,
    address: "Stockholm",
    price: 5000,
    category: "house",
    isOnSale: true
}

console.log(l3)









// Task

type Student2 = {

}