// call back function -----------> IN this way we can achieve abstraction

function add(a,b) 
{
    console.log(`The Sum is : ${a+b}`);    
}

function sub(a,b) 
{
    console.log(`The difference is : ${a-b}`);    
}

// higher order function
function perform(data1, data2, callback1, callback2) 
{
    callback1(data1 , data2)
   
    setTimeout(() => {              // it is used to delay the execution of which ever function present in it
        callback2(data1, data2)
    }, 3000); 
}
perform(15, 10, add, sub)