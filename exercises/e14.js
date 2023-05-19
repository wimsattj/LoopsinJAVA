
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let money = [];
  let sumDeposits = 0;
  let sumWithdrawals = 0;
  let wrong = false;
  for (let i = 0; i < array.length ; i++ ) {
     sumDeposits = 0;
     sumWithdrawals = 0;
      if (array[i].hasOwnProperty('deposits')) {
        for (let j = 0 ; j < array[i].deposits.length ; j++){
            sumDeposits = sumDeposits + array[i].deposits[j] ;
        }
      }
      if (array[i].hasOwnProperty('withdrawals')) {
        for (let j = 0 ; j < array[i].withdrawals.length ; j++){
            sumWithdrawals = sumWithdrawals + array[i].withdrawals[j] ;
        }
      }
      if (array[i].hasOwnProperty('balance')) {
        if (array[i].balance == (sumDeposits - sumWithdrawals)) {
          console.log('correct balance');
        } else {money.push(array[i])}
      }
      
    }
  return (money);
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
