//use logical operator to find whether the age of a person lies between 10 and 20

//take input from user
const prompt=require("prompt-sync")({sigint:true});
let age = prompt("Enter your age");

//write your code here
if(age>=10 && age<=20){
    console.log("Your age lies between 10 and 20");
}
else{
    console.log("Your age does not lie between 10 and 20");
}
