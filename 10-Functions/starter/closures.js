//  Closures

// we dont create closures like we create function or new Array
// closures are happen in certain situation automatically
// we need to recozanised those situation

// some defination of closures:

// 1.
// A closures is the closed-over variable environment of the execution context in which a function
// was created even after that execution gone.

// 2.
// A closures gives a function access to all the variables of its parents function  even after that
// parent function has returned The function keeps a reference to its outer Scope which preserve the
// scope chain throughout time

// 3.
// A closures makes sure that a function does'nt lose connection to variables that existed at the
// function bith place

// 4.
// A closures is like a bag pack that a function carries around wherever is goes This bagpack has
// all the variable that were present in the environment where the function was created

const scureBooking = function () {
  let passengerCount = 0;
  let rama = 12;
  return function () {
    passengerCount++;
    rama++;
    console.log(`${passengerCount} passenger`);
    console.log(`${rama} rama`);
  };
};

const booker = scureBooking();
// booker();
// booker();
// booker();
// booker();

// console.dir(booker)

// some more example of closures:

// Example 1.

let f;

const a = function () {
  const s = 23;
};

const h = function () {
  const b = 342;
  f = function () {
    console.log(b * 2);
  };
};
// a()
// f()
// h()
// f()

// Example 2.

const boardPassenger = function (n, wait) {
//   const preGroup = n / 3;
  setTimeout(function () {
    console.log(`we are now boarding all the ${n} passenger`);
    console.log(`there are three group each with ${preGroup} passengers`);
  }, wait * 1000);
  console.log(`will start boarding after in ${wait} second `);
};
const preGroup = 1000;
boardPassenger(180, 2);
