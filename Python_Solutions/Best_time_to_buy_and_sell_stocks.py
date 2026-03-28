prices = [7,1,5,3,6,4]

def find_best_time_to_buy_and_sell(prices):
    # naive brute force approach
    # maxProfit = 0
    # for i in range(len(prices)-1):
    #     profit = 0
    #     for j in range(i+1, len(prices)):
    #         profit = prices[j] - prices[i]
    #         maxProfit = max(maxProfit, profit)
    # return maxProfit

    max_profit = 0
    cheapest_price = prices[0]

    for i in range(len(prices)):
        if (prices[i] < cheapest_price):
            cheapest_price = prices[i]

        profit = prices[i] - cheapest_price
        if(profit > max_profit):
            max_profit = profit
    return max_profit


    

        

print(find_best_time_to_buy_and_sell(prices))