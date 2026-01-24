let s = "MCMXCIV"; // expected output 1994

const romanToInt = (s) => {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
        ['IV', 4],
        ['IX', 9],
        ['XL', 40],
        ['XC', 90],
        ['CD', 400],
        ['CM', 900],
    ]);
    
    let result = 0;
    let last = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        let current = map.get(s[i]);

        if(current < last){
            result -= current;
        }
        else{
            result += current;
        }

        last = current;
        
    }
    return result;
}

// console.log(romanToInt(s));

// Another Approach

let input = 'XIX'; // expected output 19

const romanToInt2 = (s) => {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
        ['IV', 4],
        ['IX', 9],
        ['XL', 40],
        ['XC', 90],
        ['CD', 400],
        ['CM', 900],
    ]);

    let result = 0;
    let i = 0;

    while (i < s.length){
        if(i < s.length - 1){
            let twoChar = s.substring(i, i+2);
            if(map.has(twoChar)){
                result += map.get(twoChar);
                i += 2;
                continue;
            }
        }

        result += map.get(s[i]);
        i++;
    }

    return result;
}

console.log(romanToInt2(input));