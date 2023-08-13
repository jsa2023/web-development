/**
 * Function is a JS procedure -  a set of statements that performs a task or calculates a value
 * 
 * -- Search on MDN
 */

// const sayName = "Jafar";

// function sayHi(){
//     console.log("Hi", sayName);
// }

// sayHi()


// // a bettery way to make functions (making function with arguemnts)


// function sayHi(firstName, lastName){
//     console.log("Hi", firstName, lastName);
// }


// sayHi("Jafar", "Husain")
// sayHi("Huzaifa", "Sheikh")


// function add(num1, num2) {
//     return num1 + num2;
// }

//  console.log(add(1,2));

/**
 * Make a function to double the num
 * 
 */


//  function numDoubler(num) {

//     // const doubledValue = num * 2
//     const doubledValue = num + num
//     return doubledValue;
//     // return num * 2;
//  }
//  console.log(numDoubler(4));

//  const numThreeDoubled = numDoubler(3)
//  console.log(numThreeDoubled);


// //           Hoisting is functions

/**
 * Hosting in function means when the code is compiled all the functions are placed at the top of the code
 */
console.log(numDoubler(4));

function numDoubler(num) {

    // const doubledValue = num * 2
    const doubledValue = num + num
    return doubledValue;
    // return num * 2;
}



// const myName = "Jafar";
// function sayHi() { // impure function
//     if(!myName){ // there is no myName
//         var myName = "BoB"; // this should not be running as myName is const and defined outside the block it is running  because it is being hoisted the function is moved above the const myName = "Jafar"
//     }

//     console.log("Hi", myName);

// }
// sayHi();



// // another way to write the above code

var sayHi = function (myName) {
    if (!myName) {
        var myName = "BoB"
    }
    console.log("Hii", myName);
}
sayHi("Chris") // it won't be hoistied as in the previous case this was working if we moved the statement of callback above the function



const square = function (num) {
    sqr = num * num;
    return sqr;
}

console.log(square(9));


console.log(Math.pow(3, 3));

/**
 * Make a function to calculate a desired number with a desired power 
 */

const toPower = function (num1, num2) {
    let result = Math.pow(num1, num2);
    return result;
}

console.log(toPower(2, 3));



// // Combining the result of functions
const squaredNumber = function (num) {
    return num * num;
}


const numAdder = function (squarer, num2) {
    const squared = squarer(4);
    return squared + num2;
};
console.log(numAdder(squaredNumber, 10));


/**
 * Make a function to say icecream details
 * Make a function to say icecream price
 * 
 * combine bother the functions to return a result 
 */

function icecreamDetails(flavour) {
    return "icecream flavour is " + flavour;
}

function iceCream_price(value) {
    return " and the price is " + value;
}

const my_icecream = function (icecream, price) {
    return icecreamDetails(icecream) + iceCream_price(price);
}

console.log(my_icecream("Vanilla", 25.5));


// console.log(my_icecream(icecreamDetails("vanilla"),price(15)));



const myInfo = {
    name: "Jafar",
    age: 20
}
const myInf2 = {
    name: "Jafar",
    age: 20
}


// const changeName = function(newName) {
//     new_value = myInfo['age'].name = newName;
//     return new_value;
// }

// console.log(changeName("Tom"));

// function changeName(obj, value){
//     obj.name = value
// }

// changeName(myInfo, "Huzaifa" )
// console.log(myInfo);


function objKeyChanger(objName, value) {
    objName.name = value
}

objKeyChanger(myInf2, "Polina")

console.log(myInf2);

/**
 * Make a function to sort an array in descending order then insert a value at the last index
 */

myArray = [9, 5, 6, 2, 78, 24];


// console.log(myArray.sort(function(a, b) { return a - b}).reverse());


function sortArray(arr, value) {
    // let myArray1;
    // myArray1 = arr;
    // arr.sort(function (a, b) { return a - b }).reverse();
    arr.push(value);
    arr.sort(function (a, b) { return a - b }).reverse();
    // console.log(arr);

    return arr
}


console.log(sortArray(myArray, 15));