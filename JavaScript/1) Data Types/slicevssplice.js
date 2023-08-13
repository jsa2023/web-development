// slice()

var movies = ['Rocky', 'Rambo III', 'Table 21', 'Sin City', 'Training Day', 'From Hell']
// console.log(movies.slice()); // returns array of all elements if no argument provided
// console.log(movies.slice(3)); // returns array of all elements starting from index in parameter provided
// console.log(movies.slice(1,5)); // returns array of elements from index in first parameter to element before element in index given in second parameter 
// console.log(movies.slice(-3,-1)); // neg index can also be used

// splice
//console.log(movies.splice(3)); // removes elements from index given and returns them in an array
//console.log(movies.splice(1,2)); // removes from index 1 two elements
//
//console.log(movies.splice(1,2,"Fight Club")); // removes from index 1 two elements and iserts one element
console.log(movies.splice(7,1,"Jungle Book")); // can add element by giving out of zrange index
console.log(movies);
