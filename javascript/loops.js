// for loop

//for (let i = 0; i < 50; i++) {
//    console.log("javascript loops");
//}

//calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i; // sum = sum + i 
// }
// console.log("Sum of 1 to 5 is: " + sum);

//while loop
let i = 1
while (i <= 5) {
    console.log("javascript loops");
    i++;
}
//do while loop

let j = 20;
do {
    console.log("javascript loops");
    j++;
}while (j <= 5);

//for of loop , it is used to iterate over iterable objects like arrays, strings, etc.
let str = "javascript loops";
for (let i of str){ //i = iterate over each character
    console.log(i);
}

//for in loop, it is used to iterate over the properties of an object.
let student = {
    name: "john snow",
    age: 25,
    city: "new york",
    cgpa: 8.8,
    isPass: true,
};
for (let k in student){ //k = key
    console.log("key = ",k);
    console.log(student[k]);
}

//print all even numbers from 0 to 100
for (let num = 0; num <= 100; num++){
    if (num % 2 === 0){
        console.log(num);
    }
}

//create a game where you start with any random game number. ask the user to keep guessing the game number until the user enters the correct value.
let gameNum = 25;
let userNum = prompt("enter the game number :" );

while (userNum != gameNum){
    userNum = prompt("wrong guess, try again");
}
console.log("congratulations, you guessed the correct number");
