//Udacity: Intro to Javascript
//https://classroom.udacity.com/courses/ud803

/* 
Quiz: Bank Accounts 

Using the given object:

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};

add a printAccountSummary() method that returns the following account message:

Welcome!
Your balance is currently $1000 and your interest rate is 1%.
*/

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary: function() {
    return `Welcome!
Your balance is currently $${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%.`;
  }
};

console.log(savingsAccount.printAccountSummary());

/*
Quiz: Facebook Friends

Create an object called facebookProfile. The object should have 3 properties:

    your name
    the number of friends you have, and
    an array of messages you've posted (as strings)

The object should also have 4 methods:

    postMessage(message) - adds a new message string to the array
    deleteMessage(index) - removes the message corresponding to the index provided
    addFriend() - increases the friend count by 1
    removeFriend() - decreases the friend count by 1
*/

let facebookProfile = {
  name: "UC",
  friends: 5,
  messages: ["hello", "hi", "bye"],
  postMessage: function(message) {
    let currentMessages = facebookProfile.messages;
    return currentMessages.push(message);
  },
  deleteMessage: function(index) {
    let currentMessages = facebookProfile.messages;
    return currentMessages.splice(index, 1);
  },
  addFriend: function() {
    let addFriends = facebookProfile.friends + 1;
    facebookProfile.friends = addFriends;
    return addFriends;
  },
  removeFriend: function() {
    let removeFriends = facebookProfile.friends - 1;
    facebookProfile.friends = removeFriends;
    return removeFriends;
  }
};

/* 
Quiz: Donuts Revisited

Here is an array of donut objects.

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

Use the forEach() method to loop over the array and print out the following donut summaries using console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each
*/

donuts.forEach(donutSummary);

function donutSummary(item) {
  let summary = `${item.type} donuts cost $${item.cost} each`;
  console.log(summary);
}
