const bankAccountBalance = 124;
const costOfItem = 123;
const tax = 0.5
const canSpendMoney = true;
const hasCreditCard = true;
const creditLimit = 200;
const hasReachedCreditLimit = false;

// // Nesting (this concept comes from the bird nest)
// if(bankAccountBalance >= costOfItem){
//     console.log("Balance Okay! Checking Tax now");
//     if(tax >= 0.5){
//         console.log("Tax amount too high");
//     }
//     if(100 === 100){
//         console.log("Bingo!");
//     }
// }



// // Logical Opertors

/**
 * && AND Operator this verifies that both sides should be true in order for a final true
 * || OR Operator this runs true even if one side statement in true
 */

if(bankAccountBalance >= costOfItem){
    if(canSpendMoney === true){
        console.log("Okay");
    }
}

// // short cut for the code above

if(bankAccountBalance >= costOfItem && canSpendMoney === true){
    console.log("You can purchase this item");
}



/**
 * check bank account balance is greater than or equal to cost of item
 * OR
 * hasCreditCard is true AND creditLimit greater than or equal to cost of item
 * THEN
 * log "you may purchase"
 */

if (bankAccountBalance >= costOfItem || (hasCreditCard === true && creditLimit >= costOfItem)) {
    console.log("you may purchase this");
}


if(bankAccountBalance >= costOfItem || hasCreditCard && creditLimit >= costOfItem){
    console.log("You may purchase");
}


if(!hasReachedCreditLimit){ /// hasReachedCreditLimit === false
    console.log("You can not purchase");
}


// let myName;
// console.log(!myName);
// console.log(Boolean(myName));

// console.log(myName === false);


if((bankAccountBalance >= costOfItem) || (hasCredit && !hasReachedCreditLimit)){
    console.log("Hey");
}