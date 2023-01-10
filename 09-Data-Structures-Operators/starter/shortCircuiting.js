// what is short Circuiting (&& and ||) ?
// Ans: In JavaScript short-circuiting, an expression is evaluated from left to right
// until it is confirmed that the result of the remaining conditions is not going to affect
// the already evaluated result.

// Basically we use logical operator to combine boolean values but we can do alot more with AND and OR operator


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  openDelivery: function ({
    firstName,
    address,
    time = '3:30',
    starterIndex = 2,
    mainIndex = 1,
  }) {
    console.log(`
          Hello ${firstName}! Your order ${this.starterMenu[starterIndex]}
          and ${this.mainMenu[mainIndex]} is deliver at ${time} in ${address}
          `);
  },
  orderMaggi: function (ing1, ing2, ing3) {
    console.log(`
          Your delious maggi is ready with these
          ingridients ${ing1},${ing2},${ing3}
  
          `);
  },

  orderPizza: function (ingridients, ...othersIng) {
    console.log(ingridients, othersIng);
    console.log(`
        your ${ingridients} pizza is ready 
        withs others ingridients ${othersIng}
        `);
  },
};
// Example:
//  These are the three property of logical operator
// Use any data type, return any data type ,short-circuiting

//  Case: 1  (OR operator)
//  In the case of || (OR) operator in short circuiting means that if the first value is truthy value it will
// imiidiately retrun the first value.
// so, then the other operand will not even be evaluated javascript will  not even take a look at it

// console.log(3 || 'Raman');
// console.log("" || "Raman");
// console.log(true || false);
// console.log(undefined || null)

// Example 1
// restaurant.numberOfGuest = 23;
const guest1 = restaurant.numberOfGuest ? restaurant.numberOfGuest : 12
// console.log(guest1)
 
// Example 2
const guest2 = restaurant.numberOfGuest || 12;
// console.log(guest2)


// Case: 2 (AND operator) it's opossite to OR operator

//  In the case of && (AND) operator in short circuiting means that if the first value is falsy value it will
// imiidiately retrun the first value.
// so, then the other operand will not even be evaluated javascript will  not even take a look at it

console.log(3 && 'Raman');
console.log("" && "Raman");
console.log(true && false);
console.log(undefined && null)


// Practical Exmple:

if(restaurant.orderPizza){
    restaurant.orderPizza("mashroom","spanich")
}

restaurant.orderPizza && restaurant.orderPizza("paneer")