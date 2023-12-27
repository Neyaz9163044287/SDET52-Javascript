// Standard Creation
let persondetails =
{
    pname : 'abc',
    age : 30,
    phnno : [9163044287, 1234567890],
    location : 'bangalore',
    det : function () {
        console.log('Person details' + " " + this.pname + " " + this.location);        
    },
    spousedet: {
        sname : "xyz",
        age : 26
    }
}
console.log(persondetails);
console.log(persondetails.phnno[0]);
persondetails.det()
console.log(persondetails.spousedet.age);
//adding a property
persondetails.newprop = 'aaaaa'
//delete a property
delete persondetails.location
//modify
persondetails.age = 28
console.log(persondetails);