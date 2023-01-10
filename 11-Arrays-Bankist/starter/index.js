// console.log([1,2,3,4,5,6,7,])
// console.log(new Array(1,2,3,4,5,6,7))


// const x = new Array(7)
// console.log(x)
// x.fill(3,2,5)
// console.log(x)


// More Ways of Creating and Filling Arrays
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // Emprty arrays + fill method
// const x = new Array(7);
// console.log(x);
// // console.log(x.map(() => 5));
// x.fill(1, 3, 5);
// x.fill(1);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });
// */


// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)

// Hints:
// §
// Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them 😉
// §
// Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.


// const dogs = [
//     { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//     { weight: 8, curFood: 200, owners: ['Matilda'] },
//     { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//     { weight: 32, curFood: 340, owners: ['Michael'] },
//     ];



// // 1.

// dogs.forEach(dog=> dog.recFood = Math.trunc(dog.weight ** 0.75 * 28))
// // console.log(dogs)

// // 2.

// const dogShara = dogs.find(owner=> owner.owners.includes("Sarah"))
// // console.log(dogShara)

// // console.log(`Shara dogs is eating too ${dogShara.curFood > dogShara.recFood ? "Much" : "little"}`)

// // 3.


// const ownersEatTooMuch = dogs.filter(dog=> dog.curFood > dog.recFood).flatMap(owner=> owner.owners)
// console.log(ownersEatTooMuch)
// const ownersEatTooLittle = dogs.filter(dog=> dog.curFood < dog.recFood).flatMap(owner=> owner.owners)
// console.log(ownersEatTooLittle)

// // 4.

// // console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too Much'`)
// // console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too Little`)

// // 5.
// console.log(dogs.some(dog=> dog.curFood === dog.recFood))

// // 6
// const checkEatingOkay = dog=> dog.curFood>dog.recFood * 0.9 && dog.curFood<dog.recFood * 1.1
// console.log(dogs.some(checkEatingOkay))

// // 7.
// console.log(dogs.filter(checkEatingOkay))

// // 8 

// const dogShort = dogs.slice().sort((a,b)=>a.recFood-b.recFood)
// console.log(dogShort)


const twoSum = function(nums,target) {
    let acc = nums.reduce((acc,cur,curIndx,arr)=>{
    arr.forEach((num,index)=>{
       if(num + cur === target && index!== curIndx){
           acc = [curIndx,index]
       }
    })
    return acc
    },[])
    return acc.sort();
}

// var twoSum = function(nums, target) {

//     let acc = nums.reduce((acc, curr, currIndex, array) => {
//         array.forEach((number, index) => {
            
//             if(number + curr === target && index !== currIndex) {
//                 acc = [currIndex, index];
//             }
//         })
        
//         return acc;
//     }, []);
    
//     return acc.sort();
    
//     };

// twoSum([3,2,4],6)
console.log(twoSum([3,2,4],6))