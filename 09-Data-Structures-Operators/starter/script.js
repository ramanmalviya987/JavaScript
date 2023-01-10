// 'use strict';

// // const { concatAST } = require('graphql');

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section

const openingHours = {
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

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

 
  openDilivery({ time, address, starterIndex, mainIndex }) {
    //  console.log(`
    //  Your Order ${this.starterMenu[starterIndex]}
    //  and ${this.mainMenu[mainIndex]} will be recieved
    //  ${address} at ${time} time
    //  `)
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`
    your pasta is making with these three ingridients
    ${ing1}, ${ing2} , ${ing3}
    `);
  },

  orderMaggie(mainIngridients, ...otherIngridients) {
    console.log(mainIngridients);
    console.log(otherIngridients)
  }
};

// console.log(restaurant.openingHours?.mon?.open)

const days = [ 'mon' , 'tue' , 'wed' , 'thus' , 'fri' , 'sat' , 'sun']

for (const day of days) {
  const open = restaurant.openingHours[day]?. open ?? 'closed';
  // console.log(open)
  // console.log(`On ${day} we open at ${open} `)
}

// console.log(restaurant.order?.(0,1) ?? 'Method Does not exit')

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]


// for (const item of menu) console.log(item)

// for (const item of menu.entries()){
//   console.log(`${item[0] + 1}: ${item[1]}`)
// }

// for (const [i ,el] of menu.entries()){
//   console.log(`${i + 1}: ${el}`)
// }

// restaurant.orderMaggie("maggimasla","namak","mirchi","lalmirchi")
// //Destructuring Array

// const num = [2, 3, 4];
// // console.log(num)

// const a = num[0];
// const b = num[1];

// const c = num[2];

// // console.log(a,b,c);

// //destructuring array
// const [q, w, e] = num;
// // console.log(q,w,e)

// let [first, second] = restaurant.categories;
// // console.log(first,second)

// //switching Variable
// [first, second] = [second, first];
// // console.log(first,second)

// const [starter, main] = restaurant.order(0, 2);
// // console.log(starter,main)

// const arr = [1, 2, 3, [4, 5]];
// const [o, ee, r, [f, g]] = arr;
// // console.log(o,f,g,ee,r)

// //Destrucuting object

// const { name, openingHours, categories } = restaurant;
// // console.log(name,openingHours,categories)

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// // console.log(restaurantName,hours,tags)

// const { menu = [], starterMenu: startera = [] } = restaurant;
// // console.log(menu,startera)

// //mutating variables

// let aa = 234;
// let bb = 123;

// const obj = { aa: 2, bb: 3, c: 4 };

// ({ aa, bb } = obj);
// // console.log(aa,bb)

// //Nested object

// const {
//   fri: { open: oo, close: cc },
// } = restaurant.openingHours;
// // console.log(oo,cc)

// //spread operator

// const arrs = [1, 2, 3, 4, 5];

// // const bad = [1,2,3,arrs[0],arrs[1]]

// const newArr = [1, 2, 3, ...arrs];
// // console.log(newArr)
// // console.log(...newArr)

// const newMenu = ['chai', 'Namkeen', ...restaurant.mainMenu];
// // console.log(newMenu)

// const menus = [...restaurant.mainMenu, ...restaurant.starterMenu, ...newMenu];
// // console.log(menus)

// // const ingridients = [
// //   prompt('lets enter ing1'),
// //   prompt('lets enter ing2'),
// //   prompt('lets enter ing3'),
// // ];

// // console.log(ingridients)
// // restaurant.orderPasta(...ingridients)
// // restaurant.openDilivery({
// //   time: '12:34',
// //   address: 'samar park',
// //   starterIndex: 2,
// //   mainIndex: 1,
// // });

// //spread operator are also work  in object

// const newObjs = {foundingYear: 1234, ...restaurant , ownerName: "Raman"}
// // console.log(newObjs)

// const salloCopy = {...restaurant}
// salloCopy.name = "Raman Malviya";

// // console.log(salloCopy.name);
// // console.log(restaurant.name)

// //spread operator because its right side of =

// const ar =  [1,2,4, ...[1,2,3]]
// // console.log(ar)

// //rest pattern because its left side of =

// const [d,s, ...others] = ar;
// // console.log(d,s,others)

//  const [pizza, pasta , ...otherFoods] = [...restaurant.mainMenu , ...restaurant.starterMenu]
// //  console.log(pizza,pasta,otherFoods)

// //  also work in object rest pattern

// const {sat , ...weekdays} = restaurant.openingHours
// // console.log(weekdays)

// // Function

// const add = function(...numbers){
//   let sum = 0;
// for(let i=0; i<numbers.length; i++){
//   sum = sum + numbers[i];
// }
// console.log(sum)
// }

// add(2,3,4)
// add(5,6,7,7,7,8)
// add(9,9,8,7,6,5,)

// const   x = [23,34,45]

// add(...x)

// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// const [player1,player2] = game.players


// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players

// const [gk , ...others] = player1


// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)


// const allPlayer = [...player1,...player2]

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'


// const player1Final = [...player1, 'Thiago', 'Coutinho' , 'Perisic']


// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')


// const {odds: {team1 , x:draw , team2}} = game


// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)


// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`)
// }

// printGoals('Davies', 'Muller', 'Lewandowski','Kimmich')
// printGoals( 'Lewandowski','Kimmich')
// printGoals(...game.scored)

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.

// team1 < team2 && console.log("team1 may be win")
// team2 > team2 && console.log("team2 may b win")




//challenge 2








const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };


  // Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")


for(const [i,player] of game.scored.entries()){
  
  let num = 1;
    // console.log(`Goal ${num+=i} : ${player}`)
 
}

// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)


const clcAvg = function(team1,team2){
  const avg = (team1 * team2) / 2;
  return avg
}

const team1 = game.odds.team1
const team2 = game.odds.team2

// console.log(clcAvg(team1,team2))

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉


// for (const [team,value] of Object.entries(game.odds)) {
//   const teamss = team === 'x' ? "Draw" : `Victory ${game[team]}`
//   console.log(`Odd of ${teamss} ${value}`)
// }

for (const [team,value] in game.odds) {
  const teamss = team === 'x' ? "Draw" : `Victory ${game[team]}`
  // console.log(`Odd of ${teamss} ${value}`)
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }


// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

// console.log(scorers)

// for(const open  of Object.keys(openingHours)) console.log(open)

const properties = Object.keys(openingHours);

for (const day of properties){
  const str = (`we are open ${properties.length} days ${properties}`)
}
// console.log(str)

const orderSet = new Set([1,3,4,5,6,6,6,2,3,])
console.log(orderSet)