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

class Student extends Person{
    constructor(name,age,gender,rollNo,branch){
        super(name,age,gender); //parent class constructor being called
        this.rollNo=rollNo;
        this.branch=branch;
    }
}

class Teacher extends Person{
    constructor(name,age,gender,eid,dept,salary){
        super(name,age,gender); //parent class constructor being called
        this.eid=eid;
        this.dept=dept;
        this.salary=salary;
    }
}

let t1=new Teacher("Aakash",28,"Male",101,"CSE",50000);
let s1=new Student("Anupam",22,"Male",9660,"CSE");
