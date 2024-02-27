// 1

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


let players1 = []
let players2 = []


players1 = [...game.players[0]]
players2 = [...game.players[1]]
const BayernMunich_gk = game.players[0][0]
let fieldPlayers1 = []

for (i = 1; i < game.players[0].length; i++) {
    fieldPlayers1.push(game.players[0][i])
}
console.log(BayernMunich_gk)
console.log(fieldPlayers1)


const BorrussiaDortmundh_gk = game.players[1][0]
let fieldPlayers2 = []

for (i = 1; i < game.players[1].length; i++) {
    fieldPlayers2.push(game.players[1][i])
}
console.log(BorrussiaDortmundh_gk)
console.log(fieldPlayers2)

let allplayers = [...game.players[0], ...game.players[1]]
console.log(allplayers);

let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final);

const team1 = game.odds.team1
const draw = game.odds.draw
const team2 = game.odds.team2

console.log(team1)

let printGoals = function (...playerNames) {
    console.log(playerNames)
    console.log(`${playerNames.length} goals were scored `)
}

printGoals(...game.scored)

game.team1 < game.team2 && console.log('Team 1 wins the game ');
game.team1 > game.team2 && console.log('Team 2 wins the game ');



// 2

for (i = 0; i < game.scored.length; i++) {
    console.log(`Goal-${i + 1} - ${game.scored[i]}`)
}


const oddAverage = function () {
    let sum = 0;

    for (i = 0; i < Object.values(game.odds).length; i++) {
        sum += Object.values(game.odds)[i];
    }
    avg=sum/Object.values(game.odds).length
    console.log(`The average of odds is ${avg}`);
}

oddAverage()


console.log(`Odd of victory ${game.team1}: ${Object.values(game.odds)[0]}`);
console.log(`Odd of draw: ${Object.values(game.odds)[1]}`);
console.log(`Odd of victory ${game.team2}: ${Object.values(game.odds)[2]}`);


// 3

const gameEvents=new Map([
[17, '⚽ GOAL'],
 [36, '� Substitution'],
 [47, '⚽ GOAL'],
 [61, '� Substitution'],
 [64, '� Yellow card'],
 [69, '� Red card'],
 [70, '� Substitution'],
 [72, '� Substitution'],
 [76, '⚽ GOAL'],
 [80, '⚽ GOAL'],
 [92, '� Yellow card'],
])

let events=new Set();

for([key,values] of gameEvents)
{
events.add(values)
}
console.log(events)
gameEvents.delete(64)
console.log(gameEvents)

const actualTime=[...gameEvents.keys()].pop()

console.log(`An event happened, on average, every ${actualTime/gameEvents.size} minutes`)

for([key,values] of gameEvents)
{
    if(key<=45)
    {
        console.log(`[First Half] ${key}: ${values} `)
    }

    else
    {
        console.log(`[Second Half] ${key}: ${values} `)
    }
}

document.body.append(document.createElement('textarea'))

document.body.append(document.createElement('button'));

let ele=document.querySelector('textarea')

let btn=document.querySelector('button')




btn.addEventListener('click',(e)=>{
  e.preventDefault();
  let text=document.querySelector('textarea').value
  console.log(text)
  let rows=text.split('\n')
  console.log(rows)
  for(let row of rows)
  {
    const [first,second]=row.toLowerCase().trim().split('_')
    let output=first+second[0].toUpperCase()+second.slice(1)
    console.log(output)
  }
})