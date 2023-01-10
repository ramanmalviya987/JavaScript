// Working with String

const airLine = 'TAP Air Indigo'
const plane = "ASX23";

// console.log(airLine.length)
// console.log(plane[0])
// console.log(plane[1])
// console.log(plane[2])
// console.log(plane[3])

// console.log(airLine.indexOf('I'))
// console.log(airLine.indexOf('i'));
// console.log(airLine.indexOf('i'));
// console.log(airLine.indexOf('i'));
// console.log(airLine.lastIndexOf('i'))

// Slice Method


// console.log(airLine.slice(4))
// console.log(airLine.slice(4,5))
// console.log(airLine.slice(0,airLine.indexOf(' ')))
// console.log(airLine.slice(0,airLine.lastIndexOf(' ')+1))
// console.log(airLine.slice(-3))
// console.log(airLine.slice(1,-9))

const checkMiddleSeat = function(seat){
    const s = seat.slice(-1);
    if(s === "B" || s === "E"){
        console.log("you got a middle seat!")
    }else{
        console.log("You got a Window seat")
    }
}

// checkMiddleSeat('11B')
// checkMiddleSeat('21E')
// checkMiddleSeat('11C')


const str = "NaMe"
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

const correctName = function(name){
    const f = name.toLowerCase();
    const c = f[0].toUpperCase() + f.slice(1)
    console.log(c)
}

// correctName("Raman")
// correctName("RamAn")
// correctName("RAMAN")
// correctName("AgAm")


// compare email

const email = 'raman.s.malviya@gmail.com';
const userEmail = " Raman.S.Malviya@gmail.com\n  ";

const ce = userEmail.toLowerCase().trim();

// console.log(email===ce);

// replacing

const price = '124,234 Rupe'
const us = price.replace('Rupe',"$")
// console.log(us)

const announceMent = "All Student come on Room No. 23. Room No.23"
const ac = announceMent.replaceAll('Room',"class")
// console.log(ac)

// Boolean

// const planes = 'Airbus A320neo'
// console.log(planes.includes('A320'))
// console.log(planes.includes("boili"))
// console.log(planes.includes("irbus"))

// if (planes.startsWith('Airbus') && planes.endsWith('neo')) {
//     console.log('Part of the NEW ARirbus family');
//   }

//   practice Exercise

const checkSamaan  = function (samaan) {
   const check = samaan.toLowerCase();
   if(check.includes("knife") || check.includes('gun')){
       console.log("sorry you are not allow")
   }else{
       console.log("welcome You are allow")
   }
}

// checkSamaan("I have a laptop and i have gun for protection ")
// checkSamaan("I have a cloths")
// checkSamaan("I have a bag snacks and knife")


//  Split and Join
const strs = 'a+very+nice+string'
// console.log(strs.split("+"))

// console.log("Raman Malviya".split(' '))

const [firstName,LastName] = "Raman Malviya".split(' ')
// console.log(firstName)

const newName  = ['Mr.', firstName , LastName].join(" ")
// console.log(newName)


// capetalized the name

const capetalized = function (name) {
   const cpa = name.split(' ')
   const newArr = []
//    console.log(cpa)
   for(const n of cpa){
     newArr.push(n[0].toUpperCase() + n.slice(1) )

   }
   console.log(newArr.join(" "))
}


// capetalized("raman malviya")
// capetalized("raman malviya you are the great man")


// padding

const message = "Go to gate 23!"
console.log(message.padStart(20, "+").padEnd(30,"+"))


const creaditCardv= function(number){
const   str = number + "";
const last = str.slice(-4)
return last.padStart(str.length,"*")

}

// console.log(creaditCardv(243454235234))
// console.log(creaditCardv("243454234534235234"))


// Repeat

const message2 = "You are delay today cause bad whether";
// console.log(message2.repeat(23))

const planeWaiting = function (n) {
    console.log(`There are ${n} planes are waiting`)
}
planeWaiting(12)
planeWaiting(122)
planeWaiting(112)
planeWaiting(122)