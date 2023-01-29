//Arrays in js

//Array declaration
let arr = [1,2,3,4,5,6,7,8,9,10];

//Array declaration using new keyword
let arr1 = new Array(1,2,3,4,5,6,7,8,9,10);

//Array declaration using new keyword and length
let arr2 = new Array(10);

//Array declaration using new keyword and length and value
let arr3 = new Array(10, 1);

//Array declaration using new keyword and length and value
let arr4 = new Array(10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


//Print array
console.log(arr);//[1,2,3,4,5,6,7,8,9,10]
console.log(arr1);//[1,2,3,4,5,6,7,8,9,10]
console.log(arr2);//[empty × 10]
console.log(arr3);//[1, empty × 9]
console.log(arr4);//[10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Print array length
console.log(arr.length);//10
console.log(arr1.length);//10
console.log(arr2.length);//10
console.log(arr3.length);//10
console.log(arr4.length);//11



//Loop through array
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
