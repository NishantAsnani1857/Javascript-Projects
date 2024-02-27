'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



const displayMovements = function (movements,sort=false) {
  containerMovements.innerHTML = ""
  const movs=sort?movements.slice().sort((a,b)=>{
    if(a>b) return 1;  // return >0 (Switch) for ascending
    if(a<b) return -1; // return <0 (Keep)
  }):movements

  movs.forEach((mov, i) => {


    const type = mov > 0 ? 'deposit' : 'withdrawal'
    let html = `<div class="movements__row">
  <div class="movements__type movements__type--${type}">
  ${i + 1} 
  ${type}</div>
  <div class="movements__value"> ${mov} €</div>
</div>`

    containerMovements.insertAdjacentHTML('afterbegin', html)
  })


}




const createUsername =
  function (accs) {
    accs.forEach((acc) => {
      acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map((ele) => { return ele[0] })
        .join('')
    })

  }

createUsername(accounts)

const calcPrintBalance = ((acc) => {
  const balance = acc.movements.reduce((acc, curr) => Number(acc) + Number(curr), 0)
  acc.balance=balance;
  labelBalance.textContent = `${acc.balance} EUR`
  return balance;
})


const calcDisplaySummary = function (account) {
  const income = account.movements.filter((val) => val > 0).reduce((acc, curr) => acc + curr, 0)


  const out = account.movements.filter((val) => val < 0).reduce((acc, curr) => acc + curr, 0)

  const intrest = account.movements.filter((val) => val > 0).map((dep) => dep * account.interestRate / 100).filter((dep) => dep > 1).reduce((acc, curr) => acc + curr, 0)

  labelSumIn.textContent = `${income} €`
  labelSumOut.textContent = `${Math.abs(out)} €`

  labelSumInterest.textContent = `${Math.floor(intrest)} €`
}

const updateUI=function(acc)
{
  calcPrintBalance(acc)
  calcDisplaySummary(acc)
  displayMovements(acc.movements)
}

let currAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currAccount = accounts.find(acc => acc.username == inputLoginUsername.value);
  if (inputLoginUsername.value == "" || inputLoginPin.value == "") {
    alert("Enter username and password")
  }
  else {
    if (!currAccount) {
      alert('User doest not exist')
      inputLoginUsername.value = inputLoginPin.value = ""

    }

    else if (currAccount.username == inputLoginUsername.value && currAccount.pin == inputLoginPin.value) {
      containerApp.style.opacity=100
      labelWelcome.textContent=`Welcome , ${currAccount.owner}`
      inputLoginUsername.value = inputLoginPin.value = ""
      updateUI(currAccount)
    }
    else {
      inputLoginUsername.value = inputLoginPin.value = ""
      alert('Incorrect username or password ')
    }
  }

})


btnTransfer.addEventListener('click',(e)=>{
  e.preventDefault();
  if (inputTransferTo.value == "" || inputTransferAmount.value == "") {
    alert("Enter values in both fields")
  }
  else if(currAccount.username==inputTransferTo.value){
    alert('Self transfer is not allowed')
  }
  else if(!currAccount){
    alert('User does not exist')
  }
  else{
    const reciver=accounts.find(acc => acc.username === inputTransferTo.value)
    let balance=currAccount.balance;
    if(balance<inputTransferAmount.value){
      alert('Insufficient balance')
    }
    else{
      currAccount.movements.push(-inputTransferAmount.value)
      reciver.movements.push(inputTransferAmount.value)
      updateUI(currAccount)
    }
    
  }
  inputTransferAmount.value=inputTransferTo.value=""
  
})

btnClose.addEventListener('click',(e)=>{
e.preventDefault();
if(inputCloseUsername.value==currAccount.username && inputClosePin.value==currAccount.pin)
{
  const index=accounts.findIndex(acc=>acc.username==currAccount.username)
  inputClosePin.value=inputCloseUsername.value=""
  accounts.splice(index,1)
  console.log("Correct user");
  containerApp.style.opacity=0;
  
}
})

btnLoan.addEventListener('click',(e)=>{
  e.preventDefault()
  const amount=Number(inputLoanAmount.value)
  if(amount>0 && currAccount.movements.some(mov=>mov>=amount*0.1))
  {
    currAccount.movements.push(amount)
    updateUI(currAccount);
  }
  inputLoanAmount.value=""
  
})


let sorted=false;
btnSort.addEventListener('click',(e)=>{
  e.preventDefault();
  displayMovements(currAccount.movements,!sorted)
  sorted= !sorted
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



/////////////////////////////////////////////////
// let arr=['a','b','c','d','e']

// console.log(arr.slice(2)) //returns new array does not change original array
// console.log(arr.slice(2,4))
// console.log(arr.slice(1,-1))


// console.log(arr.splice(2)); // Changes original array
// console.log(arr.splice(-1))

// const arr2=['f','g','h','i','j']

// console.log(arr2.reverse()); //also mutates original array

// const letters=arr.concat(arr2)
// console.log(letters);  //concatination


// // at method for indexing

// console.log(arr2.at(3))
// console.log('jonas'.at(-1))





// console.log('-------FOROF LOOP---------');
// for(let value of movements)
//   {
//     if(value<0)
//       {
//         console.log(`You have withdrawn ${Math.abs(value)} rupees`);
//       }

//       else
//         {
//           console.log(`You have deposited ${value} rupees`);
//         }
//   }

// console.log('-------FOREACH METHOD---------'); //Cannot use continue and break...
//   movements.forEach(function(value,index,array){
//     if(value<0)
//       {
//         console.log(`You have withdrawn ${Math.abs(value)} rupees (Transaction number ${index})`);
//       }

//       else
//         {
//           console.log(`You have deposited ${value} rupees (Transaction number ${index})`);
//         }
//   })

// currencies.forEach((value,index,map)=>{
//   console.log(`${index}, ${value}`)
// })

// const currenciesUNique=new Set(['USD','EUR','USD','GBP'])
// currenciesUNique.forEach((value,index)=>{
//   console.log(`${index}, ${value}`); //Set does not have mapping
// })

const euroToUsd = 1.1

const movementsUsd = movements.map(mov => mov * euroToUsd)


const withdrawls = movements.filter((ele) => {
  return ele < 0
})




const balance = movements.reduce((acc, curr, i, arr) => {
  return acc + curr
}, 0)

console.log(`The total balance in euro is ${balance} `);

const totalDepositsUsd = movements.filter(mov => mov > 0).map(mov => mov * euroToUsd).reduce((acc, curr) => acc + curr, 0) //Array method chaining only when previous returns array.

console.log(`Total number of deposits in USD are ${Math.floor(totalDepositsUsd)}`);


console.log(movements.find(mov => mov < 0)); //find just like filter but only returns first one matching the condition.


// console.log(accounts);

// const account=accounts.find(acc=>acc.owner==='Jessica Davis')
// console.log(account);