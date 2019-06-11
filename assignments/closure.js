// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const pet = 'cat';
function whichPet(){
  return pet;
}
console.log(whichPet());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return function() {
    return ++count;
  }
}
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  let countObj = {
    increment: function(){
      return ++ count;
    },
    decrement: function(){
      return count - 1;
    }
  }
  return countObj;
};

const counterThree = counterFactory();
console.log(counterThree.increment());
console.log(counterThree.increment());
console.log(counterThree.increment());
console.log(counterThree.decrement());