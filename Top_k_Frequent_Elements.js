const nums = [1,1,1,2,2,3];
const k = 2;

function topKFrequent(nums, k) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], 1);
        }else{
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }
    console.log(map);

    const bucket = new Array(nums.length + 1).fill().map(() => []);
    console.log(bucket);

    for (let [num, freq] of map.entries()) {
        bucket[freq].push(num);
    };

    console.log(bucket);
    const result = [];
    for (let i = bucket.length - 1; i >= 0; i--) {
        if(bucket[i].length > 0){
            result.push(...bucket[i]);
        }
    }
    console.log(result) ;

    console.log(result.slice(0, k)) ;
}

topKFrequent(nums, k);