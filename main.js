//iffe

const Bank = (() => {
  let balance;
  function setBalance(val) {
    balance = val;
  }
  function getBalance() {
    return balance;
  }
  function withdraw(val) {
    if (val < balance) {
      console.log("insufficent amount");
      return "insufficent amount";
    }
    balance -= val;
    return val;
  }

  return {
    balance,
    setBalance,
    getBalance,
    withdraw,
  };
})();
