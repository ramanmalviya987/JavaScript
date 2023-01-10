// What is NUllish Coalescing Operator ?
// Ans: The nullish coalescing operator ( ?? ) is a logical operator that
//  returns its right-hand side operand when its left-hand side operand is null
//   or undefined , and otherwise returns its left-hand side operand.
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
  restaurant.numOfGuest = 20
  const guest1 = restaurant.numOfGuest || 10;
  console.log(guest1)

  // Nullish: null and undefined (NOT 0 or "")
  restaurant.numOfGuest = 0
  const guest2 = restaurant.numOfGuest ?? 10;
  console.log(guest2)


  