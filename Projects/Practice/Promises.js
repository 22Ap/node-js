//promise in javascript
const myPromise=new Promise(function fun1(resolve, reject){
    //setting timeout
    setTimeout(function f(){
        console.log("Called Function !");
        resolve("Ampam Ji");
        reject("PamPam Ji");
    },3000);
    
});

console.log("My Name is Anupam Kumar");

myPromise
.then(function f2(value){
    console.log("Promise is resolved",value);
}).catch(function f3(value){
    console.log("Promise is rejected",value);
});
console.log("Ki haal chaal veere");


function asyncSquare(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`square of ${n} is ${n*n}`);
            resolve(n*n);
        },3000);
    });
};

let prm1=asyncSquare(5);
console.log("Printing Square");
prm1.then((result)=>{console.log("Promise has returned ans : ",result)});


//promise chaining
function asyncSquare(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Square of ${n}: ${n * n}`);
            resolve({num:n,square:n*n});
        }, 1000);
    });
}

asyncSquare(2)
    .then(({square})=>asyncSquare(square))
    .then(({square})=>asyncSquare(square))
    .then(({num,square})=>console.log(`Finally ${num} ka square hai :`,square))
    .catch(err=>console.log("Error Encountered"));

