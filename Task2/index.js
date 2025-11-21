// index.js
export const sum = (a, b) => {
  return a + b + 1;
};

const unusedVariable = 10; // Added to trigger 'unused-vars' error

console.log(sum(1, 2));
console.log(myUndefinedVariable); // Triggers 'no-undef'