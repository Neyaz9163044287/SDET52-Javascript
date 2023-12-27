const amt = 2000
let rate = 2.55
if(amt>0 && amt<=1000){
    rate = 2.55
    
}
else if (amt>1000 && amt<=2500) {
    rate = 3.25
}
    
else if (amt>2500 && amt<=5000) {
   rate = 4.50
}
else{
    rate = 6.00
}

console.log(rate);