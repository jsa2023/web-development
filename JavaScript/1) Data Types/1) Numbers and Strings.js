// Comment 

// // ES6 (Echma Script 6)


// console.log(10) // Number
// console.log("10") // String

// console.log(typeof 10)
// console.log(typeof "10")

// JavaScript can solve any mathematical expression!

// console.log(10 + 9)


// DMAS rule will be followed here
// // highest level of prcedence is for the brackets ()
// console.log(10 + (2 / 5 - 3 * 7) + 2)

// console.log(10 % 3)
// console.log(10 / 2)



// // JS Math object


// console.log(Math)

// console.log(Math.random()) // logs the random number the number will be all the time between 0 and 1
// console.log(Math.PI) // logs the value of PI

// console.log(Math.floor(1.6547)) // drops the decimal points and keeps the whole number
// console.log(Math.floor(2.45))
// console.log(Math.floor(0.34343))

// console.log(Math.round(4.46)) // it rounds the number using the general significany figure rules


// // a code to generate a number between 0 and 10

console.log(Math.floor(Math.random() * 10))

  
//  0 1 2 3 4 5 6 7 8 9
console.log("21" + 4)  // 214 because of concatenation
console.log(21 + 4) // 25

console.log(parseInt("21") + 4) // 25

console.log(parseInt("abc") + 2) // NaN (Not a Number)

console.log(parseInt("21abc") + 4) // 25
console.log(parseInt("abc21") + 4) //  NaN
console.log(parseInt("ab21c") + 4) //  NaN

console.log(+"21" + 4) // if we add a + sign before the string it gets converted to a number

// // Strings
// // unicode sequence of the strings

console.log("Hello Jafar")
console.log("Hello Jafar".length)
console.log("Hello Jafar".charAt(4)) // o because index starts from 0

console.log("Hello" + " " + "Jafar" + "!")


console.log("This string should be in uppercase".toUpperCase());

console.log('THIS SHOULD BE IN LOWER CASE'.toLowerCase().toUpperCase().toLowerCase());

