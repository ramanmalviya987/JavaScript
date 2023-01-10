const arr = [1,2,3,[4,5,6],[7,8]]
// console.log(arr.flat())

const arrDeeper = [1,[2,3],[4,[5,6]],[7,8]]

// console.log(arrDeeper.flat(2))


const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,    
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];

  const accountMovements = accounts.map(acc=> acc.movements)
//   console.log(accountMovements)


//   sort method: 

const owners = ['Jonas','Raman','Shivansh','Prince'];
// console.log(owners)
// console.log(owners.sort())
// console.log(owners)

console.log(account1.movements)

// return < 0, A,B (keep order)
// return > 0, B,A (Switch order)

// Accending 
// account1.movements.sort((a,b)=> {
//     if(a > b) return 1;
//     if(a < b) return -1;
// })


// Decending 
account1.movements.sort((a,b)=> {
    if(a > b) return -1;
    if(a < b) return 1;
})



console.log(account1.movements)
