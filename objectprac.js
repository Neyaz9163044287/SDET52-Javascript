let patientdetails = 
{
    id : 1,
    bedno : 52,
    pname : 'John',
    mob : 1234567890,
    visitDoc : 'Dr. Patel'
};

for (const key in patientdetails) {
    if (Object.hasOwnProperty.call(patientdetails, key)) {
        const element = patientdetails[key];
        console.log(element);
        
    }
}

// console.log(patientdetails);
// console.log(patientdetails.bedno);
// patientdetails.visitDate = '03/03/2024'
// console.log(patientdetails);
// patientdetails.visitDoc = 'Dr. Sweta'
// console.log(patientdetails);