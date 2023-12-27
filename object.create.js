let productDetails = 
{
    pname : 'Mobile',
    price : 17000,
    brand : 'Samsumg',
    cartDetails : function()
    {
        console.log(`Product Available in Cart are as follows ${this.pname} ${this.price} ${this.brand}`);
    }
}
let product2 = Object.create(productDetails)
console.log(product2);              // properties will be there but the values will be not there 
product2.pname = 'Laptop'
product2.price = 47000
product2.brand = 'Dell'

product2.cartDetails = function()
{
    console.log('New Implementation');
}
console.log(product2);
product2.cartDetails()