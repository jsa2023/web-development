/**
 * Function placed in another function
 */


// function squareAndMultiply(num1, num2) {
//     // let testLet = "I am a test let" // we can access this let anywhere in the scope of the MAIN function

//     function squarer(x) {
//         let testLet = "I am a test let"
//         console.log(testLet);
//         return x * x
//     }

//     function multiplyBy10(y) {
//         console.log(testLet);

//         return y * 10
//     }

//     return squarer(num1) + multiplyBy10(num2)

// }


// console.log(squareAndMultiply(2, 5)); // 4 + 50 = 54



function squareAndMultiply(num1, num2) {
    function squarer() {
        return num1 * num1
    }

    function multiplyBy10() {

        return num2 * 10
    }

    return squarer() + multiplyBy10()

}


console.log(squareAndMultiply(2, 5)); // 4 + 50 = 54


/**
 * Nested functions form closure and closure is an expression that binds/mix the free variables
 * 
 * VIMP: The inner variables fo nested functions have the access to the variables of the main function in which they are nested but not VICE VERSA
 */


function personFormatter(firstName, lastName, age) {
    function formatNames(arg1, arg2, arg3) {
        return arg1 + " " + arg2 + " " + arg3
    }

    const formattedNames = formatNames(firstName, lastName, age);
    return formattedNames;
}

console.log(personFormatter("Chris", "Jhones", 20));

/**
 * Make a parent function with 2 nested functions inside
 * 
 * first function formats the first and last name and joins them together
 * 
 * second function formats the fullName (first and last combined together) and and combines it with the age in an object
 * 
 * display the result
 */

function namesFunction(fName, lName, age) {


    function namesFormatter(name1, name2) {
        return name1 + " " + name2;
    }

    // function fullName(fName,lName, age) {
    //     return {full_name: namesFormatter(fName,lName), age: age};
    // }

    // return fullName(fName, lName, age);


    function dataFormatter(fullName, num){
        const formatterData = {
            name: fullName,
            age: num
        }
        return formatterData;
    }
    const formattedName = namesFormatter(fName, lName);
    return dataFormatter(formattedName, age)
}

console.log(namesFunction("John", "Doe", 20));

/**
 * Make a function to generate books with 3 properties of a book, perform the task using nested func
 */

function bookGenerator(property1, value1, property2, value2, property3, value3) {
    function propertyNames(p1,p2,p3) {
        return [p1,p2,p3];
    }
    const bookObj = function(arr,v1,v2,v3) {
        return {
            [arr[0]]: v1,
            [arr[1]]: v2,
            [arr[2]]: v3
        };
    }

    return bookObj(propertyNames(property1, property2, property3),value1, value2, value3);
}

console.log(bookGenerator("title","Harry Potter","author","j.k rowling", "genre","fantasy"));


/**
 * book1 = {
 *  name: "....",
 * pages: 600,
 * dateOfPublish: 1999
 * }
 */

