const num = -123;

function countDigits(num) {
  // return num.toString().length;
  // let count = 0;
  // while (num > 0){
  //     count++;
  //     num = Math.floor(num / 10);
  // }
  // return count;
  // or
  // return Math.floor(Math.log10(num) + 1);
}
// The time complexity of the first solution is Big O(log10(N)).
// Why? Because everytime when the loop executin depends on the division of a certain number, you will find log in the TC. if we were to divide N by 2, Tc would be log2(N).
// console.log(countDigits(num));

// const extractDigits = (num) => {
//     let arr = [];
//     while(num > 0){
//         let lastDigit = num % 10;
//         arr.push(lastDigit);
//         num = Math.floor(num / 10);
//     }
//     arr.reverse();
//     return arr;
// }

// console.log(extractDigits(num));

// y = log10(N), y is the exponent to which the number 10 must be raised to obtain N.
// In the countNumbers function, we are actually calculating the number to which 10 must be raised in addition to one in order to obtain N in the while loop.

// To sum up, you can say, if the number is 12345, for the first iteration, you raise the 10 to the power of 4 to reach 10000 which is the closest to 12345, in the second iteration, you raise the 10^3 to reach 1000 which is the closest to 1234, in the third iteration, you raise 10^2 to reach 100 which is the closest to 123, and in the 4th iteration, you raise 10^1 to reach 10 which is the closes to 12, and in the 5th iteration, you raise 10^0 to reach 1 which is closest to 1. Now, you have reached 0 and you stop. So, in total, you raised the 10 to the power of 4, 3, 2, 1, and 0 which is a total of 5 times. Hence, the number of digits is 5. Also, if you just add one to each of these exponents you will get the digits in then numbers directly.

// function reverseNumber (n) {
//     const isNegative = n < 0;
//     n = Math.abs(n);
//     let reversedNum = 0;
//     while(n > 0 ) {
//         if(n % 10 !== 0){
//             let digit = n % 10;
//             reversedNum = (reversedNum * 10) + digit;
//             console.log(reversedNum);
//         }
//         n = Math.floor(n / 10);
//     }
//     return isNegative ? -reversedNum : reversedNum;
// }

// console.log(reverseNumber(num));

// function checkPallindrom(originalNum){
//     let num = originalNum;
//     let reversed_num = 0;
//     while(num > 0){
//         let lastDigit = num % 10;
//         reversed_num = (reversed_num * 10) + lastDigit;
//         num = Math.floor(num / 10);
//     }
//     console.log(reversed_num)
//     return reversed_num === originalNum;
// }

// console.log(checkPallindrom(num));

function findGreatestCommonDivisor(a, b) {
  // let gcd = 1;
  // for(let i = Math.min(n1, n2); i > 0; i--){
  //     if(n1 % i === 0 && n2 % i === 0){
  //         return i;
  //     }
  //     console.log("loop ran ", i, " times");
  // }
  // return gcd;
  // Euclidian's Algorithm
  // acc to him, the gcd of two numbers a and b, where a is greater than b can be defiined as the gcd of (a-b, b)
  // let count = 0;
  // while (a > 0 && b > 0){
  //     if(a > b){
  //         a = a % b
  //     }else{
  //         b = b % a
  //     }
  //     console.log(a, b)
  // }
  // if(a === 0){
  //     return b;
  // }else{
  //     return a;
  // }
}

// console.log("The HCF is: ", findGreatestCommonDivisor(10, 15));

// let n = 1634;
function checkArmstrong(num){
    // let n = num
    // let sum = 0;
    // let length = Math.floor(Math.log10(n) + 1);
    // console.log(length);
    // while(n>0){
    //     let digit = n%10;
    //     sum = sum + Math.pow(digit, length);
    //     n = Math.floor(n / 10);
    // }
    // console.log(sum);
    // return sum == num ? true : false;
}

// console.log(checkArmstrong(n))

let n = 36;
function PrintAllDivisors(n) {
  // brute force approach
//   let arr = [];
  //   for (let i = 1; i <= num; i++) {
  //     if (num % i === 0) arr.push(i);
  //   }
  //   return arr;

  // optimal approach
//   for (let i = 1; i * i <= n; i++) {
//     if (n % i === 0) {
//       arr.push(i);
//       if (i !== n / i) arr.push(n / i);
//     }
//   }
//   return arr;
}

// console.log(PrintAllDivisors(n));

function checkPrime(n){
    let divisors = 0;
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0) {
            divisors++
            if(i !== n/i){
                divisors++;
            }
        }
    }
    return divisors === 2;
}

console.log(checkPrime(29));
