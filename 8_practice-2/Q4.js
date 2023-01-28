//check whether a number is prime or not

//take input from user
const prompt=require("prompt-sync")({sigint:true});
let num = prompt("Enter a number: ");

num = Number.parseInt(num);

//write your code here
let flag = 0;
for(let i=2;i<num;i++){
    if(num%i==0){
        flag=1;
        break;
    }
}
if(flag==0){
    console.log("The number is prime");
}
else{
    console.log("The number is not prime");
}