// What is Set ?
// A JavaScript Set is a collection of unique values. Each value can only occur once in a Set.
//  A Set can hold any value of any data type.


const orderSet =  new Set(['Raman','Ritesh','Ritika','Raman'])
// console.log(orderSet)

// console.log(new Set("Raman"))


// There are different2 Set Methods:

// we can check in set ki usme value exist krti hai ya nahi by using has method 
// exactly like include method in array
// console.log(orderSet.has("Raman"))

// console.log(orderSet.has("Rama"))

// we can also add a element in set

orderSet.add("Rahul")
// console.log(orderSet)

// we can also delte a element in Set
orderSet.delete("Raman")
// console.log(orderSet)

// We can clear set 
// orderSet.clear()
// console.log(orderSet)


// set are Itereable so we can use for loop also
// for(const x of orderSet) console.log(x)


const staff = ['chef','Waiter','chef','manager','Waiter','chef']
console.log(staff)

// we use spread operator because we want to convert in array 
// const staffUnique = [...new Set(staff)] 
// console.log(staffUnique)

// const [c,w,m]= [...new Set(staff)] 
// console.log(c,w,m)