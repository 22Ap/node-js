//Factory Functions
//it creates objects
function personMaker(name,age,gender){
    const person={
        name:name,
        age:age,
        gender:gender,
        talk(){
            console.log(`Hii My Name is : ${this.name}`);
        }
    }
return person;
}

let p1=personMaker("Anupam",22,"Male");
let p2=personMaker("Anuradha",21,"FeMale");
console.log(`Details : ${p1.name}, ${p1.age}, ${p1.gender}`);
console.log(`Details : ${p2.name}, ${p2.age}, ${p2.gender}`);
p1.talk();
p2.talk();

//each object is having its own copy of functions hence not efficient