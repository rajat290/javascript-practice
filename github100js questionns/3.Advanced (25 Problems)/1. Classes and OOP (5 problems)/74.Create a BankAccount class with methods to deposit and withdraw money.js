// Create a BankAccount class with methods to deposit and withdraw money.

class BankAccount{
    constructor(balance){
        this.balance = balance;

    }
    deposit(amount){
        this.balance += amount;

    }

    widthdraw(amount){
        if (amount > this.balance){
            console.log('insufficient funds');
        } else {
            this.balance -= amount;
        }
    }
}