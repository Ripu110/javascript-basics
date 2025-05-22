//nesting -------------------------------------------
for (let i = 0; i < 5; i++) {
    let str = ""; // Initialize str to an empty string,
    // to print the numbers as a string in single line
    for (let j = 0; j < i; j++) {
        str = str + j;
    }
    console.log(i, str);
}
//------------------------------------------------------

//callback--------------------------------------------
//A callback is a function passed as an argument to another function. The callback function is executed after the completion of the first function.

function sum(a, b) {
    console.log(a+b);

}
function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, (a, b) => {
    console.log(a + b);
});

//setTimeout --------------------------------------------
const hello = () =>{
    console.log("hello000");
}
setTimeout(hello, 4000); // 4 seconds delay

//Callback hell -----------------------------------
//Nested callbacks stacked below one another forming a pyramid shape is called callback hell.

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 3000);
// }


// getData(1, () => { 
//     console.log("getting data 2.....");
//     getData(2, () => {
//         console.log("getting data 3.....");
//         getData(3, () => {
//             console.log("getting data 4.....");
//             getData(4, () => {
//                 console.log("getting data 5.....");
//                 getData(5, () => {
//                     console.log("done");
//                 });
//             });
//         });
//     });
// });

//Promises --------------------------------------------
// let promise = new Promise((resolve, reject) => {
//     console.log("promise started");
// });

//** 
function getData(dataId ){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 3000);
    });
}

//Async-await
async function getAllData() {
    console.log("getting data 1.....");
    await getData(1);
    console.log("getting data 2.....");
    await getData(2);
    console.log("getting data 3.....");
    await getData(3);
    console.log("getting data 4.....");
    await getData(4);
    console.log("getting data 5.....");
    await getData(5);
    console.log("done");
}
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
//     console.log("done");
// }
//** 


//--------------------------------------------------
//Promise chain
// console.log("getting data1....");
// getData(1)
//     .then((res) => {
//         console.log("getting data2....");
//         return getData(2);
//     })
//     .then((res) => {
//         console.log("getting data3....");
//         return getData(3);
//     })
//     .then((res) => {
//         console.log("getting data4....");
//         return getData(4);
//     })
//     .then((res) => {
//         console.log("getting resolved....");
//         console.log(res);
//     });  





// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data", dataId);
//             // resolve("success");
//             reject("error");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }
// A javascript promise object can be:
// 1. pending: initial state, neither fulfilled nor rejected.
// 2.(Resolved) fulfilled: meaning that the operation completed successfully.
// 3. rejected: meaning that the operation failed.

//.then() method
// The .then() method returns a promise and takes up to two arguments: callback functions for the success and failure cases of the Promise.
// The .then() method is executed when the promise is resolved.
// The .catch() method is executed when the promise is rejected.
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("promise started");
//         resolve("success");       
//     });
// };

// let promised = getPromise();
// promised.then ((res) => {
//     console.log("promise fulfilled",res);
// });

// promised.catch((err) => {
//     console.log("promise rejected", err);
// })

// // promise chaining -------------------------------
// function asyncFunc1() {
//     return new  Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);    
//     });
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }
// console.log("fetching data1....");
// asyncFunc1().then((res) => {
//     console.log("fetching data2.....");
// asyncFunc2().then((res) =>{});
//     // console.log(res);
// });

// console.log("fetching data2....");
// let p2 = asyncFunc2();
// p1.then((res) => {
//     console.log(res);
// });

// asyncFunc
//async function always returns a promise
//await pauses the execution of its surrounding async functions until the promise is settled.
async function bello() {
    console.log("hello");
}

function api() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("weather data");
            reslove(200);
        }, 2000);
    });
}

async function getWeatherData() {
    await api(); //1st
    await api(); //2nd
    await api(); //3rd

}


//IIFE 
// its is a function that is called immediately as soon as it is defined. 

(async function () {
    console.log("getting data 1.....");
    await getData(1);
    console.log("getting data 2.....");
    await getData(2);
    console.log("getting data 3.....");
    await getData(3);
    console.log("getting data 4.....");
    await getData(4);
    console.log("getting data 5.....");
    await getData(5);
    console.log("done");
})();
