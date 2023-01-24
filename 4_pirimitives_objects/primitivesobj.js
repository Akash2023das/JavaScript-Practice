//Data types in JavaScript

//String
let name = "Akash Ruidas";
console.log("My name is " + name);
console.log("Data type name is " + (typeof name)); //typeof is used to find the data type of a variable

//Numbers
let marks = 34;
console.log("marks = " + marks);
console.log("Data type of marks is " + (typeof marks));

//Boolean
let isDriver = true;
console.log("isDriver = " + isDriver)
console.log("Data type of isDriver is " + (typeof isDriver));

//Null
let nullVar = null;
console.log("nullVar = " + nullVar);
console.log("Data type of nullVar is " + (typeof nullVar)); //typeof null is object

//Undefined
let undef = undefined;
console.log("undef = " + undef);
console.log("Data type of undef is " + (typeof undef));

//BigInt
let bigInt = 1234567890123456789012345678901234567890n;
console.log("bigInt = " + bigInt);
console.log("Data type of bigInt is " + (typeof bigInt));

//Symbol
let sym1 = Symbol('This is a Nice Symbol');
console.log(sym1);


//objects in js
let marks2 = {
    akash: 34,
    ruidas: 78,
    harry: 99.99
}
console.log("Details of All the Objects elements :" )
console.log(marks2);

//get a value from an object
console.log("marks of akash= "+ marks2.akash);
console.log("marks of harry= "+ marks2['harry']);

