//strings
let str = "northern india engineering college";

//////////////////////////////////////////
let obj = {
    item: "pen",
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log("the cost of",obj.item,"is",obj.price, "rupees");


//template literals
let sentence = `this is a string for template literals`;
console.log(sentence);
console.log(typeof sentence);

console.log("ripu\tdaman\tsingh")

//Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

// eg: user name = "ripudamansingh" ,username should be @ripudamansingh123

let fullName = prompt("Enter your full name");
// let userName = `@${fullName}${fullName.length}`;
// console.log(userName);

let username = "@" + fullName + fullName.length;
console.log(username);