
//Lecture: Value and Variable

/*let country = "India"
let continent = "seven"
let population = "138 Crore"

console.log(country,continent,population)
console.log(country)
console.log(continent)
console.log(population)
*/

//Lecture: Data type

// let isIsland = "138"

// let language;

// console.log( typeof isIsland)
// console.log( typeof language)


//Lecture: Basic Operator

// const population = 138/2;
// let population = 138;
// population++;

// console.log(population)
// const fiLand = 6;

// console.log(fiLand>=population)



// const massMark = 92;
// const markHeight = 1.98;

// const johnMass = 76;
// const johnHeight = 1.76;

// const MarkBmi = Math.round(massMark/markHeight ** 2);
// const JohnBmi = Math.round(johnMass/(johnHeight*johnHeight))

// const markHigherBMI = MarkBmi > JohnBmi;

// console.log(MarkBmi,JohnBmi,markHigherBMI)

// if(MarkBmi>JohnBmi){
//     console.log(`Mark's BMI (${MarkBmi}) is higher then john's (${JohnBmi})`)
// }else{
//     console.log(`Mark's BMI (${MarkBmi}) is less then john's (${JohnBmi})`)
// }



// const population = 133;
// const country = 'India'
// if(population>33){
//     console.log(`${country} population is above average`)
// }else{
//     console.log(`${country} population is below average`)
// }


// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log( 5 + 6 + '4' + 9 - 4 - 2);



// const numNeighbours = Number(prompt("How many neighbour countries does your cuntry"))


// if(numNeighbours===1){
//     console.log("only one border")
// }
// else if(numNeighbours>1){
//     console.log("more than one border")
// }

// else{
//     console.log("no border")
// }



// const dolphinAverage =   ( 97 + 108 + 89 ) / 3;
// const koalasAverage = ( 88 + 91 + 110 ) / 3;

// console.log(dolphinAverage,koalasAverage)

// if(dolphinAverage>koalasAverage && dolphinAverage>=100){
//     console.log(`Dolphins are win.... there score is ${dolphinAverage}`)
// }
// else if(dolphinAverage < koalasAverage && koalasAverage>=100){
//     console.log(`Koalas are win.... there score is ${koalasAverage}`)

// }
// else if (dolphinAverage === koalasAverage && dolphinAverage>=100 && koalasAverage>=100){
//     console.log(`Match Draw.... Dolphins score${dolphinAverage} and koalas score ${koalasAverage}` )
// }
// else{
//     console.log("no one win the trophy")
// }



// const bill = 275;

// const tip = bill <= 300 && bill >= 50 ? bill * 0.15: bill * 0.2;
// console.log(`“The bill was ${bill}, the tip was ${tip}, and the total value
// // ${bill+tip}”`)



// const numNeighbours = Number( prompt("How many neighbour does your country have"))


// if(numNeighbours === 1){
//     console.log("only one border")
// }else if(numNeighbours>1){
// console.log("more than one border")
// }else{
//     console.log("no border")
// }




// const language = prompt("enter your language")
// const population = prompt("enter the population that you want");
// const isLand = prompt("enter the value true or false if you want island");

// const language = "English"
// const population  = 50;
// const island = true;

// if(language === "English" && population<=50 && !island ){
//     console.log("you live here")
// }else{
//     console.log("you dont live here")
// }

// if(language === "hindi" && population>=138 && isLand===false){
//     console.log("you live in india")
// }else{
//     console.log("you dont live")
// }





// const language = prompt("enter your language")

// switch (language) {
//     case "chinese":
//     case "mandarin":
//         console.log("MOST number of native speakers!");
//         break;
//     case "spanish":
//         console.log("'2nd place in number of native speakers'");
//         break;
//     case "english":
//         console.log("3rd place");
//         break;
//     case "hindi":
//         console.log("Number 4")
//         break;
//     case "arabic":

//         console.log("5th most spoken language")
//         break;
//         default:
//             console.log("language not match our data")

// }



// const population = Number(prompt("enter your country population"))
// const country = population >= 30 ? console.log("india populaation is above average") :
//     console.log("india population below average")

//     console.log(country)


// const population = 99;

// const country = "India"

// console.log(`
// ${country}'s population is ${population>33 ? "above" : "below"} average'
// `)


// Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);


// let A = 10;
// let Y = A
// console.log(Y)


// Add assignment operator

// let A = 10;
// // A = A + 12
// A+= 12;
// console.log(A)

// comparison

// Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// ==

// let a = 12;
// let y = 12;
// console.log(a === y)

// let x = "10";
// console.log(x === "10")

// !=

// let x = 12;
// console.log( x!= 12)

// equality operator == === !=


// Logical operator;

// AND
// let a = 1
// let b = 2;



// console.log(a>=1&&b<=2)

// OR
// let a = 1
// let b = 2;


// console.log(a>=11||b>=22)

// Type conversion and coercion

// const num = 123;
// console.log(num)

// const str = String(num)
// console.log(typeof(str))


// coercion

// console.log("I'm " + 23  +  " year old") ;

// console.log("23" - "10" -3)
// console.log("23" + "10" + 3)
// // console.log("23" * "10" * 3)
// console.log(23*10*3)
// console.log("23" / "10" / 3)
// console.log(23 / 10 / 3)



// Truthy and falsy values

// 0
// ""
// undefined;
// null;
// NaN

// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(""))
// const hasDriversLicense = true; // A
// const hasGoodVision = false; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense || hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }


// console.log(3+4 )
// console.log("this is ritesh")


// Fundamental 2

// Functions

// Declaration:

function add(a,b){
    return a+b;
}

// console.log(add(2,3))

// Epression:

// const sub = function(s,d){
//     return s-d
// }

// console.log(sub(12,34))


// Arrow;

// const multi = (m,n) =>  m*n;


// console.log(multi(2,3))


// Array 

// object 


const person =  { 
   FirstName: "Ritesh",
   Age: 21,
   Profession: 'software engineer',

   add: function(a){
       console.log(a+this.add)
   }

}

person.add(23)

