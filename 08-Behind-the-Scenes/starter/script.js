// const cp = function(p){
//   const ciclePeri = (2*3.14*p);
//   console.log(ciclePeri)
// }


// cp(12);


// const reverse = (num)=>{
// let resverseNum = num.toString().split("").reverse().join("");
// if(resverseNum.endsWith("-")){
// resverseNum = "-" + resverseNum;
// return parseInt(resverseNum)
// }else{
//   return resverseNum;
// }

// }
 

// console.log(reverse(2))

// function reversedNum(num) {
//   return (
//     parseFloat(
//       num
//         .toString()
//         .split('')
//         .reverse()
//         .join('')
//     ) * Math.sign(num)
//   )                 
// }

// console.log(reversedNum(321))

// let arr="123";
// let newarr=[];

// for(let i=arr.length-1;i>-1;i--){
//     newarr.push(arr[i])
// }
// console.log(newarr)

// let arr="123";
// let newarr=[];

// for(let i=arr.length-1;i>-1;i--){
//     newarr.push(arr[i])
// }

// newarr=newarr.toString()
// console.log(newarr)



// function countVowel(str) {
//   var count = 0;
//   str=str.toLowerCase();
//   for(var i=0;i<str.length;i++){
//     if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||
//        str.charAt(i)=="o"||str.charAt(i)=="u"){
//        count++; //Increment vowel count
//     }
//   }
//   return count;
// }

// console.log(countVowel("Hello"))

// function countVowels(strs){
//   let str = strs.toLowerCase()
//   let count = 0;
//   for (let i in str) {
//     if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||
//        str.charAt(i)=="o"||str.charAt(i)=="u"){
//        count++; //Increment vowel count
//     }
//   }
//   return count;
// }

// console.log(countVowels("sUbhashini"))

// console.log("Hello World")
// const button = document.querySelector(".btn");
// button.addEventListener("click", function(){
//   const value = prompt("Hello javascript")
//   console.log(value)
// })

// function num(n){
// const reverse = n.toString().split("").reverse().join("");
// console.log(reverse);
// }

// num(321);


// let arr="123";
// let newarr=[];

// for(let i=arr.length-1;i>-1;i--){
//     newarr.push(arr[i])
// }

// newarr=newarr.join("");
// console.log(newarr)

// function wrdr(str){
//   const alpha = str.split("").sort().join(" ");
//   const capital = alpha.toUpperCase();
//   console.log(capital)
// }
// wrdr("qwertyuioplkjhgfdsazxcvbnm")

// function flc(str){
//   const ss = str.split(" ");
//   const newarr = [];

//   for(let i = 0; i<ss.length; i++){
//     newarr.push(ss[i].charAt(0).toUpperCase()+ss[i].slice(1))
//   }
  

// return newarr.join(" ");
// }

// console.log(flc("the raman is honest boy"))


function lw(str){
const ss = str.split(" ");
let newa = [0];

for(let i = 0; i<ss.length; i++){
 if(newa.length<ss[i].length){
  newa = ss[i]
 }
}
  return newa;
}

console.log(lw("web development tutorial dkjfhlghslfghsdjf"))