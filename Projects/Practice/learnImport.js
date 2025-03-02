//require is used to import modules or builtin packages

const math=require("./math");   //importing from math.js

//  ./ is used to find the file in current directory instead for searching globally
//console.log(math);  //jab anupam export kiye the tab anupam print hua 
//bad me function jab sub export kiye to sub function print hua.[Function: sub]
//jab teeno function ek sath export kiye tab object with key value pairs{ add: [Function: add], mult: [Function: mult], sub: [Function: sub] }

console.log(math.add(2,4));     //prints 6
console.log(math.sub(6,3),math.mult(5,2));  //prints 3 and 10.

console.log(math.add1(8,9));