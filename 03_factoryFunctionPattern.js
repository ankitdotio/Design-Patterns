function createUser(name, age) {
  return {
    greet() {
      console.log(`hello this is ${name}`);
    },
    getAge() {
      console.log(`Age is ${age}`);
    },
  };
}

user1 = createUser("Ankit", 22);
