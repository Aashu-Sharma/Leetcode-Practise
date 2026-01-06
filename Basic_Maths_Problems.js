const num = -123;

function countDigits(num){
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

function reverseNumber (n) {
    const isNegative = n < 0;
    n = Math.abs(n);
    let reversedNum = 0;
    while(n > 0 ) {
        if(n % 10 !== 0){
            let digit = n % 10;
            reversedNum = (reversedNum * 10) + digit;
            console.log(reversedNum);
        }
        n = Math.floor(n / 10);
    }
    return isNegative ? -reversedNum : reversedNum;
}

console.log(reverseNumber(num));

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