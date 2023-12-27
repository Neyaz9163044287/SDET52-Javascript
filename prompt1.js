import Prompt from "prompt-sync";
const prom = Prompt()

let value = prom("enter the value : ")
console.log(value);

let fact = 1;
    for(let i=value; i>=1; i--)
    {
        fact = fact*i
    }
    console.log("The factorial of "+value+" is: "+fact);