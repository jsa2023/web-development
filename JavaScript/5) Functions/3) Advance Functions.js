// // // function
// // function sayHi(){
// //     console.log("Hi there");
// // }

// // sayHi()



// // // expression
// // var sayHi = function(){
// //     console.log("Hi There");
// // }
// // sayHi();


// // // arrow head function

// var sayHi = () => {
//     console.log("Say Hi");
// }

// sayHi()



// // const multiplier = (num1, num2) => {
// //     return num1 * num2;
// // }

// // console.log(multiplier(5, 10));


// const squareNumber = (num) => {
//     return num * num;
// }

// console.log(squareNumber(16));


// // // Research on JS Map function
// // // Complete the nested func task


// students = [
//     {
//         name: "John",
//         age: 22,
//         grade: 'A'
//     },
//     {
//         name: "Mark",
//         age: 21,
//         grade: "C"
//     },
//     {
//         name: "Samson",
//         age: 25,
//         grade: "E"
//     }
// ];

// let statements = students.map((student) => `${student.name} is ${student.age} and has grade ${student.grade}`);

// console.log(statements);

// const numbers = [
//     {
//         key: 1,
//         value: 10
//     },
//     {
//         key: 2,
//         value: 20
//     },
//     {
//         key: 3,
//         value: 30
//     }
// ];

// // [{1:10},{2:20},{3:30}]

// // const newArray = numbers.map(({k,v}) => ({[k]: v}));
// // const newArray = numbers.map((obj) => {
// // //    var myKey = obj.key;
// // //    var myValue = obj.value;

// // //    let theObj = {
// // //     obj.key : myValue
// // //    }

// // //    return  `${obj.key}   ${obj.value}`
// //    return  obj
// // })

// const reformattedArray = numbers.map(({ key, value }) => ({ [key]: value }));

// console.log(reformattedArray[0]); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
// console.log(reformattedArray[1]); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
// console.log(reformattedArray[2]); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]

// // console.log(newArray);

// // console.log(newArray[0]);
// // console.log(newArray[1]);
// // console.log(newArray[2]);


// const users = [
//     { name: "Chris", age: 24 },
//     { name: "Jhon", age: 24 },
//     { name: "Jafar", age: 24 },
// ]

// // const mapUserList = (myArray) => {
// //     const userNameList = myArray.map((user) => {
// //         return user.name + " " + user.age;
// //     })

// //     return userNameList;
// // }

// // console.log(mapUserList(users));


// // const mapUserList2 = myArray => myArray.map(user => user.name + " " + user.age);

// // console.log(mapUserList2(users));

// // const multiplier = (num1, num2) => {
// //     num1 * num2
// // };

// /**
//  *                  Rules for optimization
//  *  1) if we have only 1 value returning in the fat arrow function we can do this step
//  * we removed the curly braces and the return key word and brought the logic on a single line
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */

// const multiplier = (x, y) => x * y

// /**
//  * 2) If we have a 1 parameter we can also remove the brackets
//  * 
//  * 
//  */

// const squarer = x => x * x

// console.log(squarer(9));


// // const mapUserList = (myArray) => {
// //     const userNameList = myArray.map((user) => {
// //         return user.name + " " + user.age;
// //     })

// //     return userNameList;
// // }



// const mapUserList = myArray => myArray.map(user => `${user.name} ${user.age}`);
// /**
//  * Research on SDLC methods
//  * 
//  * Research waterfall vs agile vs incremental in detail
//  * 
//  * Pracice the optimization on different scenarios ( create scenario from your own logic )
//  * 
//  */




// //  // // filter function

const myNumbers = [1, 3, 4, 2, 4, 6, 8, 4, 3, 2, 1];

const filteredNumbers = myNumbers.filter(function (num) {
    // return num === 4;

    return num % 3 === 1;
})


console.log(filteredNumbers);



/**
 * Homework: 
 * 
 *  
 * Make a function which has two arguments
 * 1st argument specifies the array to be filtered
 * 2nd argument specifies the number which is in the condition of the filteration process
 */

const filterList = (myList, num) => {
    return myList.filter(n => n % num === 0);
}

console.log(filterList([5, 3, 4, 6, 78, 97, 24], 2));


/**
 * Make a random number array
 * make a function that accepts an array then doubles the number and returns the elements in a new array
 * return the complete array and display results
 */

// function  doubleArray(arr) {
//     return arr.map(x => x * x);
// }

// console.log(doubleArray([2,4,5,6,7,9]));


let nums = [1, 2, 3, 4, 5, 6, 7]

const doubledNumbers = (num) => {
    const numberContainer = [];
    num.forEach((n) => {
        const doubled = n * 2;
        numberContainer.push(doubled);
    });
    return numberContainer
}

console.log(doubledNumbers(nums));


// // the default arguments

// function numberMultiplier(x, y){
//     return x * y;
// }

// console.log(numberMultiplier(2));// 2 * undefined = NaN

// function numberMultiplier(x, y){
//     x = x || 6;
//     y = y || 2;
//     return x * y;
// }

function numberMultiplier(x = 5, y = 6) {

    return x * y;
}

console.log(numberMultiplier());


// // string splitter functionality

function stringSplitter(str) {
    return str.split("-");
}

console.log(stringSplitter("19-02-2015"));

// // Hw: try the same thing by using a for loop 
function dateSplitter(date) {
    dateArray = date.split("-")
    const day = dateArray[0]
    const month = dateArray[1];
    const year = dateArray[2];

    return `The day is ${day} month is ${month} years is ${year}`
}





const bankAccount = {
    canSpendMoney: true,
    Balance: 100
}


function canPurchaseItem(price, acnt = bankAccount) {
    if (acnt.canSpendMoney) {
        if (price <= acnt.Balance) {
            acnt.Balance -= price;
            return true;
        } else if (acnt.Balance === 0) {
            acnt.canSpendMoney = false;
            return false;
        }
        else {
            acnt.canSpendMoney = false;
        }
    }
}


// when the amount of balance is exactly 0 then change canSpendMoney to false as user funds are finished

canPurchaseItem(50)
canPurchaseItem(40)
canPurchaseItem(200000) // this purchase was not allowed
//canPurchaseItem(10)
//canPurchaseItem(1)
console.log(bankAccount);




/***
 * This is a new ES6 feature
 * There is a reserve key word called arguments which created objects
 * and it associates the object with the arguments i.e x y z
 * 
 * in easy words we can say that it allots the value to a specific address
 */


function logAllArguments() {
    // console.log(arguments);

    return arguments
}

// logAllArguments(1, 2, 3, 44)
// let res = logAllArguments(1, 2, 3, 44)


// console.log(res);
// console.log(res[4]);


// function logAllArguments(){
//     // console.log(arguments[2]); // for specific argument at position 2

//     const args = Array.prototype.slice.call(arguments, logAllArguments.length) // we can slice out the arguments from the expected arguments

//     console.log(args.sort());
// }

// logAllArguments(1, 2, 3,  6, 7, 2, 3)

/**
 * Homework: 
 * Resarch on Array.prototype method
 * research on slice.call js
 * research on arguments
 * research on ... spread operator
 * Resarch on setInterval
 * Research on clearInterval
 * 
 * 
 * Make notes on all these
 */


// // same above code ES6 style

function logAllArguments(x, ...nums) {
    console.log(nums.sort());
}

logAllArguments(4, 3, 2, 6, 7, 8, 5, 1)

function sum() {
    return arguments
  }
  
//   const numbers = [1, 2, 3];
  
// console.log(numbers[0] + numbers[1] + numbers[2]);

  
// console.log(sum(numbers[0], numbers[1], numbers[2]));

// console.log(sum(...numbers));

//   console.log(sum(...numbers));
  // Expected output: 6

  console.log(sum(1, 2, 4, 5 ));

  /**
   * Make a function multiplier 
   * all the numbers as arguments should get multiplier
   * make user of the spread operator
   */



//   function multiplier() {
//     product = `1`;
//     return arguments
//   }

//   function

function multiply(multiplier, ...nums){
    return nums.map((n =>  multiplier * n))
}

console.log(multiply(2, 3, 4));

// // setInterval

// function Dog(years, breed){
//     this.age = years;
//     this.type = breed;

//     setInterval(() => {
//         this.age += 1;
//         console.log(this);
//     }, 1000) // 1000 means 1 second
// }

// const spike = new Dog(3, "Golden retriver");
// const simbel = new Dog(5, "Poodle");

// console.log(spike.age);

