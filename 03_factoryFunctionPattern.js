const user = function (name, age) {
  return {
    greet() {
      console.log(`hello this is ${name}`);
    },
    getAge() {
      console.log(`Age is ${age}`);
    },
  };
};
