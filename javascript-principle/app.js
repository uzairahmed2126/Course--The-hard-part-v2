function first() {
  second();
  console.log("first function");
}
function second() {
  third();
  console.log("second function");
}
function third() {
  console.log("third nb function");
}
first();
