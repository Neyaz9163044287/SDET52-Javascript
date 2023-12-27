function fact(num)
{   
    let fact = 1;
    for(let i=num; i>=1; i--)
    {
        fact = fact*i
    }
    console.log("The factorial of "+num+" is: "+fact);
}

function odd_even(num) 
{
    if(num%2==0)
        {
            console.log("and the number is EVEN");
        }  
        else
        {
            console.log("and the number is ODD");
        }
}

// higher order function
function action(no1, no2,callback1, callback2) 
{
    callback1(no1)
    setTimeout(() => {
        callback2(no2)
    }, 3000);    
}
action(5, 8,fact, odd_even)