/*** Activity 1
 * make a function to test the prime number
 * Note: You have to utilize forin, forEach to solve this
 */

console.log('***** ACTIVITY 1 *****');
function isPrime(n) {
    if (n < 2) return "number must be greater than 1";
    const arr = Array(Math.floor(Math.sqrt(n))).keys(); // iterator object with indices 0 to square root of n, if n=36 => iterator object with indices 0-5
    const numbersArr = Array.from(arr, (x) => x + 2); // array with values 2 to square root of n, if n=36 => [2,3,4,5,6]
    for (const i in numbersArr) {
        if (n % numbersArr[i] === 0) return false;
    }
    return true;
}
console.log(isPrime(79));


/** Activity 2
 * 
 * Write a program that prints the numbers from 1 - 100
 * but for multiples of three print"Fizz" instead of the number and for the multiples of five print "Buzz"
 * 
 */

console.log('***** ACTIVITY 2 *****');
for (let num of Array.from(Array(100).keys())) {
    num += 1;
    num % 5 === 0 ? console.log("Buzz") : num % 3 === 0 ? console.log("Fizz") : console.log(num);
}