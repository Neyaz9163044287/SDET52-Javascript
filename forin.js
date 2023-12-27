let arr = [10, 50, 20, 30, 40]

// for(let index in arr)
// {
//     console.log(index+"   "+arr[index]);
// }

for(let index in arr)
{
    if (index>=2) 
    {
        console.log("index is index --> "+index+" and value is -->  "+arr[index]);
    }
    
}