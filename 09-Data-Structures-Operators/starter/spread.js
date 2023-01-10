//  what is spread operator ?
//  Ans: The JavaScript spread operator ( ... ) allows us to quickly copy
//  all or part of an existing array or object into another array or object.


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
    },
    orderMaggi: function (ing1,ing2,ing3) {
        console.log(`
        Your delious maggi is ready with these
        ingridients ${ing1},${ing2},${ing3}

        `)
    }
  };

const arr = [1,2,3,4]

// const badArr = [23,21,arr[0],arr[1],arr[2],arr[3]]
// console.log(badArr)
// console.log(...arr)
const gudArr = [21,21,...arr]
// console.log(gudArr)

// Important Note:
// The spread operator takes all the elements of from the array
// and it's also doesn't create new variable.

const newMenu = [...restaurant.mainMenu,"maggi"]
// console.log(newMenu)

// copy array

const copyArray = [...restaurant.mainMenu]
// console.log(copyArray)

// Join 2 Array

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu)


// Iterables: array, string , map, sets but NOT object

const str = "Raman";
const letters = [...str,"","M."]
// console.log(letters)


// Real world example
// const orderMaggi = [
//     prompt("Enter your first ing"),
//     prompt("Enter your second ing"),
//     prompt("Enter your third ing")
// ]

// console.log(orderMaggi)

// restaurant.orderMaggi(...orderMaggi)


// Oject

const newRestaurant = {...restaurant, founder:"Raman"}
// console.log(newRestaurant)

const copyRestaurant = {...restaurant}
restaurant.name = "Chai sutta bar"
console.log(copyRestaurant.name)
console.log(restaurant.name)

