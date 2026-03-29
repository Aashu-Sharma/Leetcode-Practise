let nums = [3, 1, -2, -5, 2, -4];

function rearrage_nums(nums){
    // let rearranged = [];
    // let positives = [];
    // let negatives = [];

    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] > 0){
    //         positives.push(nums[i]);
    //     }else{
    //         negatives.push(nums[i]);
    //     }
    // }

    // let pos = 0;

    // while(pos < positives.length){
    //     rearranged.push(positives[pos]);
    //     rearranged.push(negatives[pos]);
    //     pos++;
    // }
    // return rearranged;

    let rearranged = new Array(nums.length).fill(0);
    let posi = 0;
    let negi = 1; // [3, 1, -2, -5, 2, -4];
    let i = 0;

    while(i < nums.length){
        if(nums[i] > 0){
            rearranged[posi] = nums[i];
            posi+=2;
        }else{
            rearranged[negi] = nums[i];
            negi+=2;
        }
        i++;
    }

    return rearranged;
    
}

console.log(rearrage_nums(nums));