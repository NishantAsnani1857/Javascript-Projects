'use strict';
//constructor function
const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear

    // this.calcAge=(function (){
    //     console.log(2024-this.birthYear);

    // }) Bad practice as for each instance fucntion is executed.
}

//Prototypes
Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear);

}

const Nishant = new Person('Nishant', 2003)
const Matilda = new Person('Matilda', 2005)
console.log(Nishant);
console.log(Matilda);

// 1. New {} is created
// 2. function is called, this={}
// 3. {} linked to prototype
// 4. function automatically return {}




Matilda.calcAge()
Nishant.calcAge()
console.log(Nishant.__proto__); //Prototype of Nishant

console.log(Nishant.__proto__ === Person.prototype); //Prototype of instantiation is equal to prototype of class.

Person.prototype.species = 'Homo Sapiens' //Can set property on class using prototype (will be under proto for instantiations)

console.log(Nishant.hasOwnProperty('species')); //only to check fields on object not methods,fields in prototype. (Protoype can be used to define both methods and fields on class, that instantiations(objects) would inherit but fields would not be visible under ownProperty)


const arr = [1, 2, 3, 4, , 6, 7, 4, 5]

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)]
} // User defined method on array

console.log(arr.unique());


//ES6 classes
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }

    calcAge(){
        console.log(2024-this.birthYear); //Inside prototype
    }
    greet(){
        console.log(`HI ${this.firstName}`);
    }
}
const jess = new PersonCl('jess', 1995)
console.log(jess.__proto__);
jess.greet()

// Object.create

// Least used for creation of classes and object uses prototype inheritance.
const PersonProto={
    calcAge () {
        console.log(`Age of ${this.firstName} is ${2024 - this.birthYear}`);
    
    },

        init(firstName,birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
    }
}

const steven=Object.create(PersonProto)
// steven.name='Steven'
// steven.birthYear=1992
steven.init('steven',1992)
steven.calcAge()