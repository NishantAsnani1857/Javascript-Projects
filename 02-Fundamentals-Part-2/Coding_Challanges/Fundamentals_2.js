
// 1

let dolphin_score_1 = 85
let dolphin_score_2 = 54
let dolphin_score_3 = 41



let koala_score_1 = 23
let koala_score_2 = 34
let koala_score_3 = 27




const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3
}

const dolphin_avg = calcAverage(dolphin_score_1, dolphin_score_2, dolphin_score_3)
const koala_avg = calcAverage(koala_score_1, koala_score_2, koala_score_3)



checkWinner(dolphin_avg, koala_avg, 'dolphin', 'koala')
function checkWinner(avg1, avg2, name1, name2) {
    if (avg1 >= 2 * avg2) {
        console.log(`${name1} wins with scoreboard ${avg1} vs ${avg2}`)
    }

    else if (2 * avg1 <= avg2) {
        console.log(`${name2} wins with scoreboard ${avg2} vs ${avg1}`)
    }

    else {
        console.log(`No one wins`)
    }
}



// 2

function calcTip(amount) {
    if (amount >= 50 && amount <= 300) {
        return amount * 0.15
    }

    else {
        return amount * 0.20
    }
}



const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills, tips)


// 3


let obj1 = {
    Name: "Mark",
    Weight: 78,
    Height: 1.69,
    calcBMI: function () {
        this.BMI = this.Weight / this.Height ** 2
        return this.BMI
    }
}

let obj2 = {
    Name: "John",
    Weight: 92,
    Height: 1.95,
    calcBMI: function () {
        this.BMI = this.Weight / this.Height ** 2
        return this.BMI
    }
}
console.log(obj1.calcBMI())
console.log(obj2.calcBMI())
if (obj1.BMI > obj2.BMI) {
    console.log(`${obj1.Name}'s BMI (${obj1.BMI}) is higher than ${obj2.Name}'s BMI (${obj2.BMI}) `)
}

else if (obj1.BMI < obj2.BMI) {
    console.log(`${obj2.Name}'s BMI (${obj2.BMI}) is higher than ${obj1.Name}'s BMI (${obj1.BMI}) `)
}

// 4

const Bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const Tips = []
const Totals = []

function CalcTips(amount) 
{
        if (amount >= 50 && amount <= 300) {
            return amount * 0.15
        }

        else {
            return amount * 0.20
        }
}

for(let i=0;i<Bills.length;i++)
{
    Tips[i]=CalcTips(Bills[i])
    Totals[i]=Tips[i]+Bills[i]
}

console.log(Tips)
console.log(Totals)

