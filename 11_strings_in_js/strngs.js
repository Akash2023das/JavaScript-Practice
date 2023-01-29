//strings in js

let str="hello world";
console.log(str);// this will print string
console.log(str.length);//this will give length of string
console.log(str[0]);//this will give first character of string
console.log(str[str.length-1]);//this will give last character of string

//string methods
console.log("uppercase = "+ str.toUpperCase());//this will convert string to uppercase
console.log("lowercase = "+ str.toLowerCase());//this will convert string to lowercase
console.log("substring = "+ str.substring(0,5));//this will give substring of string
console.log("substring = "+ str.substring(0,5).toUpperCase());//this will give substring of string in uppercase
console.log("split = "+ str.split(" "));//this will split string into array of strings
//replace method is used to replace a string with another string
console.log("replace = "+ str.replace("world","saurabh"));//this will replace world with saurabh

//remove white spaces from string
let str1="   hello world   ";
console.log("remove white spaces = "+ str1.trim());//this will remove white spaces from string

//concatenation
let str2="hello";
let str3="world";
console.log("concatenation = "+ str2.concat(str3));//this will concatenate two strings




//template literals
let name="saurabh";
let age=20;
console.log(`my name is ${name} and my age is ${age}`);//this will print string with variables

