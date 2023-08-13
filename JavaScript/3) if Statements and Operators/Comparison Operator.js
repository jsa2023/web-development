/**
 * Comparison Operator
 * 
 * > greater then
 * >= greater then or equal to
 * < less then
 * <= less then ore equal to
 * ===
 * ==
 * ! NOT Sign
 * != Not equal to
 */

const bankAccountBalance = 124;
const costOfItem = 123;
const Tax = 0.5

/**
 * check if the bank account balance is greater then or equal to cost of item including the taxc
 * if the statement is true log you can purchase this item
 */

if (bankAccountBalance >= (costOfItem + Tax)) {
    console.log("you can purchase this item");
}


console.log(bankAccountBalance !== costOfItem);

if(bankAccountBalance !== costOfItem){
    console.log("Oops you can not purchase this item!");
}