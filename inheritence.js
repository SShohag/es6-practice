///First step
class Child{
    constructor(name){
        this.name = name;
    }
}
const Child1 = new Child('shohag');
console.log(Child1);

//second Step
class Parent{
    constructor(){
        this.fatherName = 'Bahadur Ali';
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.Name = name;
    }
    getFullName(){
        return `${this.fatherName} ${this.Name}`;
    }
}
const Child1 = new Child('shohag');
console.log(Child1.getFullName());