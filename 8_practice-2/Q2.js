//demonstrate the use of the switch case statement in the following program:

//take input from user
const prompt=require("prompt-sync")({sigint:true});
let age = prompt("Enter your age: ");

//convert the input age to a number
age = Number.parseInt(age);


console.log(typeof(age))
//write your code here
switch(age){
    case 10:
        console.log("Your age is 10");
        break;
    case 20:
        console.log("Your age is 20");
        break;
    default:
        console.log("Your age is neither 10 nor 20");
}
