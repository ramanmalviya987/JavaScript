 
 
    const openingHours={
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
      }
 
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours,
    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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

const days = ['mon','tue','wed','thu','fri','sat','sun'];

// Looping Objects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}


// // const properties = Object.keys(openingHours)
// // console.log(properties)

// // for(const day in restaurant.openingHours){
// //     // console.log(day)
// // }
// let openStr = (`we are open at  ${Object.keys(openingHours).length} days`)

// for (const day in openingHours){
//     openStr=openStr + ` ${day}`
// }
// console.log(openStr)