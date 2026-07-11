//REVEALING MODULE PATTERN
//reveals the function with name

const Bank = (() => {
  //private
  let balance;
  //public
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
    set: setBalance,
    check: getBalance,
    withdraw: withdraw,
  };
})();
