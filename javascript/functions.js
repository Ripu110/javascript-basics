console.log("functions.js loaded");
// Function to get the current date and time
function getCurrentDateTime() {
    let now = new Date();
    return now.toLocaleString();
}
// Function to display a message
function displayMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}

//Arrow function
const arrowSum = (a,b) => {
    console.log(a+b);
};
// arrow function multiply two numbers
let arrowMul = (a,b) => {
    console.log(a*b);
}; 

// Create a function using the "gunction" keyword that takes a string as an argument and returns the number of vowels in the string.
function countVowels(str) {
    let count = 0;
    for (const char of strt){
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }
    console.log(count);
}

///////////////////////////////////////////////
// by arrow function
let countVow = (str) => {
    let count = 0;
    for (const char of strt){
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }
    console.log(count);
}

//foreach loop in Arrays
//arr.foreach((val) => {
//    console.log(val);
//})
let arr = [1,2,3,4,5];
arr.forEach((val) => {
    console.log(val);
});

//-----------------------------------------------------
let arr1 = ["pune", "mumbai", "delhi"];

arr1.forEach((val, idx ,arr1) => {
    console.log(val.toUpperCase(), idx, arr1);
});
// higher order function - are the functions that take other functions as arguments or return a function as a result.
// forEach, map, filter, reduce, find, some, every
// forEach - executes a provided function once for each array element.

//Q.for a given array of numbers, print the square of each value using the forEach loop.
let numbers = [1,2,3,4,5];
numbers.forEach((val) => {
    console.log(val * val); // square of each value,val**2
    })      

// map - creates a new array populated with the results of calling a provided function on every element in the calling array.
let nums = [1,2,3,4,5];

let newArr = nums.map((val) => {
    return val *2; // double the value
})
console.log(newArr); // [2,4,6,8,10]

let calcsquare = (val) => {
    console.log(val * val);
};

// filter - creates a new array with all elements that pass the test implemented by the provided function.
let numbers1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let newNum = numbers1.filter((val) => {
    return val % 2 === 0; // even numbers
})

let newDum = numbers1.filter((val) => {
    return val > 4; // even numbers
})
console.log(newNum); // [2,4,6,8,10,12,14]
console.log(newDum); // [5,6,7,8,9,10,11,12,13,14,15]

// reduce - executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let numbers2 = [1,2,3,4];
const output = numbers2.reduce((res, curr) => {
    return res + curr;
})

console.log(output); // 10

//largest number in array
let numbers3 = [1,2,3,4,57,32,4,543];
const input = numbers3.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})
console.log(input); // 543
//Q. we are given array of marks of students. filter out of the marks of students that scored 90.
let marks = [45, 67, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
let newMarks = marks.filter((val) => {
    return val > 90;
})

//Q.Take a number n as input from user. Create an array of numbers from 1 to n.
// a) use the rrduce method to calculate sum of all the numbers in the array.
// b) use the reduce method to calculate product of all the numbers in the array.
let n = prompt("enter the number : ");
let x = [];

for (let i =1; i <= n; i++){
    x[i - 1] = i;
}
console.log(x);

let sum = x.reduce((res, curr) => {
    return res + curr;
});

console.log("sum = ", sum); // sum of all the numbers in the array
let product = x.reduce((res, curr) => {
    return res * curr;
});

console.log("product = ", product); // product of all the numbers in the array








// find - returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.



















