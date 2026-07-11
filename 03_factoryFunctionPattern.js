function createUser(name, id, course) {
  let verified = false;
  return {
    greet() {
      console.log(`hello this is ${name}`);
    },
    getId() {
      console.log(`Id is ${id}`);
    },
    verifyUser() {
      verified = true;
      console.log("USER IS NOW VERIFIED");
    },
    isVerified() {
      console.log(`IS USER VERIFIED : ${verified}`);
    },
  };
}

user1 = createUser("Ankit", 22, "cse");
