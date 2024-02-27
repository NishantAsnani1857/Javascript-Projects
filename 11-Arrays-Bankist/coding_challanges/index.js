// 1

const julia_data = [3, 5, 2, 12, 7]
const kate_data = [4, 1, 15, 8, 3]


let checkDogs = function (dogsJulia, dogsKate) {
    const julia_updated = dogsJulia.slice(1, 4)
    console.log(julia_data);
    console.log(julia_updated)

    const arr = [...julia_updated, ...dogsKate]

    arr.forEach((dog, i) => {
        if (dog >= 3) {
            console.log(`Dog ${i + 1} is an adult`);
        }
        else {
            console.log(`Dog ${i + 1} is an puppy`);
        }
    });
}

checkDogs(julia_data, kate_data)


// 2


const calcAverageHumanAge = (dogAges) => {
    const humanAges = dogAges.map((ages) => {
        if (ages <= 2) {
            return ages = 2 * ages
        }

        else {
            return ages = 16 + ages * 4
        }

    })
    return humanAges;
}

const filterAge = (humanAges) => {
    const filterAges = humanAges.filter((ages) => {
        if (ages < 18) {
            return
        }
        else {
            return ages
        }
    })
    return filterAges
}

const average = (filterAges) => {
    const temp = filterAges.reduce((acc, curr) => {
        return acc + curr
    })
    return temp / filterAges.length
}




let humanAge = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
let filteredAge = filterAge(humanAge)
let averagedAges = average(filteredAge)
console.log(humanAge);
console.log(filteredAge);
console.log(averagedAges)

let humanAge1 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
let filteredAge1 = filterAge(humanAge1)
let averagedAges1 = average(filteredAge1)
console.log(humanAge1);
console.log(filteredAge1);
console.log(averagedAges1)



// 3

const calcAverageHumanAge3 = (dogAges) => dogAges.map((ages) => ages < 2 ? ages = 2 * ages : ages = 16 + ages * 4)

console.log(calcAverageHumanAge3([5, 2, 4, 1, 15, 8, 3]));


// 4

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];


dogs.map((dog) => {
    dog.recommendedFood = (dog.weight ** 0.75) * 28
})


const sarah_dog = dogs.find((dog) => dog.owners.includes('Sarah'))
console.log(sarah_dog);
console.log(`Sarah's dog is eating too ${sarah_dog.curFood > sarah_dog.recommendedFood ? 'much' : 'little'} food`);


let ownersEatTooMuch = dogs.filter((dog) => dog.curFood > dog.recommendedFood).map((own) => own.owners)

console.log(ownersEatTooMuch);
let stringownersEatTooMuch = ownersEatTooMuch.flatMap((own) => {
    console.log(`${own}'s dog eat too much food`);
})

let ownersEatTooLittle = dogs.filter((dog) => dog.curFood < dog.recommendedFood).map((own) => own.owners)

console.log(ownersEatTooLittle);
let stringownersEatTooLittle = ownersEatTooLittle.flatMap((own) => {
    console.log(`${own}'s dog eat too little food`);
})

const exactFood = dogs.some((dog) => dog.recommendedFood == dog.curFood)
console.log(`Does any dog take exact required food ${exactFood}`)

const okayFood = dogs.some((dog) => 0.9 * dog.recommendedFood < dog.curFood && 1.1 * dog.recommendedFood > dog.curFood)
console.log(`Does any dog take okay food ${okayFood}`)

const dogOkay = dogs.filter((dog) => 0.9 * dog.recommendedFood < dog.curFood && 1.1 * dog.recommendedFood > dog.curFood)

console.log(`Dogs having okay amount of food `, dogOkay);


const sortedDogs = dogs.slice().map((ele) => ele.recommendedFood).sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
})
console.log(`The sorted array on basis of recommended food ${sortedDogs}`);