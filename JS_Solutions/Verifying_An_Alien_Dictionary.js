const input = [
  { words: ["hello", "leetcode"], order: "hlabcdefgijkmnopqrstuvwxyz" }, //expected output: true,
  { words: ["word", "world", "row"], order: "worldabcefghijkmnpqtuvxyz" }, // expected output: false,
  { words: ["apple", "app"], order: "abcdefghijklmnopqrstuvwxyz" }, //expected output: false
];

const isAlienSorted = (words, order) => {
  const orderMap = new Map();
  for (let i = 0; i < order.length; i++) { 
    orderMap.set(order[i], i);
  }

  for (let i = 0; i < words.length - 1; i++) {
    for(let j = 0; j < words[i].length; j++){
        if(j >= words[i + 1].length) return false; // handle case like "apple" and "app"
        if(words[i][j] !== words[i+1][j]){
            let currentLetter = orderMap.get(words[i][j]);
            let nextLetter = orderMap.get(words[i+1][j]);
            if(nextLetter < currentLetter){
                return false;
            }else{
                break;
            }
        }
    }
  }
    return true;
};

for (const { words, order } of input) {
  console.log(isAlienSorted(words, order));
}
