// what is Rest Pattern ?
// Ans: The rest operator (…) allows us to call a function with any number
//  of arguments and then access those excess arguments as an array.
//  The rest operator also allows us in destructuring array or objects.

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
      console.log(ingridients,othersIng);
      console.log(`
      your ${ingridients} pizza is ready 
      withs others ingridients ${othersIng}
      `)
  }
};

// Destructuring:

// Spread operator bcz on Right side of =
const arr = [1, 2, ...[2, 3]];
// console.log(arr);

// REST Pattern bec on Left side of =

const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a,b,others)


// object
 const {sat:weekend, ...weekdays} = restaurant.openingHours
//  console.log(weekdays)
//  console.log(weekend)

// Function:


const add  = function(...numbers){
// console.log(numbers)
let sum = 0;
for(let i = 0; i<numbers.length; i++) {
    sum = sum+numbers[i]
}
// console.log(sum)
}


// add(2,3)
// add(3,4,54)
// add(34,45,56)

// const x = [23,23,3,34,45,56,56]

// add(...x)

// restaurant.orderPizza("masrooms","vegitables","cheese","tamato")

