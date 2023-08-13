/**
 * Switch Statements
 * They evaluate an expression and then that result is matches with various cases
 */


/**
 * Syntax for switch
 * 
 * 
 * switch(expression to be checked){
        * case value1:
        *      statement to be executed when the result of expression matches value1
        * break;
        * case value2:
        * .............
        * break;
        *  * case value3:
        * .............
        * break;
        *  * case value4:
        * .............
        * break;
        * 
        * default:
        * ...................
        * break;
 * 
 * }
 */


// const myFruit = "Pear";
// if(myFruit === "apple"){
//     console.log("Awesome!!! i love apples");
// }
// else if(myFruit === "Orange"){
//     console.log("Oranges are cool!!!");
// }
// else if(myFruit === "Paer"){
//     console.log("Finally pears!!");
// }
// else {
//     console.log("Not a Fruit X");
// }



// Now we will do the same thing int he siwtch statement
// const myFruit = "Orange";
// switch (myFruit) {
//     case "Apple":
//         console.log("Great apples are fine too");
//         break;
//     case "Orange":
//         console.log("Yayy finally oranges");
//         break;
//     case "Banannas":
//         console.log("Bannas are nice ");
//         break;
//     default:
//         console.log("Wrong Paramater buddy");
//         break;
// }







function fruitLogger(myFruit) {
    switch (myFruit) {
        case "Apple":
            console.log("Great apples are fine too");
            break;
        case "Orange":
            console.log("Yayy finally oranges");
            break;
        case "Banannas":
            console.log("Bannas are nice ");
            break;
        default:
            console.log("Wrong Paramater buddy");
            break;
    }
}

fruitLogger("Banannas")

// function CheckCredentials(username,password) {
//     db_username = 'admin';
//     db_password = '12345';
//     switch(db_username) {
//         case username:
//             if (password === db_password) {
//                 console.log('log in successful');
//             }
//             else {
//                 console.log("incorrect password");
//             }
//         break;
//         default:
//             console.log("wrong username");
//     }
// }




// function CheckCredentials(personObj) {
//     // db_username = 'admin';
//     // db_password = '12345';
//     switch (personObj) {
//         case [name: "Ali", pass: 123]:
//             console.log("User exist in our database");

//             break;
//         default:
//             console.log("wrong username OR Password");
//     }
// }

// CheckCredentials("Ali", "123")




/**
 * Make a program using switch
 * on the condition 0, 1 and 2 display low range
 * 3 4 5 display mid range
 * 6 7 8 9 display high range
 * else input number betweem 0 - 9
 */

function rangeTester(input_number) {
    let value;
    switch (input_number) {
        case 0:
        case 1:
        case 2:
            value = "Low range"
            break;

        case 3:
        case 4:
        case 5:

            value = "Mid range"

            break;
        case 6:
        case 7:
        case 8:
        case 9:
            value = "High range"

            break;
        default:
            console.log("Input range should be between 0-9");
            break;
    }
    console.log("The value evaluated is", value);
}


rangeTester(3)



function donutPicker(flav) {
    switch (flav) {
        case "s":
            return "sprinkles";
        case "c":
            return "chocolate Glazed"
        case "b":
            return "bear claw";
        default:
            return null;
    }
}

console.log(Boolean(null));

function donouts(selection) {
    const selectedDonut = donutPicker(selection);
    if (!selectedDonut) {
        console.log("Incorrect Selection");
    } else {
        console.log("You have selected", selectedDonut);
    }
}


donouts("bsc")


/**
 * Create a function timeAdder that can add two time values together. 
 * Example it should be able to add 25 hours and 3 days together
 * 
 * Make use of if else and switch to solve this problem
 */


function timeAdder(time1,time2) {

}