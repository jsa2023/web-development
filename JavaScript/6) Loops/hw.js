////////////////////////////////////////////////
///Spread Operator
// const numbers = [3, 4, 5];

// function add(x,y,z) {
//     return x + y +  z;
// }

// console.log(add(...numbers))

// const names = ['John', 'Jake', 'Tora', 'Tiffany'];
// const copyNames = [...names];

// console.log(copyNames);
// names[0] = 'Justin';
// console.log(names);
// console.log(copyNames);

// const namesIdObj = {
//     1: 'Lucy Smith',
//     2: 'Tara Williams',
//     3: 'Alan Shearer',
//     4: 'Tommy Gun'
// };

// const copyNamesIdObj = {...namesIdObj};
// namesIdObj[0] = "John Doe";

// console.log(namesIdObj);
// console.log(copyNamesIdObj);

// const movies = {
//     1: {
//         title: 'Rambo',
//         genre: ['Action'],
//         runningTime: 96
//     },
//     2: {
//         title: 'Rocky',
//         genre: ['Drama','Sport'],
//         runningTime: 92
//     }
// };

// const copyMovies = {...movies};
// movies[1].title = 'Tango & Cash';
// console.log(movies[1]);
// console.log(copyMovies[1]);
///////////////////////////////////////////////////////////
///Array.prototype
// Array.prototype.upperCase = function() {
//     let i;
//     for (i = 0; i < this.length; i++) {
//         this[i] = this[i].toUpperCase();
//     }
// }

// const names = ['john','jill','jack'];

// console.log(names.upperCase());
///////////////////////////////////////////////////////////

// function looper(value) {
//     setTimeout(function () {
//         let astericks = '';
//         for (let i = 0; i <= value; i++) {
//             for (let j = i + 1; j <= 5; j++) {
//                 astericks += '*';
//             }
//         }
//         console.log(astericks);
//     }, value * 1000);
// }

// // for(let i = 0; i < 10; i++){
// //     looper(i);
// // };

// // const employees = {
// //     Nick: {
// //         fullName: 'Nicholas Smith',
// //         age: 28,
// //         position: 'Senior Software Developer',
// //         salary: 46000
// //     },
// //     Tom: {
// //         fullName: 'Thomas Pain',
// //         age: 22,
// //         position: 'Junior Software Developer',
// //         salary: 27000
// //     },
// //     Anna: {
// //         fullName: 'Anna Chainey',
// //         age: 25,
// //         position: 'Project Manager',
// //         salary: 32000
// //     },
// //     Henry: {
// //         fullName: 'Henry Edwardson',
// //         age: 46,
// //         position: 'CEO',
// //         salary: 100000
// //     }
// // };

// // function salaryAfterTax(employeesArr) {
// //     for (let name in employeesArr) {
// //         if (employeesArr.hasOwnProperty(name)) {
// //             const salary = employeesArr[name].salary;
// //             if (salary < 18500) {
// //                 return salary;
// //             }
// //             else if (salary < 40000) {
// //                 return salary - (salary * (19/100));
// //             }
// //             else {
// //                 return salary - (salary * (40/100));
// //             }
// //         }
// //       //employeesArr[name].fullName =  employeesArr[name].salary * (19/100);
// //     }
// // };

// // console.log(Array.prototype.map.call(salaryAfterTax(employees)));


// // let n = 6 // row count

// // let str = "" // empty string which will fill eventually

// // for(let i = 0; i < n; i++){
// //     for(j = 0; j < n; j++){
// //         str += "*"
// //     }
// //     str += "\n"

// // }

// // console.log(str);

// // let n = 7;

// // let string = "";

// // for (let i = 0; i < n; i++) {
// //     for (let j = 0; j < n; j++) {
// //         if (i === 0 || i === n - 1) {
// //             string = string + "*"
// //         }
// //         else {
// //             if (j === 0 || j === n - 1) {
// //                 string += "*";
// //             }
// //             else {
// //                 string += " ";
// //             }
// //         }

// //     }
// //     string += "\n"
// // }

// // console.log(string);
// // const n = 5;
// // string = "";
// // for (let i = 0; i <= n; i++) {
// //     for (let j = 0; j < n - i; j++) {
// //         string += " ";
// //     }
    
// //     for(let k = 0; k < i; k++){
// //         string += "*"
// //     }
// //     string += "\n"
// // }

// // console.log(string);



// const n = 5;
// string = "";
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i; j++) {
//         string += "*";
//     }
    
//     // for(let k = 0; k < i; k++){
//     //     string += "*"
//     // }
//     string += "\n"
// }

// console.log(string);

const drinks = ["Coffee", "Sprite", "Tea", "Pepsi"];
//  const drinks = {
//      relaxing: 'Tea',
//      earlyStart: 'Coffee',
//      sunshineJoy: 'Sprite',
//      quickEnergy: 'Pepsi'
// }

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
// const beverages = Object.values(drinks);
// for (let i = 0; i < beverages.length; i++) {
//     console.log(beverages[i]);
// }

for (const drink of drinks) {
    if (drink === 'Coffee') continue;
    console.log(drink);
}

/* 
* Array method forEach can't use continue nor break keywords
* For Loop works for arrays only
* For-of Loop works for arrays only 
* For-in Loop works for both arrays and objects
* the iterator variable (prop) in a For-of Loop is the actual value of the array at that iteration
* the prop in a For-in Loop is the index of the array at that interation
*/

