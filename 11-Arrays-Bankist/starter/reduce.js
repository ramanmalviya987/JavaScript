const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// acc mean accumalator and accumalator like a snowball
const balance = movements.reduce(function (acc,cur,i) {
    console.log(`Iteration no. ${i}: ${acc}`)
return acc + cur

},0)

// console.log(balance)


// same code with the help of for of loop

let balance2 = 0;

for(const mov of movements){
    balance2+= mov
}

// console.log(balance2)

// Maximum 
console.log(movements)

const max = movements.reduce((acc,mov)=>{
    if(acc > mov){
        return acc;
    }else{
        return mov;

    }
},movements[0])

console.log(max)