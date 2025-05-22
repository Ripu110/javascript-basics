// Arrays

let arr = [1, 2, 3, 4, 5];
let arr1 = [1, 2, 3, 4, 5];
let heros = ["spiderman", "batman", "superman", "ironman"];

console.log(heros);
console.log(heros.length);

//for of
for (let hero of heros) {
    console.log(hero);
}

let cities = ["delhi", "mumbai", "banglore", "chennai"];
for (let city of cities) {
    console.log(city);
    
}

// for a given array with prices of 5 items ->[250,645,300,900,50]. All items have an offer of 10% off on them. change the array to store final price after applying the offer.
let items = [250, 645, 300, 900, 50];

// let idx = 0;
// for (let val of items){
//     console.log(`value at index ${idx} = ${val}`);
//     let offer = val / 10;
//     items[idx] = items[idx] - offer;
//     console.log(`value after offer = ${items[idx]} `);
//     idx++;
// }

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]} `);
}
console.log(items);

//array methods
//push() -> add an element to the end of the array
// pop() -> remove the last element of the array       
// shift() -> remove the first element of the array
// unshift() -> add an element to the start of the array
// splice() -> add or remove elements from the array
// slice() -> create a new array from the existing array
// toString() -> convert the array to a string
// join() -> join the elements of the array with a separator



















