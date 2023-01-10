const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
// console.log(movements)
console.log(deposits);

// we cal also write this same code in for of loops

// const depositss = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositss.push(mov);
//   }
// }

// console.log(depositss);


const withdrawals = movements.filter(function (mov) {
    return mov < 0
})

const withdrawals = movements.filter(mov=> mov<0)
console.log(withdrawals)