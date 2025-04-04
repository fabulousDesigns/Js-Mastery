class BankAccount {
  #balance;
  constructor(bal) {
    this.#balance = bal;
  }
  deposit(amount) {
    return (this.#balance += amount);
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient funds!");
      return;
    }
    this.#balance -= amount;
  }
  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount(500);
myAccount.deposit(200);
myAccount.withdraw(750);
console.log(myAccount.getBalance()); // 600
