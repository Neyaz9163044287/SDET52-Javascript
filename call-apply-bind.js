
let package1 = 
{
    pack_name : 'Ooty',
    fromdate : 'Jan 01 2024',
    todate : 'Jan 05 2024',
    cost : 5500,    
}

let packageDetails = function(male , female)
    {
        console.log(`Package Details are : FROM ${this.pack_name} ${this.fromdate} TO ${this.todate} IS ${this.cost} OF ${male+female} PERSON`);
    }

let package2 = 
{
    pack_name : 'Goa',
    fromdate : 'Jan 07 2024',
    todate : 'Jan 09 2024',
    cost : 6000,  
}

//  example for 'call' method

//package1.packageDetails.call(package2);
packageDetails.call(package2, 4, 3);

// example for 'apply' method
packageDetails.apply(package1,[5,5]);

// example for 'bind' method
let d = packageDetails.bind(package2)
console.log(d);
d(6,5);