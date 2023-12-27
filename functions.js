// arguments array --> used only in standard function but not be used in arrow function (drawback)
// default parameter
// template literals

console.log("=========================================================");

function details(name, phoneno)                 // arguments array
{
    console.log("person details are: " + " " + name + " " + phoneno);
    console.log(arguments);    
}
details('Neyaz', 1234567890);

console.log("=========================================================");

function details(name, phoneno)                 // arguments array
{
    console.log("person details are: " + " " + name + " " + phoneno);
    console.log(arguments);    
}
details('Neyaz', undefined);        // pass the parameter as undefined

console.log("=========================================================");

function contact(name, phoneno = 3216549879) 
{
    console.log("person details are: " + " " + name + " " + phoneno);
    console.log(arguments);
}
contact('Zayen')

console.log("=========================================================");

function address(name, phoneno = 9876543210, location) 
{
     console.log("person details are:" + " " + name + " " + phoneno + " " + location);
     console.log(`Person details are: ${name} ${phoneno} ${location}`)           // template literals
     console.log(arguments);   
}
address('Gopinath',this.phoneno,'Bangalore')

console.log("=========================================================");