// /**
//  * Objects:
//  *      Objects are collection of name-pair values
//  * 
//  * syntax is :
//  *      var myObj = {name: "Jafar"} // name is the key and "Jafar" is the value here
//  */


// // // Traditional way to make objects

// // var myObject = new Object();
// // console.log(myObject);

// // console.log(typeof myObject);

// // myObject['1'] = "Jafar"
// // myObject['2'] = "Huzaifa"
// // myObject['3'] = "Jasmine"

// // myObject['fourthKey'] = "Aladin"

// // console.log(myObject);

// // console.log(myObject['2']);
// // console.log(myObject['fourthKey']);


// // // modern way to make objects

// var myObject = {};
// console.log(myObject);


// myObject = {
//     1: "Jafar",
//     2: "Huzaifa",
//     3: "Jasine",
//     fourthKey: "Aladin"

// }

// myObject['newKeyAdded'] = "newValue"
// console.log(myObject['1']);
// console.log(myObject.fourthKey);

// console.log(myObject);


// var demoObject = {
//     firstName: "Jafar",
//     lastName: "Aulkatheeri",
//     age: 28,
//     isMale: true,
//     MaritialStatus: "Single",
//     phoneNo: {
//         home: 12345,
//         office: 56789,
//         extraKey: {
//             1: "value",
//             2: [1, 2, 3, 4, {
//                 fruit: ["APPLE"]
//             }]
//         }

//     },
//     address: {
//         home: "24 Tondon Way",
//         office: "32 Foxton Avenue"
//     }

// }
// console.log(demoObject.phoneNo.extraKey['2'][4].fruit[0]);

// console.log(demoObject);
// console.log(demoObject.firstName);
// console.log(demoObject.phoneNo.home);


// var donut = {
//     type: "Coconut",
//     glazed: false,
//     sweetness: 7,
//     hasChocolate: false,
//     sayHi: function(){
//         console.log("Hi there i am coconut donut speaking");
//     }

// }

// console.log(donut);

// console.log(console.log("Jafar"));
// console.log(donut.sayHi());

// donut.sayHi()


// var donut2 = {
//     type: "Chocolate",
//     glazed: false,
//     sweetness: 7,
//     hasChocolate: false,
//     sayHi: function(){
//         console.log("Hi there i am Chocolate donut speaking");
//     }

// }


// student = {
//     name: 'David',
//     age: 16,
//     class: '11H',
//     grades:{
//         Maths:{
//             term: {
//                 1: 97,
//                 2: 92,
//                 3: 89,
//                 4: 93
//             } 
//         },
//         Science: {
//             Biology: {
//                 term: {
//                     1: 89,
//                     2: 99,
//                     3: 90,
//                     4: 91
//                 }
//             },
//             Chemistry: {
//                 term: {
//                     1: 56,
//                     2: 74,
//                     3: 71,
//                     4: 59
//                 }
//             },
//             Physics: {
//                 term: {
//                     1: 79,
//                     2: 88,
//                     3: 91,
//                     4: 76
//                 }
//             }
//         },
//         English: {
//             Literature: {
//                 term: {
//                     1: 80,
//                     2: 87,
//                     3: 95,
//                     4: 92
//                 }
//             },
//             Language: {
//                 term: {
//                     1: 78,
//                     2: 69,
//                     3: {
//                         paperA: 96,
//                         paperB: 91
//                     },
//                     4: 83
//                 }
//             }
//         }
//     },
//     attendance: 96,
//     reading_list: ['Essential Mathematics',{
//         Science: {
//             Biology: "Star Biology",
//             Chemistry: "Crazy Chemistry",
//             Physics: "Physics For Everyone"
//         },
//         English: {
//             Literature: "English Literature",
//             Language: "English Language Essentials"
//         }
//     }]
// }
   

// // grade of English Language in term 3 paper B
// // console.log(student.grades.English.Language.term['3'].paperB);

// // // name of Biology Book in reading list
// // console.log(student.reading_list[1].Science.Biology);


// // // Better way to make multiple oibjects usin g a single blueprint

// function DonutConstructor(type, glazed,sweetness, hasChocolate, price){
//     this.donutType = type;
//     this.isGlazed = glazed;
//     this.sweetnessLevel = sweetness
//     this.hasChocolate = hasChocolate
//     this.sayHi = function(){
//         console.log("Hi I am " + this.donutType +  "donut speaking");
//     }
//     this.showStats = function(){
//         console.log("Donot type", this.donutType, "isGlazed", this.isGlazed, "Sweetness Level" + this.sweetnessLevel, "Has Chocolate" + this.hasChocolate);
//     }

// }



// var coconutDonut = new DonutConstructor("Coconut", true, 7, false)
// var hazelDonut = new DonutConstructor("Hazel", true, 7, false)
// var strawberryDonut = new DonutConstructor("Strawberry", true, 7, false)
// var almondDonut = new DonutConstructor("Almond", true, 4, false)


// console.log(coconutDonut);
// console.log(hazelDonut.donutType);
// console.log(strawberryDonut);
// console.log(almondDonut);

// hazelDonut.sayHi();
// coconutDonut.sayHi();
// strawberryDonut.sayHi();

// hazelDonut.showStats();

rocky = {
    title: "Rocky",
    genre : ["drama"],
    year: 1976,
    certificate: 'PG',
    runningTime: 96,
    adultContent: false,
    starring: ["Syvester Stallone","Burgess Meredith", "Talia Shire", "Burt Young"],
    imdbRating: 8.1,
    playMovie: function() {
        console.log('playing movie...');
    },
}

function movieConstructor(title, genre, year, certificate, runningTime, adultContent,starring, imdbRating) {
    this.title = title;
    this.genre = genre;
    this.year = year;
    this.certificate = certificate;
    this.runningTime = runningTime;
    this.adultContent = adultContent;
    this.starring = starring;
    this.imdbRating = imdbRating;

    this.playMovie = function() {
        console.log("playing movie: " + this.title + "...");
    }
}

rambo = new movieConstructor("Rambo", ["Adventure"], 1979, "15", 93, false, ["Sylvester Stallone", "Richard Crenna", "Davis Caruso"], 7.7);
table21 = new movieConstructor("Table 21", ["Adventure","Drama","Thriller"], 2013, "Not Rated", 108, false, [["Paresh Rawal","Rajeev Khandelwal", "Tina Desai"]]);

console.log(rambo.title);
rambo.playMovie();

console.log(table21.title);
table21.playMovie();