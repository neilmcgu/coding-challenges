// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

//     1 <= prices.length <= 105
//     0 <= prices[i] <= 104


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max_profit = 0
    let left = 0
    let right = 1
    while(right < prices.length){
        if(prices[left] < prices[right]){
            let profit = prices[right]-prices[left]
            max_profit = Math.max(max_profit, profit)
        }else{
            left = right
        }
        right++
    }
    return max_profit
};

// part two
// given an array of prices
// find the maximum profit you can make by buying and selling the stock
// you are allowed to buy and sell more than one time however you can only hold one of the stock at a time
// you can buy and sell the stock on the same day if you wish
// ex: prices = [1,2,3,4,5] => max_profit = 4 because you can buy on day 1 and sell on day 5
// prices = [1,5,2,7,3,1] => max_profit = 4 + 5 = 9 because you can buy on day 1 and sell on day two, then buy again on day 3 and sell on day 4
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max_profit = 0
    for(let i = 0; i<prices.length; i++){
        if(prices[i]<prices[i+1]){
            max_profit += prices[i+1] - prices[i]
        }
    }
    return max_profit
};