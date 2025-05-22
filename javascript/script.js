console.log("this is the javascript again");

// //Conditional statements
// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else if (mode === "blue") {
//     color = "blue";
// } else if (mode === "pink") {
//     color = "pink";
// } else if (mode === "red") {
//     color = "red";
// } else {
//     color = "white";
// }

// console.log(color);

//prompt
// let name = prompt("Enter your name");
// console.log(name);
//alert 
//alert("Hello " + name);

//confirm
//let isConfirmed = confirm("Are you sure you want to proceed?"); 
//console.log(isConfirmed);

//Document Object Model (DOM)
// console.dir(Window.document);
// console.dir(document.body);
// console.dir(document.body);
// console.dir(document.head)

//Q. Create a H2 heading element with text -"hello javascript". Append "from the college" to this text using javascript.

// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText +  "from the college";

//Q.create three divs with common class name - "box".Access them and add some unique text to each of them.

let divs = document.querySelectorAll(".box");
// console.log(divs[0]);
// divs[0].innerText = "This is the first div";
// divs[1].innerText = "This is the second div";
// divs[2].innerText = "This is the third div";

// let idx = 1;
// for (div of divs) {
//     div.innerText = `This is the ${idx} div`;
//     idx++;
// }

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name= div.getAttribute("name");
// console.log(name);

let para = document.querySelector("p");
// console.log(para.getAttribute("class, newClass"));

console.log(para.setAttribute("class", "newClass"));

let div = document.querySelector("div");

div.style.backgroundColor = "green";
div.style.fontSize = "30px"

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
console.log(newBtn);

let p = document.querySelector("p");
div.after(newBtn);    


















































