/**
 * Research on the differences between var let and const on MDN
 * 
 * Give an example for each which completely clarifiies the difference between them
 * 
 * 
 * Research on hoisting in variables and why is it useful?
 * Was is present in the previous versions of JS or only n ES6
 */

//var x =  5;
// VAR - scope-based declaration keyword
// LET - block-based declaration keyword
// CONST - permanant and non-updateable declaration keyword

/* VAR introduces problems when working with different scopes. A variable declared with VAR inside a block will
* overwrite the value of a variable with the same name that lives outside the block. 
* LET allows a variable that is declared inside a block NOT overwrite the value of a variable with the same name
* that lives outside the block. A variable cannot be declared using VAR if a variable with the same has been declared
* using LET in the same scope, (red underline in code). Also, a variable declared using LET with the same name as
* a variable declared using VAR in the same scope will result in a syntax error. 
* This ia because of hoisting.
*/ 

/*
* Hoisting is a JS behaviour that moves all functions and VAR declarations to 
* the top of the script so functions and VAR-declared variable can be accessed
before they are defined. It has always existed in JS.
*/


// // VAR and LET example
// var x = 8;


// if (true) {

//      var x = 9;

//     console.log(x,'inside block');
// }

// console.log(x,'global scope');
// 45
// // HOISTING EXAMPLE
// console.log(x); // undefined
// greeting();


// function greeting() {
//     console.log("Hello, world!");
// }

// var x = 10;


// var name;
// console.log(name);

// name = "Jafar"

// var pet;
console.log(pet);
var pet = "Cat"