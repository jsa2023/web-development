// // /**
// //  * Arrays
// //  * 
// //  *  The are collection of data. Data inside the array can be any datatype
// //  * 
// //  * 
// //  * var myArray = [1, 2, 3] // an array of 3 indexes
// //  */


// // // var myArray = [1, 2, 3, "SOmething", false, true, {donutName: "cocoDonut"}, [1, 2, 3]]

// // // console.log(myArray.length);



// // /**
// //  * 1st way to define an array (Traditional method)
// //  * 
// //  */

// // // var myNamesArray = new Array()
// // // console.log(myNamesArray);
// // // myNamesArray[0] = "Hi"
// // // myNamesArray[1] = "Hi"
// // // myNamesArray[2] = "Hi"

// // // console.log(myNamesArray);


// // /**
// //  * 2nd way to make arrays: modern way
// //  */

// // var myNamesArray = []
// // myNamesArray = ["Alex", "Bob", "Jafar" ]

// // myNamesArray[3] = "New value added"
// // console.log(myNamesArray);


// // myNamesArray[100] = "a great value added"



// // console.log(myNamesArray);
// // console.log(myNamesArray[101]);





// // /**
// //  * JS inbuilt functions
// //  * 
// //  * 
// //  */

// // // //  Function to sort and reverse

// var myNamesArray = ["Timmy", "Sara", "Jafar"]

// // myNamesArray.reverse()


// var reversedArray = myNamesArray.reverse()

// console.log(reversedArray);



// var myNums = [1, 2, 5, 7, 3, 8]

// var sortedArray = myNums.sort()
// console.log(sortedArray); // numbers are sorted in ascending order


// var descendingOrder = sortedArray.reverse()
// console.log(descendingOrder);


// // Concatenation in Arrays

// var array1 = ['john', 'jake']
// var array2 = ['mabry', 'maria']
// var array3 = ['andy', 'anderson']


// // var concatedArray = array1.concat(array2)
// // console.log(concatedArray);


// // var allCOncated = concatedArray.concat(['andy','anderson'])

// // console.log(allCOncated);


// // var simplyConcated = array1.concat(array2, array3)
// // console.log(simplyConcated);

// var mergedArra = array2.concat(array3, array1)

// console.log(mergedArra);

// // // push and pop to add or remove the last index

// mergedArra.push("New value added here")
// console.log(mergedArra);

// mergedArra.pop()
// console.log(mergedArra);



// // // to sort the array

// var numArray = [4, 50, 6, 71, 2, 2, 42, 5, 6, 4]


// numArray.sort()

// console.log(numArray);


// // // slicing function
// /**
//  * Slicing will cut out the portion of the array we want to make an subarray it will start slicing from the index we give it
//  */


// // var slicedArray = mergedArra.slice(2)
// var slicedArray = mergedArra.slice(2, 5) // andry - jhon
// console.log(slicedArray, "slickedArray");

var taskArray = [1, 2, 3, "Jafar Here", "Laptop", "Perfume"]

// // x = taskArray[2];

// // taskArray = taskArray.slice(0,2).concat(taskArray.slice(3))


// // taskArray.reverse()
// // taskArray.pop()
// // taskArray.pop()
// // taskArray.push(1)
// // taskArray.reverse()
console.log(taskArray, "before splicing");



// // splice function


// taskArray.splice(1, 1) // removes 1 item at index 1
// taskArray.splice(2, 1) // removes 1 item at index 2
// 2nd number is for items 1st is for index

// taskArray.splice(2, 2) // removes 2 item at index 2
// taskArray.splice(4, 1, "Macbook") // go to 4th index replace 1 item with macbook
// taskArray.splice(4, 1, "Macbook", "Windows") // add another value
taskArray.splice(4, 2, "Macbook", "Windows") // 



console.log(taskArray, "after splicing");


// // we can also add objects to our array

function DonutConstructor(type, glazed,sweetness, hasChocolate, price){
    this.donutType = type;
    this.isGlazed = glazed;
    this.sweetnessLevel = sweetness
    this.hasChocolate = hasChocolate
    this.sayHi = function(){
        console.log("Hi I am " + this.donutType +  "donut speaking");
    }
    this.showStats = function(){
        console.log("Donot type", this.donutType, "isGlazed", this.isGlazed, "Sweetness Level" + this.sweetnessLevel, "Has Chocolate" + this.hasChocolate);
    }
}

var coconutDonut = new DonutConstructor("Coconut", true, 7, false)
var hazelDonut = new DonutConstructor("Hazel", true, 7, false)
var strawberryDonut = new DonutConstructor("Strawberry", true, 7, false)
var almondDonut = new DonutConstructor("Almond", true, 4, false)

// console.log(coconutDonut);

var donutArray = [coconutDonut, hazelDonut, strawberryDonut, almondDonut];
console.log(donutArray);

var donutLength = donutArray.length
console.log(donutLength);

var selectedDonut = donutArray[2]
console.log(selectedDonut.donutType);

var lastDonut = donutArray[donutLength - 1]
console.log(lastDonut);

selectedDonut.showStats()

// function movieConstructor(title, genre, year, certificate, runningTime, adultContent,starring, imdbRating) {
//     this.title = title;
//     this.genre = genre;
//     this.year = year;
//     this.certificate = certificate;
//     this.runningTime = runningTime;
//     this.adultContent = adultContent;
//     this.starring = starring;
//     this.imdbRating = imdbRating;

//     this.playMovie = function() {
//         console.log("playing movie: " + this.title + "...");
//     }
// }

// rambo = new movieConstructor("Rambo", ["Adventure"], 1979, "15", 93, false, ["Sylvester Stallone", "Richard Crenna", "Davis Caruso"], 7.7);
// table21 = new movieConstructor("Table 21", ["Adventure","Drama","Thriller"], 2013, "Not Rated", 108, false, [["Paresh Rawal","Rajeev Khandelwal", "Tina Desai"]]);


// movieArray = [rambo, table21]
// console.log(object);