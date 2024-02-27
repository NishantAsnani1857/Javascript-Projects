//  VALUE AND VARIABLE
 let country="India"
 let continent="Asia"
 let population=1380000000 

 console.log(country)
 console.log(continent)
 console.log(population)
// DATA TYPE
 let isIsland=false;
 let language;


 console.log(typeof(country))
 console.log(typeof(isIsland))
 console.log(typeof(population))
 console.log(typeof(language))


//  LET,VAR,CONST

language='Hindi'
const Country='India' // Country as const as its value does not change 
const Continent="Asia" // Continent as const as its value does not change
// Continent="Europe"  ERROR TO VALUE CHANGE

// BASIC OPERATOR

let split_population=(population)/2
let new_population=population+1
console.log(new_population)
let finland_pop=6000000

if(finland_pop>population) 
{
    console.log('My country' +country+ ' has less population than finland')
}
else console.log('My country ' +country+  'has more population than finland')

let avg_pop=3300000

if(finland_pop>population) 
{
    console.log('My country ' +country+ ' has less population than average population')
}
else console.log('My country ' +country+ ' has more population than average population')

// Strings and Template Literals
let description=country +" is a country in "+continent+", and its "+population+"   people speak"+" " +language

console.log(description)

// Type Conversion and Coercion

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);


// Equality Operators: == vs. === 
// let numNeighbour=prompt("number of neighbours are ")
// if(numNeighbour===1)
// {
//     console.log("Only one border ")
// }
// else if(numNeighbour>1)
// {
//     console.log("Multiple border ")
// }
// else
// {
//     console.log("No border ")
// }


// Logical Operators 

if(population<500000 && language=="English" && isIsland==false)
{
    console.log(` Sarah can live in  ${country} `);
}
else
{
    console.log(` Sarah cannot live in  ${country} `);
}

// The switch Statement 

switch(language)
{
    case("chinese" || "mandarin"):
    console.log('MOST number of native speakers!' )
    break;

    case("english"):
    console.log('MOST number of native speakers!' )
    break;

    case("spanish"):
    console.log('2nd place in number of native speakers' );
    break;

    case("Hindi"):
    console.log('Number 4' );
    break;

    case("arabic"):
    console.log('5th most spoken language');
    break;

    default:
    console.log('Great language too :D');  
}

// The Conditional (Ternary) Operator

population>3300000?console.log(`${country}'s population is greater than above average`):console.log(`${country}'s population is greater than below average`);