//functions in js
//functions are the building blocks of any programming language
//functions are used to perform a particular task

//example

function sayHello() {
    console.log("Hello");
}

//function call
sayHello();


//function with parameters
function sayHello(name) {
    console.log("Hello " + name);
}

//function call
sayHello("John");


//function with return type
function sayHello(name) {
    return "Hello " + name;
}

//function call
let result = sayHello("John");
console.log(result);
