function outer() {
  let counter = 0;
  function incrementCounter() {
    return counter++;
  }
  return incrementCounter;
}

const myFunction = outer();
console.log(myFunction()); //0
console.log(myFunction()); //1
console.log(myFunction()); //2


const anotherFunction = outer();
console.log(anotherFunction()); //0
console.log(anotherFunction()); //1
console.log(anotherFunction()); //2

// this is a multiple closure instances mean's when we assign the lexical function into a variable no matter how much variables stores lexical function on each variable the backpack [[scope]] will create and the scope is a hidden property that is running on browser while lexical functions are running then the [[scope]] property stores the references into it and while we execute the inner function with the outer variables then the [[scope]] give us the facility to access the outer functions variables