function createFunction() {
  function multiplyBy2(num) {
    return 2 * num;
  }
  return multiplyBy2;
}
const generatedFunc = createFunction();
const result = generatedFunc(3); //6

// createFuction stores in global memory and multiplyBy2 function stores in local memory and the generatedFunc store the definition and the result stores the final result after it the execution context will delete and the next calling the whole execution will be again run.