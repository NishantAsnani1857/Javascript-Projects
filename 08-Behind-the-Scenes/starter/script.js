'use strict'; //In strict mode function act as bolck scoped


function calcAge(birthYear) {
    console.log(this)
    console.log(firstName)
    const age = 2024 - birthYear
    // console.log(output) Throws reference error cannot access variable of inner scope

    function printAge() {
        let output = `${firstName} live in year 2024 with the age of ${age} years`
        console.log(output)

        if (birthYear >= 1981 && birthYear <= 1996) {
            const firstName = 'Jonas' // Creating new variable with same name
            output = 'NEW OUPTPUT'
            const str = `${firstName} is a millenial`
            console.log(str) //Block scope
            console.log(output)
        }
    }



    // console.log(str) //Throws reference error outside of block

    printAge();
    return age
}
// console.log(age) Throws reference error global cannot aceess variable of calcAge block(function)
let firstName = 'Nishant'
calcAge(1990)
// console.log(this)  //Window object

// let age=birthYear=>{
//     console.log(this) //Doesn't have this of its own so uses it's parent's (i.e here global window).
//     return birthYear
// }
// age(2002)


let jonas = {
    name: 'Jonas',
    year: 2003,
    calcAge: function () {
        console.log(2024 - this.year);

        // const isMillenial=function(){
        //     console.log(this.year>=1981 && this.year<=1996); //this here points to undefined nested function.
        // }
        // isMillenial(); //Regular function call this is undefined.
        // }  //Solving this issue using arrow function. As this in arrow uses parent scope. Use arrow function for nested function in  an object for inner function.

        const isMillenial = () => {
            console.log(this)
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial();
    }
}
jonas.calcAge() //this points jonas because jonas object is calling the calcAge method

// var name="Matilda" Creates field in global window.
const matilda = {
    name: 'Matilda',
    year: '2017',
    greet: function () {
        console.log(`hello my name is ${this.name}`)
    }
}

matilda.calcAge = jonas.calcAge;
matilda.greet()

//arguments keyword only exist in normal functions.



const beforeName={
    name:'Daniel',
    lastName:'S'
}
console.log('BeforenName',beforeName)
let afterName=beforeName //Both reference to same address changes will occur in both expected behaviour would occur in case of variables.
afterName['lastName']='G' 

console.log('AfterName',afterName)
console.log('BeforenName',beforeName)

console.log("Changed the original in copying ")
//Copy objects

const beforeName1={
    name:'Daniel',
    lastName:'S'
}

const afterName1=Object.assign({},beforeName1)
afterName1['lastName']='G' //Only copies first level properties does not copy arrays and methods of original

console.log('BeforenName1',beforeName1)
console.log('AfterName1',afterName1)

console.log("Did not change the original in copying ")