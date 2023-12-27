async function execute()
{
    console.log('***Login to Application***');
    let p = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('***Navigate Home Page***')
            reject('Error')
        }, 2000);
    })
            // 'then' will capture the resolve if it is successfull and 
            // 'catch' will capture the reject if it is rejected
            // 'console.log(msg)' will print the message present inside 'resolve' & 'reject'
    await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})  
    let p1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('***Fetch Page Title***')
            reject('Error')
        }, 3000);
    })

    await p1.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
    console.log('***Logout from Application***');
}
execute()