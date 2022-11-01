// Class and Inheritance

// Works almost same as other language

class Person {
    constructor(fName,lName){
      this.fName = fName
      this.lName = lName
    }
    sayMyName(){
        return this.fName + ' ' + this.lName
    }
}

const p = new Person('Bruce','Wayne');
console.log(p.sayMyName());

class SuperHero extends Person {
    constructor(fName,lName){
        super(fName,lName)
    }
    fight(){
        console.log('Coming')
    }
}

const batman = new SuperHero('Captain','America');
console.log(batman.sayMyName());