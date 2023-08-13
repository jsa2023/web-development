/***
 * For in Loop
 * 
 This is used to loop through object properties and arbitract order

 This is used for looping over object properties
 */


//  const users = {
//     first: "Sally",
//     second: "sara",
//     3: "Jafar"
//  }

//  for (let i = 0; i < users.length; i++) {
//     console.log[users[i]];
//  }

//  console.log("Heyy ");

// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);

// for(let prop in users){
//    // console.log(prop);
//    console.log(users[prop]);
// }



// // if we want to transform all of our values into something


const users = {
   first: "Sally",
   second: "sara",
   3: "Jafar"
}

// for (let prop in users){
//    let newUser = users[prop]
//    newUser = "Deleted"
//    console.log(newUser);
// }

// console.log(users);


// to change all the values of an object
// for (let prop in users) {
//    newValue = "Item Deleted";
//    users[prop] = newValue;
// }

// console.log(users);


// change a specific key value

// function deleteFromObject(key, obj) {
//    for (let prop in obj) {
//       if (prop === key) {
//          let newValue = "Item modified"
//          users[prop] = newValue
//       }
//    }
// }

// deleteFromObject('first',users);
// console.log(users);


// const drinks = ["Coffee", "Sprite", "Tea", "Pepsi"]

// // for(let d in drinks){
// //    console.log(drinks[d]);
// // }

// for (let drink in drinks) {
//    // console.log(drink);
//    if(drink == 0){
//       drinks[drink] = "CHanged"
//    }
//    console.log(drinks[drink]);
// }



// for each is only for arrays not for the objects
// we can not use break or continue in forEach


// const drinks = ["Coffee", "Sprite", "Tea", "Pepsi"]

// drinks.forEach((n) => {
//    // console.log(n);
//    if (n == "Sprite") {
//       // break; // we can not use break in forEach
//       // continue; // we can not use
//       // // to resolve this issue we can always use our for in loop
//       console.log(n);

//    } else {
//       console.log("Nothing");
//    }

// })

/** HOMEWORK
 * Do the above activity again with for in loop and try to use break and continue and see if they work or not
 * do research on space complexity and time complexity
 * 
 * Research on worst case average and the best case
 * what is Big O
 */



// // for ... of loop

/***
 * New loop in ES6 and it is used to loop over iterable objects(arrays, strings, maps, sets, etc)
 * this loop is used for looping over data like the values in an array
 * for of can NOT be used with the objects
 * It can be used with the strings
 */


// const drinks = ["Coffee", "Sprite", "Tea", "Pepsi"]

// for (const d of drinks){

//    // console.log(d);
//    if(d === "Sprite"){
//       // break;
//       continue
//    } else {
//       console.log(d);
//    }
// }


const orignalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const orignalArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let total = 0

// for (const i of orignalArray) {
//    //console.log(typeof i);
//    total += parseInt(i);
// }

// console.log(total);


/**
 * Add 10 to each element of your array
 */


for (const i in orignalArray) {
   orignalArray[i] +=  10;
}

console.log(orignalArray);


// // above code converted with a function

function numIncrementer(arr, incrementTo){
   for(let num of arr){
      num += incrementTo // adding num to each item of array
      console.log(num);
   }
}

numIncrementer(orignalArray, 20)
numIncrementer(orignalArray2, 100)



const orignalNamesArray = ["Chris", "Andy", "Chucky", "Polina"]


const uniqueNameset = new Set(orignalNamesArray)

console.log(uniqueNameset);


for(const n of uniqueNameset){
   console.log(n);
}