//constructors
//new keyword is used to create new instances

function Person(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
}//this function is not creating objects but accesing objects
//above function is an example of constructor
//this keyword is used to refer to the current object

//we can properties the objects of Person class using prototype
Person.prototype.talk=function(){
    console.log(`Hii My Name is : ${this.name}`);
}

//new opeartor is used to create instances of a class/constructor
let p1=new Person("Anupam",22,"Male");
let p2=new Person("Anuradha",21,"FeMale");

console.log(`Details : ${p1.name}, ${p1.age}, ${p1.gender}`);
console.log(`Details : ${p2.name}, ${p2.age}, ${p2.gender}`);
p1.talk();
p2.talk();

p1.sing=function(){
    console.log(`${this.name} is singing a song`);
};

p2.__proto__.dance=function(){      //not recommended
    console.log(`${this.name} is dancing`);
};
p1.dance();


//Since p2.__proto__ points to Person.prototype, 
//adding a method here modifies the actual prototype itself.
//That means all instances (p1, p2, etc.) will inherit 
//the new method—even if we originally wanted it only for p2.
