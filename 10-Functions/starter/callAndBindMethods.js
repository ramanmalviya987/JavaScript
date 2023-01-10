const lufthansa = {
  airline: 'Lughthansa',
  iataCode: 'LU',
  bookings: [],

  book: function (flightNum, name) {
    console.log(
      `
        ${name} booked a seat on ${this.airline}
        flight ${this.iataCode}${flightNum}
        `
    );
    this.bookings.push({flight: `${this.iataCode}${flightNum}`,name})
  },
};
// lufthansa.book(123,"Raman")
// lufthansa.book(233,"Naman")

// console.log(lufthansa)


const euroWings = {
    airline: "Eurowings",
    iataCode: "EU",
    bookings: []
}

const book = lufthansa.book
// Does not work 
// book(211,"test")


// Call Method

// book.call(euroWings,211,"Willson")
// console.log(euroWings)


// Bind method:

const bookEw = book.bind(euroWings)
// bookEw(345,"Agam Malviya")
// console.log(euroWings)


const bookEU34 = book.bind(euroWings,34);
// bookEU34("Sugam")

// With event Listeners

// lufthansa.planes = 300;
// lufthansa.buyPlanes = function(){
//   console.log(this);

//   this.planes++;
//   console.log(this.planes)
// }

// document.querySelector(".buy").addEventListener('click',lufthansa.buyPlanes.bind(lufthansa))


// Partial applications:
// const addTax = (rate,value) => value + value * rate;
// console.log(addTax(0.1,200))

// const addVAT = addTax.bind(null,0.23);
// console.log(addVAT(200))

const addTax = function(rate=0.1){
  return  function(value){
    return value + value * rate;
  }
}

// const tax = addTax(0.1)
// console.log(tax(200))
console.log(addTax()(200))