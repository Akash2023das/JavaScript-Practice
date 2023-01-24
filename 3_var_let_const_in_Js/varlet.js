console.log("var let and const in Js");

var a=10; //var is globaly scoped 

let b=100; //let is block scoped

const c = 3.14; //const is block scoped

//c=56;//we can't change the constant
console.log("var a = "+a);
console.log("let b = "+b);
console.log("const c = "+c);

{
    let b=300;
    console.log("inside block the value of b = "+b);
}