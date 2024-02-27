'use strict';
let turn=0;
const player0=document.querySelector('.player--0')
const player1=document.querySelector('.player--1')
const displayScore_0=document.querySelector('#score--0')
const displayScore_1=document.querySelector('#score--1')
const display_currentScore_0=document.querySelector('#current--0')
const display_currentScore_1=document.querySelector('#current--1')

const roll_dice=document.querySelector('.btn--roll')
const hold_btn=document.querySelector('.btn--hold')
const new_btn=document.querySelector('.btn--new')
const dice_img=document.querySelector('.dice')






let currentScore=0


let Score=0



function switchPlayer()
{
    currentScore=0
    document.querySelector(`#current--${turn}`).textContent=0
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
    turn=1-turn; 
}

function newGame()
{
    currentScore=0
    displayScore_0.textContent=0
    displayScore_1.textContent=0
    display_currentScore_0.textContent=0
    display_currentScore_1.textContent=0
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
}

new_btn.addEventListener('click',newGame)


hold_btn.addEventListener('click',(e)=>{
    let result=Number(document.querySelector(`#score--${turn}`).textContent)
    if(displayScore_0.textContent>=20)
    {
        document.querySelector(`#name--0`).textContent=`Player 0 Wins`
    }
    else if(displayScore_1.textContent>=20)
    {
        document.querySelector(`#name--1`).textContent=`Player 1 Wins`
    }
    result+=currentScore
    document.querySelector(`#score--${turn}`).textContent=result
    document.querySelector(`#current--${turn}`).textContent=0
    currentScore=0
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
    turn=1-turn ;
    
})

roll_dice.addEventListener('click',()=>{
let dice_num=Math.floor(Math.random() *(7-1) + 1);
dice_img.src=`dice-${dice_num}.png`
if(dice_num!=1)
{
    // display_currentScore_0.textContent=currentScore0
    if(displayScore_0.textContent>=20)
    {
        document.querySelector(`#name--0`).textContent=`Player 0 Wins`
    }
    else if(displayScore_1.textContent>=20)
    {
        document.querySelector(`#name--1`).textContent=`Player 1 Wins`
    }
    currentScore+=dice_num;
    document.querySelector(`#current--${turn}`).textContent=currentScore
}
else
{
    switchPlayer();
    // currentScore=0
    // Score=0
    // display_currentScore_0.textContent=currentScore
    // displayScore_0.textContent=Score
}
// switch(dice_num)
// {
//     case(1):
//     {

//         dice_img.src='dice-1.png'
//         currentScore0=0
//         Score0=0
//         display_currentScore_0.textContent=currentScore0
//         displayScore_0.textContent=Score0
//         break;
//     }
//     case(2):
//     {

//         dice_img.src='dice-2.png'
//         currentScore0+=dice_num;
//         display_currentScore_0.textContent=currentScore0
//         break;
//     }
//     case(3):
//     {
//         dice_img.src='dice-3.png'
//         currentScore0+=dice_num;
//         display_currentScore_0.textContent=currentScore0
//         break;
//     }
//     case(4):
//     {
//         dice_img.src='dice-4.png'
//         currentScore0+=dice_num;
//         display_currentScore_0.textContent=currentScore0
//         break;
//     }
//     case(5):
//     {
//         dice_img.src='dice-5.png'
//         currentScore0+=dice_num;
//         display_currentScore_0.textContent=currentScore0
//         break;
//     }
//     case(6):
//     {
//         dice_img.src='dice-6.png'
//         currentScore0+=dice_num;
//         display_currentScore_0.textContent=currentScore0
//         break;
//     }
// }
})