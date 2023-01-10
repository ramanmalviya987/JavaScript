const greet = function(greeting){
return function(name){
    console.log(`${greeting} ${name}`)
}
}

// console.log(greet("Hello"))
const greeting = greet("Hello")
// console.log(greeting)
// greeting("Raman")

// greet("Hii")("Raam")



// const message = (message)=>{
//     return (name) =>{
//         console.log(`${message} ${name}`)
//     }
// }

// message("This message for")("Raman")


// we also write this arrow function like this:

const message = message => name => console.log(`${message} ${name}`)
message("This message for")("Raman")