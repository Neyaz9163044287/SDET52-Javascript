// pop() ----> Removes the last element from an array and returns it. 
//             If the array is empty, undefined is returned and the array is not modified.
var arr = [10, 30, 25, 70, 99]
var arr5=arr.toString()
var aar6=arr5.split("\n")
console.log(aar6);
arr.pop()
console.log(arr);               // output ---> [ 10, 30, 25, 70 ]


// push() ----> Appends new elements to the end of an array, and returns the new length of the array.
arr.push(101);
console.log(arr);               // output ---> [ 10, 30, 25, 70, 101 ]


// shift() ----> Removes the first element from an array and returns it. 
//               If the array is empty, undefined is returned and the array is not modified.
arr.shift()
console.log(arr);               // output ---> [ 30, 25, 70, 101 ]


// unshift() ----> Inserts new elements at the start of an array, and returns the new length of the array.
arr.unshift(15)
console.log(arr);               // output ---> [ 15, 30, 25, 70, 101 ]


var arr1 = [10, 30, 25, 70, 99]
arr1.splice(2,15)
console.log(arr);


console.log("JavaScript".includes("java"));

let a = [1, 2, 3, 4, 5]
let b = [6, 7, 8, 9, 10]
let mix  = a.concat(b)
process.stdout.write(`${mix}`)
console.log();

let c = "Java"
let d = "Script"
let mix1 = c.concat(d)
console.log(mix1);

var strr = "String is Java script"
var mat = strr.match("Java")
console.log(mat);

let acd=strr.slice(-2,-3)
console.log(acd);

let dt = new Date();
console.log(dt.getMonth());
console.log(dt.toDateString());
let n = dt.toDateString().split(" ");   
console.log(n[1]);