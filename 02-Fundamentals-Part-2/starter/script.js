

// function describeCountry(country,population,capitalCity){
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`

// }

// console.log(describeCountry("India",138,"Delhi"))
// console.log(describeCountry("pakistan",138,"karachi"))

// console.log(describeCountry("Finland",138,"Helsinki"))



// const worldPopulation = 7900;

// function percentageOfWorld1(country,population){
    
//     const percentage = (population/worldPopulation)*100;
//     return `${country} has ${population} millions people, so it's about ${percentage}% of
//     the world population`
// }

// const india  = percentageOfWorld1("India",133)
// console.log(india)

// const percentageOfWorld2 = function(population){

//     return (population/7900)*100
// }

// const india = percentageOfWorld2(133)
// console.log(india)

// const percentageOfWorld3 = population =>{
// return (population/7900)*100;
// }

// const india = percentageOfWorld3(133)
// console.log(india)



// const percentageOfWorld = population=>{
// return (population/7900)*100;
// }

// const describePopulation = function(country,population){
//     const percentage = percentageOfWorld(population)
// return `${country} has ${population} millions peoples which is about ${percentage}% of the world`}

// const india = describePopulation("India",133)
// console.log(india)



// const calcAverage = (score1,score2,score3)=>{
//     return (score1+score2+score3)/3
// }

// const avgDolphin = calcAverage(444,234,714)
// const avgKoala = calcAverage(65,54,49)

// console.log(avgDolphin,avgKoala)

// const checkWinner = (avgDolphins,avgKoalas)=>{
// if(avgDolphins>=2*avgKoalas){
//     console.log(`dolphins win (${avgDolphins} vs ${avgKoalas})`)
// }else if(avgKoalas>=2*avgDolphins){
//     console.log(`koalas win (${avgKoalas} vs ${avgDolphins})`)
// }else{
//     console.log("no one win")
// }

// }
// checkWinner(avgDolphin,avgKoala)




// const calcTip = function(bill){
  
//     if(bill<=300 && bill>=50){       //this code is wrong because function return something always
//         const tip = bill*0.15;
//         console.log(tip)
//     }else{
//         const tip = bill*0.2;
//         console.log(tip)
//     }

// }

// const calcTip = function(bill){
//     return bill>=50 && bill<=300 ? bill * 0.15 : bill* 0.2  // this code is correct because its return something
// } 

// const bills = [125,555,44]

// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
// const total = [bills[0]+tips[0], bills[1]+bills[1], bills[2]+bills[2]]
// console.log(tips,bills,total)




// const population = [123,1232,12342,123453];

// const percentageOfWorld3 = (population) =>{
// return (population/7900)*100;
// }

// const percentage = [population[0],population[1],population[2],population[3]]

// console.log(percentage)
// console.log(population.length === 4)


// const neighbours = ["srilanka", "bangladesh" , "pakistan",];

// console.log(neighbours)

// neighbours.push("Utopia");
// console.log(neighbours)

// neighbours.pop()
// console.log(neighbours)

// if(!neighbours.includes("Germany")){
//     console.log('Probably not a central European country :D');
// }

// neighbours[neighbours.indexOf("srilanka")] = "republic of srilanka"
// console.log(neighbours)







// const myCountry = {
//     country: "India",
//     capital: "Delhi",
//     language: "Hindi",
//     population: 133,
//     neighbour: 3
// }

// console.log(myCountry)
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,
// ${myCountry.neighbour} neighbouring countries and the capital called ${myCountry.capital}`)

// myCountry.population += 2;
// console.log(myCountry.population)

// myCountry["population"] -= 2;
// console.log(myCountry['population'])




// const john = {
//     fullName: "John Smith",
//     mass: 43,
//     height: 1.23,

//     calcBMI: function(){
//         return this.BMI = this.mass / this.height ** 2
//     }
// }

// const mark = {
//     fullName: "mark sins",
//     mass: 78,
//     height: 1.69,

//     calcBMI: function(){
//         return this.BMI = this.mass / this.height ** 2
//     }
// }

// if(john.calcBMI()>mark.calcBMI()){
//     console.log(`${john.fullName} BMI (${john.calcBMI()}) is higher than ${mark.fullName} (${mark.calcBMI()})`)
// }else{
//     console.log(`${mark.fullName} BMI (${mark.calcBMI()}) is higher than ${john.fullName} (${john.calcBMI()})`)




// for(let vote = 1 ; vote <=5 ; vote++){
//     console.log(`Voter number ${vote} is currently voting`)
// }




// const population = [10,1441,332,83];
// const percentage2 = [];

// const percentageOfWorld3 = (population) =>{
// return (population/7900)*100;
// }


// for(let i= 0 ; i<population.length; i++){
//     const per = percentageOfWorld3(population[i])
//     percentage2.push(per)
// }

// console.log(percentage2)





// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden','Russia']];

// for( let i = 0 ; i<listOfNeighbours.length; i++){
//     const neigh = listOfNeighbours[i];
//     for(let i = 0 ; i<neigh.length; i++){
//         const neighbour = neigh[i]
//         console.log(`Neighbour: ${neighbour}`)
//     }
    
// }

  // for(let y = 0 ; y<listOfNeighbours[i].length; y++){
    //     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    // }



// const population = [10,1441,332,83];
// const percentage3 = [];

// const percentageOfWorld3 = (population) =>{
// return (population/7900)*100;
// }
//  let i = 0
// while(i < population.length){
//     const per = percentageOfWorld3(population[i])
//     percentage3.push(per);
//     i++;
// }

// console.log(percentage3)


// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉


const bills = [22,295,176,234,65,987,345,87,65,10];
const tips = [];
const totals = [];


const calcTip = function(bill){
        return bill>=50 && bill<=300 ? bill * 0.15 : bill* 0.2 
     }

     for ( let i = 0 ; i<bills.length; i++){
         const tip = calcTip(bills[i])
         tips.push(tip);
         const total = bills[i] + tip
         totals.push(total)
     }

     const calcAverage = function(arr){
         let sum = 0;
         for(let i = 0 ; i<arr.length; i++){
             sum+= arr[i]
         }
         return sum /arr.length
     }


     console.log(tips)
     console.log(totals)
     console.log(calcAverage(tips))
     console.log(calcAverage(totals))

