//  what is destructuring of object?
// Ans: JavaScript Object Destructuring is the syntax for extracting values
//  from an object property and assigning them to a variable. The destructuring
//  is also possible for JavaScript Arrays.

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

  openDelivery: function ({firstName,address,time="3:30",starterIndex=2,mainIndex=1}) {
      console.log(`
      Hello ${firstName}! Your order ${this.starterMenu[starterIndex]}
      and ${this.mainMenu[mainIndex]} is deliver at ${time} in ${address}
      `)
  }
};

restaurant.openDelivery({
    firstName: "Mr: Raman Malviya",
    address: "Samar Park Nipania",
    time: "12:30",
    starterIndex: 1,
    mainIndex: 2
})
restaurant.openDelivery({
    firstName: "Mr Sonuda",
    address: "Apolo db city",
    
})
// When we destructuring object to use curly bracket {}

const { name, categories, starterMenu, openingHours } = restaurant;
// console.log(name, categories, starterMenu,openingHours);

// const {name: restautrantName, categories: menu, starterMenu: starter, openingHours: hours} = restaurant;
// console.log(restautrantName,menu,starter,hours)

// Default values;

const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu,starter)

// mutaiting values;

let a = 234;
let b = 345;

const obj = { a: 2, b: 3, c: 4 }; 
// when we start line with curly bracket then javascript required this code block bracket () 
({ a, b } = obj);  
// console.log(a, b);


// Nested object

// Example: 1
const {fri:{open:o,close:c}} = openingHours
// console.log(o,c)

// Example: 2
// const {openingHours:{fri:{open,close}}}= restaurant;
// console.log(open,close)