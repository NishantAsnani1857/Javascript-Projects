// 1
let markMass=95;
let markHeight=1.88;

let johnMass=85;
let johnHeight=1.76;

let markHigherBMI=false

let markBMI= markMass/markHeight**2;
let johnBMI= johnMass/johnHeight**2;

if(markBMI>johnBMI)
{
    markHigherBMI=true
}
else
{
    markHigherBMI=false
}

console.log(markBMI)
console.log(johnBMI)
console.log(markHigherBMI)

// 2

if(markHigherBMI)
{
    console.log("Mark's BMI "+markBMI+ " is higher than John's!"+johnBMI)
}
else
{
    console.log("John's BMI "+johnBMI+ " is higher than Mark's!"+markBMI)
}

// 3
let dolphin_score_1=96
let dolphin_score_2=108
let dolphin_score_3=89

let dolphin_average=(dolphin_score_1+dolphin_score_2+dolphin_score_3)/3;

let koala_score_1=88
let koala_score_2=91
let koala_score_3=110

let koala_average=(koala_score_1+koala_score_2+koala_score_3)/3;

if(dolphin_average>koala_average)
{
    console.log('dolphin team wins ')
}
else if(dolphin_average<koala_average)
{
    console.log('koala team wins ')
}
else
{
    console.log(' Draw ')
}

let bonus_dolphin_score_1=97
let bonus_dolphin_score_2=112
let bonus_dolphin_score_3=101

let bonus_dolphin_average=(bonus_dolphin_score_1+bonus_dolphin_score_2+bonus_dolphin_score_3)/3;

let bonus_koala_score_1=109
let bonus_koala_score_2=95
let bonus_koala_score_3=123

let bonus_koala_average=(bonus_koala_score_1+bonus_koala_score_2+bonus_koala_score_3)/3;

if(bonus_dolphin_average>bonus_koala_average && bonus_dolphin_average>100)
{
    console.log('dolphin team wins for bonus')
}
else if(bonus_dolphin_average<bonus_koala_average && bonus_koala_average>100)
{
    console.log('koala team wins for bonus')
}
else
{
    console.log(' Draw ')
}

//4

let bill_amount=275
let tip=0

if(bill_amount>=50 && bill_amount<=300)
{
    tip=tip+(0.15) * (bill_amount);
}
else
{
    tip=tip+(0.20) * (bill_amount);
}

let final_bill=bill_amount+tip;
console.log(`The bill amount was ${bill_amount} and tip was ${tip} with a final bill of ${final_bill}`);