
//Question 1
function createCounter() {
    let count = 0; 
    return {
        increment: function() {
            count++;
            console.log(`Current count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Current count: ${count}`);
        },
        getCount: function() {
            console.log(`Current count: ${count}`);
        }
    };
}

let  counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 

//----------------------------------------------------------------------------------------------
//Question 2

function createBankAccount() {
    let balance = 0; 

    return {
        deposit(amount) {
            if (amount > 0) balance += amount;
            console.log(`Deposited: ${amount}`);
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrawn: ${amount}`);
            } else {
                console.log('Insufficient balance');
            }
        },
        checkBalance() {
            console.log(`Current balance: ${balance}`);
        }
    };
}

let account = createBankAccount();
account.deposit(500); 
account.withdraw(200); 
account.withdraw(400); 
account.checkBalance(); 




