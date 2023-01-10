// 1.

// What does Destructuring mean?

// Ans: To destroy the structure of something. To dismantle.

//  what is destructuring in Array?

// Ans: Destructuring means to break down a complex structure into simpler parts.
// With the syntax of destructuring, you can extract smaller fragments from objects and arrays.
// It can be used for assignments and declaration of a variable.
// Destructuring is an efficient way to extract multiple values 
// from data that is stored in arrays or objects. When destructuring an 
// array, we use their positions (or index) in an assignment.


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex,mainIndex) {
        return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]]
    }
}


//Destructuring Array
// Example 1
const  arr = [2,3,4]

// const a = arr[0];
// const b = arr[1];  
// const c = arr[2]; 

const [x,y,z] = arr;
// console.log(x,y,z)
// console.log(a,b,c)
// console.log(arr)

let [first , second] = restaurant.categories;
// console.log(first,second)

// Let switch the varaibles;
// Example 2

// const temp = first;
// first = second;
// second = temp;

// console.log(first,second)

//Now use destructuring

[first,second] = [second,first]
// console.log(first,second)

//Receive 2 return value from a function
// Example 3
const [ starter,main]=(restaurant.order(1,2))
// console.log(starter,main)


// Nested Destructuring
// Example 4
const nestedArr =  [1,2, [3,4]];
// const [a,,b] = nestedArr;
// const [a,w,[b,c]] = nestedArr;

// console.log(a,w,b,c);

// Default values;
// Example 5
const defaultValue = [23,24,25];
const [a=1,s=1,d=1,f=1] = defaultValue;
// console.log(a,s,d,f)


