const num = 12345;

function countDigits(num){
    // return num.toString().length;
    let count = 0;
    while (num > 0){
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}

// console.log(countDigits(num));

const extractDigits = (num) => {
    let arr = [];
    while(num > 0){
        let lastDigit = num % 10;
        arr.push(lastDigit);
        num = Math.floor(num / 10);
    }
    arr.reverse();
    return arr;
}

console.log(extractDigits(num));