// /**
//  * The variables declared in the function can not be used outside the scope of that function
//  * but the variable can be used in that function again
//  * 
//  * if we give value to the same variable again we must not use VAR with it again we must directly give it the value
//  */





// /**
//  * 
//  * Now we will use that code again but we will use let, let will not allow us to use the variable defined in the scope of the function 
//  * 
//  * it can be used again any where outside the scope of the function and it is a way better approach
//  * 
//  * LET behaves more stricker than the regular old VAR
//  * 
//  * LET is a block scoped variable
//  * 
//  */


// function sayHi() {
//     let shouldSayHi = true;
//     let reallySayHi = true;
//     let myName;


//     if (shouldSayHi === true) {
//          let myName = "Huzaifa";
//         console.log("Hi", myName);
//         if (reallySayHi === true) {
//              let myName = "Jafar";
//             console.log("Hi", myName);
//         }
//     } else {
//         console.log("false");
//     }
// }

// sayHi()

// // let myBag;
// // myBag = 'redOne'
// // console.log(myBag);


// let myIcecream = "Coconut";
// // myIcecream = "Tuty Fruity"; // redeclaration is allowed
// // let myIcecream = "Bananna"; // reinitialization is not allowed


// console.log(myIcecream);

// /**
//  * CONST
//  * 
//  * Constant is very similar to LET
//  * CONST can not be re-assigned 
//  * CONST can not be re-declared
//  * 
//  * CONST is more stricker than var and let
//  */

// const myID = 1;
// // myID = 2; // Re declaration is not allowed
// // const myID = 3 // re initialization is not allowed


// console.log(myID);


// // const myArray = [4, 5, 6]
// // const myArray2 = ["4", 5, 6]

// // console.log(myArray === myArray2);

// // console.log(myArray[0] === myArray2[0]);



// // adding inside constants

const numbArray = [4, 5, 6];
// const numbArray = [4, 5, 6, 7]; // X
numbArray.push(7)
console.log(numbArray);


// const myStr = "Jafar";
// console.log(myStr[0]);
// // myStr[0] = "z";
// // myStr.charAt(0) = "z"; // X
// console.log(myStr.charAt(0));
// console.log(myStr);


// const myObj = {
//     name: "Jafar"
// }
// const myObj = {
//     name: "Jafar",
//     age: "20"
// }

// myObj['age'] = 28;

// console.log(myObj);
// myObj.name = "Huzaifa"

// console.log(myObj, "after");



function sayHi(){
    const myName = "Jafar";
    if(true){
        const myName = "Sheikh";
        console.log(myName);
    }
    console.log(myName);
}


sayHi()