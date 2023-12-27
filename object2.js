console.log("-------------------------------------------------------");
// object ctreation using constructor function
function det(name, age) 
{
    console.log(this);
    this.name = name
    this.age = age    
}
let dt = new det('Zayen' , 22)
console.log(dt);
let dt1 = new det('Jason',13)
console.log(dt1);




console.log("-------------------------------------------------------");
// object creation using class
class details
{
    constructor(name, age)          // constructor is a keyword
    {
        console.log(this);
        this.name = name
        this.age = age
    }
}
let z = new details('Neyaz' , 28)
console.log(z);


console.log("-------za------------------------------------------------");
// using object constructor or object keyword
let x = new Object()
x.name = 'Scott'
x.age = 25
console.log(x);