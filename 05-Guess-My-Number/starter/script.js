'use strict';
const btn = document.querySelector('.check')
const again = document.querySelector('.again')
const input = document.querySelector('.guess')
const message = document.querySelector('.message')
let Rand_num = Math.floor(Math.random() * 101)
const display_score = document.querySelector('.score')
const display_highscore = document.querySelector('.highscore')
const number = document.querySelector('.number')
let score = 20
let highscore = 0


function displayMessage(Message) {
    message.textContent = Message
}
btn.addEventListener('click', function (e) {
    if (!input.value) {
        alert("Enter your number for guessing")
    }

    else if (input.value == Rand_num) {
        displayMessage('Your guess is correct')
        document.querySelector('body').style.backgroundColor = '#60b347';
        number.textContent = Rand_num;
        if (score > highscore) {
            display_highscore.textContent = score
        }
    }


    else if (input.value != Rand_num) {
        if (score > 1) {
            displayMessage(input.value > Rand_num ? 'Your guess is higher than actual number' : 'Your guess is lower than actual number')
            score--;
            display_score.textContent = score
            console.log(Rand_num)
        }
        else {
            displayMessage("You have lost the game.")
        }

    }


    again.addEventListener('click', function () {
        display_score.textContent = 20
        score = 20
        Rand_num = Math.floor(Math.random() * 101)
        input.value = ""
        number.textContent = "?"
        document.querySelector('body').style.backgroundColor = '#222'
    })

})