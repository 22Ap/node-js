class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    talk(){
        console.log(`my Name is ${this.name}`);
    }
};

let p1=new Person("Anupam",22,"Male");
let p2=new Person("Anuradha",22,"Female");