// what is logical assignment operators:
// Ans:     Assign the value in the variable if it is currently truthy
const rest1 = {
  restName: 'Cafe',
  numGuest: 0,
};

const rest2 = {
  restName: 'Cafe Terezza',
  location: 'Indore',
};
// OR operator assignment
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// Nullish assignment operator (undefined and null)

// rest1.numGuest ??= 10;
// rest2.numGuest ??=10;

// AND operator
// rest1.location = rest1.location && "<ANONYMOUS>"
// rest2.location = rest2.location && "<ANONYMOUS>"

// rest1.location &&= "<ANONYMOUS>"
// rest2.location &&= "<ANONYMOUS>"


rest1.location ||= "<ANONYMOUS>"
rest2.location ||= "<ANONYMOUS>"

console.log(rest1); 
console.log(rest2);
