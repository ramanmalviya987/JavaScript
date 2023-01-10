// What is Map ?
// The Map object holds key-value pairs and remembers the original
//  insertion order of the keys. Any value (both objects and primitive values)
//   may be used as either a key or a value.


const rest = new Map();
// console.log(rest)
// set is method to insert any thing in map
rest.set('name','lapinoz');
rest.set(1,'chai Sutta Bar');
rest.set(2,'Guru Krapa')

rest 
.set('categories',['lapinoz','chai sutta bar','Guru krapa','KFC'])
.set('open' ,11)
.set('close',23)
.set(true,'We are open')
.set(false,'We are closed')

// console.log(rest)
// console.log(rest.get(1))
// console.log(rest.get(true))

const time = 12;

// console.log(rest.get(time>rest.get('open') && time<rest.get("close")))

// Methods:

// console.log(rest.has('categories'))
// console.log(rest.delete(2))
// console.log(rest.size)


const arr = [2,3]
// rest.set(document.querySelector('h1',"Heading"))
// console.log(rest)
// console.log(rest.set(arr,"RamaMohan"))
// console.log(rest.get(arr))

// Maps: Iteration
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

const question =  new Map([
    ['question',"what is the best Programming language in the world"],
    [1,'C'],
    [2,'Python'],
    [3,'JavaScript'],
    ['correct' , 3],
    [true, "correct"],
    [false, 'try Again']
])

// console.log(question)

// convert Object to Map;

// console.log(Object.entries(restaurant.openingHours))

const hourMap = new Map(Object.entries(restaurant.openingHours))
// console.log(hourMap)


// Quick App

console.log(question.get('question'));
for(const [key,value] of question){
    if(typeof key === 'number'){
        console.log(`Answer:${key} ${value}`)
    }
}
const answer = 3;
// const answer = Number(prompt('Your Answer'));
// console.log(answer)
console.log(question.get(question.get('correct')===answer)
)

// convert map to array

const arrs = [...question]
console.log(arrs)