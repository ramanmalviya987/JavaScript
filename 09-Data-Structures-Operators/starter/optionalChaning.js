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

//   Optional chaning

  
//   console.log(restaurant.openingHours.mon?.open)

const days = ['mon','tue','wed','thu','fri','sat','sun'];

for(const day of days){
    // console.log(day)
    const open = (restaurant.openingHours[day]?.open ?? "closed")
    // console.log(`On ${day}, we open at ${open}`)
}

// Methods:

// Example 1
// console.log(restaurant.order?.(0,1) ?? "Method does not exit")

// Example 2
// console.log(restaurant.orders?.(0,1) ?? "Method does not exit")


// Array optional chaning
const user = []
// const user = [
//     {
//         name: "Raman",
//         email: "raman@gmail.com"
//     }
// ]
console.log(user[0]?.name ?? "user array empty")

// same example without optional channing

// if(user.length > 0 ){
//     console.log(user[0].name)
// }else{
//     console.log("user array empty")
// }