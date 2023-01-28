//write a js program to find whether a number is divisible by 2 and 3

//take input from user
const prompt=require("prompt-sync")({sigint:true});
let num = prompt("Enter a number: ");

num = Number.parseInt(num);

//write your code here
if(num%2==0 && num%3==0){
    console.log("The number is divisible by 2 and 3");
}
else{
    console.log("The number is not divisible by 2 and 3");
}

