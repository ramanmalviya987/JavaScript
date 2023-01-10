// How passing Arguments works: values vs reference

// simple example:

// All primitive value like string booleans numbers etc these 
// are called pass by values 
 
let a = 12;
let b = 21;
let c = b + 1

// console.log(`a = ${a}`)
// console.log(`b = ${b}`)
// console.log(`c = ${c}`)


// simple Example:
// So these are the example of pass by reference 
// object arrays classes are called pass by reference
let arr = [1,2,3]
let arr2 = [2,3,4]

let arr3 = arr2;

arr3.push(23)


// console.log(`arr = ${arr}`)
// console.log(`arr2 = ${arr2}`)
// console.log(`arr3 = ${arr3}`)


// Main Example;

const flight = 'ASW123'
const person = {
    name: "Raman",
    passportNum: 2312323212,
    age: 20
}

const checkIn = function(flightNum,passenger){
// console.log(flightNum,passenger)
flightNum = "DFS321";
passenger.name = "Mr." + passenger.name;
if(passenger.passportNum === 2312323212){
    console.log("checked In")
    console.log(person.passportNum)
}else{
    console.log("Wrong Passport")
    console.log(person.passportNum)

}
}
// console.log(flight);
// console.log(person)
// checkIn(flight,person)
// console.log(flight);
// console.log(person)


// Is the same as doing;
const flightNum = flight;
const passenger = person;
// console.log(flightNum)
// console.log(passenger)

const newPassport = function(person){
person.passportNum = Math.trunc(Math.random()*10000000);

}

// newPassport(person)
// checkIn(flight,person)