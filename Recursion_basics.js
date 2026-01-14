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

let n = 5;

// let sum = 0; for the first recursive approach
// let curr = 1; for the first recursive approach
function sumOfFirstNNumbers(n  /*curr, n */) {
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

  if (n === 1) return n;
  return n + sumOfFirstNNumbers(n-1);
}

console.log(sumOfFirstNNumbers(curr, n));
