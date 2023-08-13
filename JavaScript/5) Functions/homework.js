const isGreater = (myList, num) => myList.map(n => n > num);

//console.log(isGreater([3,5,7,8,3,4,6,9,11,2,8]), 5);

const filterList = (myList, num) => myList.filter(n => n % num === 0); 

console.log(filterList([5, 3, 4, 6, 78, 97, 24], 2));