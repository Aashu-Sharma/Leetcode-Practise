let array = [10, 22, 12, 3, 0, 6];

function leadersInAnArray(arr){
    // brute force
    // let leaders = [];
    // for(let i = arr.length - 1; i >= 0; i--){
    //     let greatest = -Infinity;
    //     for (let j = arr.length - 1; j >= i; j--) {
    //         if(arr[j] > greatest){
    //             greatest = arr[j];
    //         }
    //     }
    //     if(!leaders.includes(greatest)){
    //         leaders.push(greatest);
    //     }
    // }
    // return leaders.reverse()

    let leaders = [];
    let greatest = -Infinity;

    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] > greatest){
            leaders.push(arr[i]);
            greatest = arr[i]
        }
    }
    return leaders.reverse();
};

console.log(leadersInAnArray(array));