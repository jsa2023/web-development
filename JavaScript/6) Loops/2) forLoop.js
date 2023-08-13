/**
 * For loops
 * 
 * They will repeat until a specified condition evaluates to false
 * 
 * 
 * syntax:
 * for(index to begin with;  index < 10; index increment){
 * 
        statements that will run in every iteration
 * 
 * }
 */

// var index = 0;
// for(index; index < 10; index++){
//     console.log(`Yayy i am looping loop number ${index}!!!`);
// }



// // array with loops

// const iceCreams = ["chocolate", "mint", "vanilla", "cherry"];
// const iceCreams2 = ["coffee", "mint", "vanilla", "mangoe"];

// /**
//  * Make a function that accepts 1 argument, the icrement flavour that we need to find
//  * write a loop in that function to find that flavour and display it
//  * also display where you found that index
//  */

// function searchFlavour(flavoursList, flavour) {
//     for (let i = 0; i < flavoursList.length; i++) {
//         if (flavoursList[i] === flavour) {
//             console.log(`flavour ${flavour} at index ${i}`);
//         } else {
//             console.log("not found");
//         }
//     }
// }




// searchFlavour(iceCreams2,"cherry"); 
// 

/***
 * FIZZ BUZZ
 * 
 * make a loop to count from 1 - 100
 * for the numbers divisble by 3 print FIZZ
 * for the numbers divisble by 5 print BUZZ
 * for the numbers divisible by 3 and 5 print FIZZ BUZZ
 */


// for (let i = 1; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0 ) {
//         console.log("FIZZ BUZZ");
//     }
//     else if (i % 3 === 0) {
//         console.log("FIZZ");
//     }
//     else if (i % 5 === 0) {
//         console.log("BUZZ");
//     }
//     else {
//         console.log(`${i}`);
//     }
// }


// continue in while loop

// let x = 0;
// while(x < 10){
//     x += 1;
//     if(x === 5){
//         console.log("I am being skipped :(");
//         // break; // to stop to execution further and break out of the loop
//         continue;

//     }
//     else if(x === 10){
//         console.log("I am not being skipped :)");
//     } else {
//         console.log("I am not being skipped");
//     }
// }


// // nested loops

// for(let i = 0; i < 5; i++){
//     console.log("Loop# " + i);
//     for(let j = 0; j < 3; j++){
//         console.log("           Inner Loop# " + j);      
//     }
// }


// // we can use labels so understand this even better

// outerLoop:
// for(let i = 0; i < 5; i++){
//     console.log("Loop# " + i);
   
//     innerLoop:
//     for(let j = 0; j < 5; j++){
//         console.log("           Inner Loop# " + j);   
//         if(j === 3){
//             break innerLoop;
//         }   
//         if (i === 2) {
//             break outerLoop;
//         }
//     }


// }


// // timeOut function

// setTimeout(function(){
//     console.log("Hey....");
// }, 5000) // 1000 means 1 sec, it will pop up all after 1 second

// // console.log("Heyyy");



// function looper(value){
//     setTimeout(function(){
//         // console.log(value);
//         console.log("*");
//     }, value * 1000)
// }

// for(let i = 0; i < 10; i++){
//     looper(i)
// }

// for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < i + 1; j++) {

//     }
// }

/**
 * try print * with the above activity
 * 
 *   *
 *   **
 *   ***
 *   ****
 */




// var myNamesData = [ "Ali", "Sara", "Bob", "Jafar", "Sandara"]
// var namesS = []

// const namesBeginningWith = (NamesArr, letter) => {
//     const newArr = [];
//     for (let i = 0; i < NamesArr.length; i++) {
//     if (NamesArr[i][0] === letter) {
//         newArr.push(NamesArr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(namesBeginningWith(myNamesData,""));


// // convert this code and make a function which expects two args arrayName and letter


// // Hometask increase the duration, currently its set to 1s
// for(let i = 10; i >= 0; i--){
//     setTimeout(() => {
//         console.log(i);

//     }, 1000*(11-i)-1)
// }




// for(i = 20; i >= 0; i--){
//     console.log(i);
// }


// var twoDArray = [
//     [1,2], 
//     [3, 4],
//     [5, 6]
// ]

// 123456

// Hometask: Print the numbers in a single line
// for (let i = 0; i < twoDArray.length; i++) {
//     for (let j = 0; j < twoDArray[0].length; j++) {
//         console.log(twoDArray[i][j]);
//     }
// }




var randNums = [3, 5, 2, 66, 33, 77, 88, 22, 33]

const deleteNumber = (arr, num) => {
    let ind;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            ind = i;
            arr.splice(ind, 1);
            break;
        }
    }
    return arr;
}

console.log(deleteNumber(randNums,33));