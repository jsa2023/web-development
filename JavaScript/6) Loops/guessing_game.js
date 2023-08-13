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

const MIN = 1;
const MAX = 10;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN

let guesses = 0 // for storing the number of guesses
let hintMessage = "" // for storing the hint
let number = 0;
let correct = false;
let hint = secretNumber % 2;
do{
    // to get the input from the user
    input = prompt(`Please enter a number between ${MIN} and ${MAX}. If you would like a himt type 'hint'`);

    // get the integer
    number = parseInt(input);

    if (input === 'hint') {
        if (hint === 0) {
            hintMessage = 'the number is an even number';
        }
        else {
            hintMessage = 'the number is an odd number';
        }
        window.alert(hintMessage);
    } else {
           // increase the number of guesses
            guesses++;
    }
 
    // check input number with the secret number
    // provide hint if needed
    if (number === secretNumber) {
        correct = true;
        window.alert(`Correct! Took ${guesses} guesses`);
        console.log("Correct!");
    }

}while(correct === false);