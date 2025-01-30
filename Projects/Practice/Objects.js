// Objects 
const Myself = {
    Name:'Anupam Kumar',
    Age:22,
    Uid:'21BCS9660',
    weight:67,
    Height:5.7,
    email:'abc@gmail.com'
};
//console.log(Myself);
//console.log(Myself.Name);

// Loops in JavaScript
// const nums=[1,2,3,'four','five','six'];

//For of Loop, used for arrays
// for(let number of nums)
//     console.log(number);

// For In Loop  used for objects;

// for(let prop in Myself)
//     console.log(prop);      // gives keys

let nums2=Object.values(Myself);    //gives values of keys
let nums3=Object.keys(Myself);      //gives keys 
let nums4=Object.entries(Myself);   //gives both keys and values
console.log(nums2);
console.log(nums3);
console.log(nums4);