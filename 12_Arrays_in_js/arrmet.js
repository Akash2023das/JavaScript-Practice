//Array methods

//1. Array.isArray()
//Check if array
console.log(Array.isArray(arr));//true

//2. Array.from()
//Convert string to array
let str = "Hello World";
console.log(Array.from(str));//["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

//3. Array.of()
//Convert string to array
let str1 = "Hello World";
console.log(Array.of(str1));//["Hello World"]

//4. Array.prototype.concat()
//Concatenate two arrays
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
console.log(arr1.concat(arr2));//[1,2,3,4,5,6,7,8,9,10]

//5. Array.prototype.copyWithin()
//Copy array elements within the array
let arr3 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr3.copyWithin(0, 3));//[4,5,6,7,8,9,10,8,9,10]

//6. Array.prototype.entries()
//Return a key/value pair Array Iteration Object
let arr4 = [1,2,3,4,5,6,7,8,9,10];
let x = arr4.entries();
console.log(x.next().value);//[0, 1]
console.log(x.next().value);//[1, 2]
console.log(x.next().value);//[2, 3]
console.log(x.next().value);//[3, 4]
console.log(x.next().value);//[4, 5]
console.log(x.next().value);//[5, 6]
console.log(x.next().value);//[6, 7]
console.log(x.next().value);//[7, 8]
console.log(x.next().value);//[8, 9]
console.log(x.next().value);//[9, 10]
console.log(x.next().value);//undefined

//7. Array.prototype.every()
//Check if all array values pass a test
let arr5 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr5.every(x => x < 11));//true

//8. Array.prototype.fill()
//Fill the elements in an array with a static value
let arr6 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr6.fill(0));//[0,0,0,0,0,0,0,0,0,0]

//9. Array.prototype.filter()
//Create a new array with array elements that passes a test
let arr7 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr7.filter(x => x > 5));//[6,7,8,9,10]

//10. Array.prototype.find()
//Return the value of the first element in an array that pass a test
let arr8 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr8.find(x => x > 5));//6

//11. Array.prototype.findIndex()
//Return the index of the first element in an array that pass a test
let arr9 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr9.findIndex(x => x > 5));//5

//12. Array.prototype.forEach()
//Call a function for each array element
let arr10 = [1,2,3,4,5,6,7,8,9,10];
arr10.forEach(x => console.log(x));//1,2,3,4,5,6,7,8,9,10

//13. Array.prototype.includes()
//Check if an array contains the specified element
let arr11 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr11.includes(5));//true

//14. Array.prototype.indexOf()
//Search the array for an element and returns its position
let arr12 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr12.indexOf(5));//4

//15. Array.prototype.join()
//Convert an array to a string
let arr13 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr13.join(" "));//1 2 3 4 5 6 7 8 9 10

//16. Array.prototype.keys()
//Return a Array Iteration Object, containing the keys of the original array
let arr14 = [1,2,3,4,5,6,7,8,9,10];
let y = arr14.keys();
console.log(y.next().value);//0
console.log(y.next().value);//1
console.log(y.next().value);//2
console.log(y.next().value);//3
console.log(y.next().value);//4

//17. Array.prototype.lastIndexOf()
//Search the array for an element, starting at the end, and returns its position
let arr15 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr15.lastIndexOf(5));//4

//18. Array.prototype.map()
//Create a new array with the result of calling a function for each array element
let arr16 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr16.map(x => x * 2));//[2,4,6,8,10,12,14,16,18,20]

//19. Array.prototype.pop()
//Remove the last element of an array, and returns that element
let arr17 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr17.pop());//10

//20. Array.prototype.push()
//Add new elements to the end of an array, and returns the new length
let arr18 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr18.push(11));//11

//21. Array.prototype.reduce()
//Reduce the values of an array to a single value (going left-to-right)
let arr19 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr19.reduce((x, y) => x + y));//55

//22. Array.prototype.reduceRight()
//Reduce the values of an array to a single value (going right-to-left)
let arr20 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr20.reduceRight((x, y) => x + y));//55

//23. Array.prototype.reverse()
//Reverse the order of the elements in an array
let arr21 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr21.reverse());//[10,9,8,7,6,5,4,3,2,1]

//24. Array.prototype.shift()
//Remove the first element of an array, and returns that element
let arr22 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr22.shift());//1

//25. Array.prototype.slice()
//Select a part of an array, and returns the new array
let arr23 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr23.slice(2, 5));//[3,4,5]

//26. Array.prototype.some()
//Check if any of the array values pass a test
let arr24 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr24.some(x => x > 5));//true

//27. Array.prototype.sort()
//Sort the elements of an array
let arr25 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr25.sort());//[1,10,2,3,4,5,6,7,8,9]

//28. Array.prototype.splice()
//Add/Remove elements from an array
let arr26 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr26.splice(2, 0, 11, 12));//[]
console.log(arr26);//[1,2,11,12,3,4,5,6,7,8,9,10]

//29. Array.prototype.unshift()
//Add new elements to the beginning of an array, and returns the new length
let arr27 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr27.unshift(11));//11

//30. Array.prototype.values()
//Return a Array Iteration Object, containing the values of the original array
let arr28 = [1,2,3,4,5,6,7,8,9,10];
let z = arr28.values();
console.log(z.next().value);//1
console.log(z.next().value);//2
console.log(z.next().value);//3
console.log(z.next().value);//4

//31. Array.prototype[@@iterator]()
//Return a Array Iteration Object, containing the values of the original array
let arr29 = [1,2,3,4,5,6,7,8,9,10];
let a = arr29[Symbol.iterator]();
console.log(a.next().value);//1
console.log(a.next().value);//2
console.log(a.next().value);//3
console.log(a.next().value);//4

//32. Array.prototype[@@unscopables]()
//Return an object, showing which properties are excluded from the with environment bindings of the array
let arr30 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr30[Symbol.unscopables]);//{copyWithin: true, entries: true, fill: true, find: true, findIndex: true, includes: true, keys: true, values: true}

