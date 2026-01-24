// Recursion - When a function calls itself repeatedly until a specific condition is met.

// function endlessRecursion(){
//     console.log(1);
//     endlessRecursion();
// }

// endlessRecursion();

// function random (a,b){
//     c = a+b;
//     d = a > b ? a - b : b - a;
//     console.log("c: ", c, " d: ", d);
//     if(c !== 10){
//         random(c, d);
//     }
// }

// random(2,3);

// let count = 0;
// function printCount(){
//     if(count > 3) return;
//     console.log("Ran: ", count)
//     count++;
//     printCount();
// }

// printCount();

// let myname = "aashutosh";
// let n = 3;
// let count = 0;
// function printName(name){
//     if(count < n){
//         console.log("My name is ", name);
//         count++;
//         printName(name);
//     }
// }
// printName(myname)

// let n = 3;

// let current = 1;
// function printNums(current, n){
//     //forward recursion
//     // if(current > n) return;
//     // console.log(current);
//     // printNums(current+1,n)

//     //backtracking
//     // if(current > n) return;
//     // printNums(current+1, n);
//     // console.log(current)
// }

// printNums(current, n)

// let n = 5;

// let sum = 0; for the first recursive approach
// let curr = 1; for the first recursive approach
function sumOfFirstNNumbers(n /*curr, n */) {
  // brute force
  // let curr = 1;
  // let sum = 0;
  // while(curr <= n){
  //     sum+= curr;
  //     curr++;
  // }
  // return sum;
  // with formula
  // let sum = (n * (n+1))/2;
  // return sum;
  // with recursion my approach
  // sum += curr;
  // curr++;
  // if (curr <= n) {
  //   sumOfFirstNNumbers(curr, n);
  // }
  // return sum;
  // if (n === 1) return n;
  // return n + sumOfFirstNNumbers(n-1);
}

// console.log(sumOfFirstNNumbers(curr, n));

//finding factorial basic approach;
// let n = 0;
// const findFactorial = () => {
//   let prod = 1;
//   for (let i = n; i >= 1; i--) {
//     prod*=i;
//   }
//   return prod;
// }

// console.log(findFactorial(n))

//recursive approach;
// let n = 100;

// const findFactorial = (x) => {
//   if(x === 0 || x === 1) return 1;
//   if(x < 0) return "only natural no's are allowed";

//   return x * findFactorial(x-1);
// }

// console.log(findFactorial(n));

//reverse an array

let arr = [10, 20, 30, 40, 50];
//two pointer approach
// const reverseAnArray = (arr) => {
//   let start = 0;
//   let end = arr.length - 1;

//   while (end > start){
//     let temp = arr[end];
//     arr[end] = arr[start];
//     arr[start] = temp;
//     end--;
//     start++;
//   }

//   return arr;
// }

// const reverseAnArray = (arr) => {
//   let newArr = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }

//   return newArr;
// }

// function reverseAnArray(arr){
//   return arr.reverse();
// }

// console.log(reverseAnArray(arr));

let str = "A man, a plan, a canal: Pa";

//basic approach
// function checkPallindrome(s){
//   let newStr = "";
//   for(let i = s.length-1; i >= 0; i--){
//     newStr+= s[i];
//   }
//   return newStr === s;
// }

// function checkPallindrome(s){
//   let start = 0;
//   let end = s.length - 1;

//   while(end > start){
//     while(start < end && !isAlphaNumeric(s[start])){
//       start++;
//     }
//     while(start < end && !isAlphaNumeric(s[end])){
//       end--
//     }
//     if(s[start].toLowerCase() !== s[end].toLowerCase()) return false;
//     start++;
//     end--;
//   }
//   return true;
// }

// function isAlphaNumeric(char){
//   const code = char.charCodeAt(0);
//   return (code >= 48 && code <= 57) || //0-9
//          (code >= 65 && code <= 90) || //A-Z
//          (code >= 97 && code <= 122) // a-z
// }

// function checkPallindrome(s, start){
//   if(start >= s.length/2) return true;

//   if(s[start] !== s[s.length - start - 1]) return false;

//   return checkPallindrome(s, start+1);
// }

let n = 7;
// console.log(checkPallindrome(str));

const findFibonacci = (n) => {
  // let arr = new Array(n+1).fill(0);
  // arr[0] = 0;
  // arr[1] = 1;

  // if(n === 0) return 0;
  // if(n === 1) return "0 1"

  // for(let i = 2; i <= n; i++){
  //   arr[i] = arr[i-1] + arr[i-2];
  // }
  // return arr.join(" ");

  // optimal approach

  // if (n <= 1) return n;

  // let last = 1;
  // let second_last = 0;
  // let final_number = 0;

  // for (let i = 2; i <= n; i++) {
  //   let curr = last + second_last;
  //   second_last = last;
  //   last = curr;
  //   final_number = curr;
  // }

  // return final_number;
  if (n <= 1) return n;
  return findFibonacci(n-1) + findFibonacci(n-2)
  // not best for large datasets definitely. 
};

console.log(findFibonacci(n));
