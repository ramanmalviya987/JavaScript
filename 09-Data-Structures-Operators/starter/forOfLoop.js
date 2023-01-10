//  What is for of loop ?
// Ans: The for...of loop was introduced in the later versions of JavaScript ES6.
// The for..of loop in JavaScript allows you to iterate over iterable objects 
// (arrays, sets, maps, strings etc).


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

const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
//   usinf for of loop:

// for(const items of menu) console.log(items)

// for(const item of menu.entries()){
//     // console.log(item)
//     console.log(`${item[0]+1}: ${item[1]}`)
// } 
 
for(const [i,el] of menu.entries()){
    // console.log(item)
    console.log(`${i+1}: ${el}`)
} 
