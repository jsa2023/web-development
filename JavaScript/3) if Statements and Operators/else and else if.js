const bankAccountBalance = 124;
const costOfItem = 123;
const tax = 0.5
const canSpendMoney = true;
const hasCreditCard = true;
const creditLimit = 200;
const hasReachedCreditLimit = false;



if(bankAccountBalance >= costOfItem){
    console.log("congrats you can pay this with card");
}
else if(hasCreditCard && !hasReachedCreditLimit){
    console.log("You can pay with credit card");
}
else{
    console.log("sorry you can not purchase this item!");
}