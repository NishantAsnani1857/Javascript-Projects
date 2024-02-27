'use strict';


let hasDriversLicense=false;
const passTest=true;

if(passTest) hasDriversLicense=true;


function logger(name)
{
    console.log(`My name is ${name}`  );
}

logger("John");
logger("John");
logger("Mary");


const age=calcAge(2002) //Function declaration can call function beforehand
function calcAge(birthYear){
    const age= 2024-birthYear
    return age
}


console.log(`The age of person is ${age}`)



const func2=function (birthYear){ //Function expression cannot call beforehand.
    const age= 2024-birthYear
    return age
}

const age2=func2(2003)

console.log(`The age of person is ${age2}`)


const age3= (birthyear)=> 2024-birthyear //Arrow function cannot be called beforehand return is explicit
const calcage=age3(2003)
console.log(calcage)

const obj={
Name:'Nishant',
friends:['A','B','C'],
birthYear:2003,
// calcAge:function() //method but calculates everytime
// {
//     return 2023-this.birthYear
// }
calcAge:function()
{
    this.age=2023-this.birthYear
    return this.age
},
hasDriverLicense:false
}
const sentence=`${obj.Name} has 3 friends but his best friend is ${obj.friends[0]}`
console.log(sentence)
console.log(obj.calcAge())
console.log(obj.age)
const sentence2=`${obj.Name} is a ${obj.age} year old person he ${obj.hasDriverLicense?'has a':'has no'} driver license `
console.log(sentence2)