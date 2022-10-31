// Having access of properties and methods of another function

function Person(fName,lName){
    this.fName = fName;
    this.lName = lName;
}

Person.prototype.getFullName= function(){
    return this.fName+' ' +this.lName
}

const person1 = new Person('Bruce','Wayne');

function SuperHero(fName,lName){
    Person.call(this,fName,lName);  // this way we can inherit the properties of another function
    this.isSuperHero = true;
}
SuperHero.prototype.constructor=SuperHero; // This will ensure the Super Hero is an individual function.
SuperHero.prototype = Object.create(Person.prototype);

const batman = new SuperHero('Alice','Wayne');

console.log(batman.getFullName());


