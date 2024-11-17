// function multiplyBy2(num) {
//     return num*2
// }
// let a = multiplyBy2.asdf = 5;
// console.log(a)
// multiplyBy2(3);
// multiplyBy2.stored;
// multiplyBy2.prototype
// console.log(multiplyBy2)

function userCreator(name, score) {
  this.name = name;
  this.score = score;
}
userCreator.prototype.increment = function () {
  this.score++;
};
userCreator.prototype.login = function () {
  console.log("login");
};
const user1 = new userCreator("eva", 9);
const user2 = new userCreator("eva", 11);
user1.increment();
user2.increment();
console.log(user1,user2);
