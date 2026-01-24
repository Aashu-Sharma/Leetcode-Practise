let prices = [4,1,5,2,7];

const bestTimeToBuyAndSell = (arr) => {
    // let maxProfit = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i+1; j < arr.length; j++) {
    //         let profit = prices[j] - prices[i];
    //         if(profit > maxProfit){
    //             maxProfit = profit
    //         }
    //     }
    // }
    // return maxProfit;

    // better approach

    let maxProfit = 0;
    let cheapestPrice = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < cheapestPrice){
            cheapestPrice = arr[i];
            continue;
        }
        let profit = arr[i] - cheapestPrice;
        if(maxProfit < profit){
            maxProfit = profit;
        }
    }
    return maxProfit;
};

console.log(bestTimeToBuyAndSell(prices));