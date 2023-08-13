// /***
//  * Loops:
//  * 
//  * Quick and easy way to do something repeatedly
//  * infinite loops can crash the browser
//  * 
//  */

// /**
//  * 
//  * There are many types of loop but all do basically the same thing repeat something
//  * for example an action a set number of times could be even 0
//  * 
//  * Types of Loops:
//  * For
//  * do while
//  * while
//  * forIn
//  * forOf
//  * forEach
//  * 
//  */

// // // while Loop
// /**
//  * while(condition is true){
//  *      statement will run
//  * }
//  */

// // // // infinite Loops
// // let numberOfLoops = 0;
// // while(numberOfLoops < 10){
// //     console.log("Hello");
// // }


// // let numberOfLoops = 0;
// // while(numberOfLoops < 10){
// //     console.log("Hello");
// //     console.log(numberOfLoops);
// //     numberOfLoops++;
// // }

// // // loop and add at the same time

// //1, 2, 3,4 5, 6
// // let num1 = 0;
// // let num2 = 0;
// // while (num1 < 8){
// //     num1 += 1;
// //     console.log(num1); // every time num1 increments
// //     num2 += num1 // 1 + 2 + 3 + 4 ... + 8

// //     if(num1 === 4) break; // stop on a cretain condition
// // }

// // console.log(num2);


// /***
//  * Make an array of random nums, try do to add them using while loop
//  */

// numbers = []
// let i = 0
// while (i < 10) {
//     numbers.push(Math.floor(Math.random() * 100 + 1))
//     i++
// }

// console.log(numbers)

// // make an array of names
// const myNames = ["John", "Jake", "Jill"]
// // desk a function within a loop to find the specified name

// function findName(arrayName, name) {
//     // while loop on arrayName find the name from it it is exists
//     let index = 0;
//     while (index < arrayName.length) {
//         if (arrayName[index] === name) {
//             console.log("Name found");
//             break;
//         }
//         else {
//             console.log("name not found");
//             index++;
//         }
//     }
// }




// findName(myNames, "John")


// // do --- while statment


// /**
//  * Similar to while but runs even false at 1st iteration
//  * Here the loop always checks the statement and run it even if the statement if false
//  */


// // let limit = 0;
// // do {
// //     console.log("Looping");
// //     limit++;

// // } while (limit < 10)


// let shouldRunOnlyOnce = true;
// let index = 0;
// do {
//     index++;
//     console.log("Looping!!");

//     if (index === 10) {
//         shouldRunOnlyOnce = false
//     }
// } while (shouldRunOnlyOnce === true)

// prompt("Enter q to exit")

// let condition;
// do{
//     const userInput = prompt("enter q to exit")
//     if(userInput === "q"){
//         condition = false;
//         console.log("exited");
//     } else {
//         condition = false;
//         console.log("its not exited");
//     }
// } while(condition === true)
// function checkIfCanPurchase(){
//     if(totalMoney === 500){
//         console.log("You can purchase this item");
//     } else {
//         console.log("Sorry you can not purchase this");
//     }
// }

// let totalMoney = 100;
// do{
//     checkIfCanPurchase()
// } while( totalMoney > 500)


// // Number guessing activity for number between 1 - 10

const MIX = 1;
const MAX = 10;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN

let guesses = 0 // for storing the number of guesses
let hint = "" // for storing the hint
let number = 0;

