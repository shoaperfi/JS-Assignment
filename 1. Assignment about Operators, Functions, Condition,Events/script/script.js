"Use Strict";
function purchase(){
    let amount = document.getElementById('amount').value;
    let remainingAmount;
    if(amount >=80 && amount < 100){
        remainingAmount = amount - 80;
        alert('After buying grocery for Rs 80, amount left  is ' + remainingAmount)
    } else if(amount>= 20 && amount < 80){
        remainingAmount = amount - 20;
        alert('After buying icecream for Rs 20, the amount left is ' + remainingAmount)
    } else if(amount>= 100){
        remainingAmount = amount - 100;
        alert('After buying grocery for Rs 80 and icecream for Rs 20, the amount left is ' + remainingAmount)
    } else if (amount == ''){
        alert('Enter Amount')
    } else {
        alert('Insufficient Amount')
    }
}