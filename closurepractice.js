function outer()
{
    var b = 10;
    function inner() 
    {
        var a = 20;
        console.log(a+b);    
    }
    return inner;
}
let print = outer();
print();