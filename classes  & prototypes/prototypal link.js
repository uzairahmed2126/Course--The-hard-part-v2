function createUser(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}
const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("logged in");
  },
};
const user1 = createUser("will", 0);
const user2 = createUser("tim", 1);
user1.increment();
user2.increment();
console.log(user1, user2);
