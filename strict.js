"use strict"
console.log(this);


// this keyword inside a function where the function is inside object
let obj = 
{
    cname : 'neyaz',
    det : function()
    {
        console.log(this);  // here this is pointing to object itself
    }
}
obj.det();


// this keyword in standard function
function addd() 
{
    console.log(this);   // here this is pointing undefined 
}
addd()


// this keyword in arrow function
let d = ()=> 
{
    console.log(this);  // here this is pointing to window object
}
d()