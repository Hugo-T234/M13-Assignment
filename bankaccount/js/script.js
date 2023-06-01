// var nameBtn = document.getElementById("button-name");
// var depositBtn = document.getElementById("button-deposit");
// var withdrawlBtn = document.getElementById("button-withdrawal");

// nameBtn.addEventListener("click", changeName);
// depositBtn.addEventListener("click", depositMoney);
// withdrawlBtn.addEventListener("click", withdrawalMoney);

// var bankBalance = 0;

// function changeName(){
//     let userName = prompt("Enter your name");
//     document.getElementById("bankInfo-1").innerHTML = `Name: ${userName}`;
// }

// function depositMoney(){
//     var depositValue = prompt("Enter a deposit value");
//     bankBalance += +depositValue;
//     document.getElementById("bankInfo-2").innerHTML = `Current balance: $${bankBalance}`;
// }

// function withdrawalMoney(){
//     // function depositMoney(){
//     var withdrawalValue = prompt("Enter a deposit value");
//     bankBalance -= +withdrawalValue;
//     document.getElementById("bankInfo-2").innerHTML = `Current balance: $${bankBalance}`;
// }

function bankAccount (ownerName){
    let balance = 0;
    let owner = ownerName;

    return {
        withdrawal: function(withdrawalAmount) {
            if (withdrawalAmount > balance){
                alert('Not enough balance in your account');
            }
            else balance -= +withdrawalAmount;
        },
        deposit: function(depositAmount) {
            if (balance < 0){
                alert('Invalid deposit number');
            }
            else balance += +depositAmount;
        },
        getBalance: function() {
            return balance;
        },
        getOwnerName: function() {
            return owner;
        }
    }
}

var nameBtn = document.getElementById("button-name");
var depositBtn = document.getElementById("button-deposit");
var withdrawlBtn = document.getElementById("button-withdrawal");

let account = new bankAccount;

nameBtn.addEventListener("click", function(){
    let userName = prompt("Enter your name");
    account = bankAccount(userName);
    document.getElementById("bankInfo-1").innerHTML = `Name: ${userName}`;
});
// depositBtn.addEventListener("click", depositMoney);
depositBtn.addEventListener("click", function(){
    var depositValue = prompt("Enter a deposit value");
    account.deposit(depositValue);
    let bal = account.getBalance();
    document.getElementById("bankInfo-2").innerHTML = `Balance: $${bal}`;
});
// withdrawlBtn.addEventListener("click", withdrawalMoney);
withdrawlBtn.addEventListener("click", function(){
    var withdrawalValue = prompt("Enter a deposit value");
    account.withdrawal(withdrawalValue);
    let bal = account.getBalance();
    document.getElementById("bankInfo-2").innerHTML = `Balance: $${bal}`;
});
