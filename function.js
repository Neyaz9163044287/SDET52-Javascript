// standard function
function demo_add(a, b) {
    console.log(a+b);
}
demo_add(5,10)

console.log("-------------------");

// function expression
let demo = function (a, b) {
  return a+"----"+b; 
} 
//let z =demo(5,6)
console.log(demo(5,6));

console.log("-------------------");
// invocable function
(function sample(a, b, c) {
    let d = a+b+c
    console.log(d);
})
(5,10,20)
