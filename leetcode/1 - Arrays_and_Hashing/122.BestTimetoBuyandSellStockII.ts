/* 
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
*/

/* ------------------------------------------------------------------------------- */

function maxProfit(prices: number[]): number {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }

    return profit;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const prices = [7, 1, 5, 3, 6, 4];
// const prices = [1, 2, 3, 4, 5];
// const prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
