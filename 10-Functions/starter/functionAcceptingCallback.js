// Function accepting callback function:

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

console.log(oneWord("Hello i am raman"))

// const upperFirstWord = function (str) {
//   const [firstWord, ...others] = str.split(' ');

//   return [firstWord.toUpperCase(), ...others].join(' ');
// };

// // console.log(upperFirstWord("this is raman malviya"))

// // Higher order function:

// const transform = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transform: ${fn(str)}`);

//   console.log(`Transform Name: ${fn.name}`);
// };

// // transform('Javascript is the best!', upperFirstWord);
// // transform('Javascript is the best!', oneWord);

// const add = function(a,b){
// return a + b;
// }

// const sub = function(a,b){
//     return a - b;
// }

// const result = function (a,b,fn){
// console.log(`Adding ${a} + ${b} = ${fn(a,b)}`)
// }

// result(2,4,add)