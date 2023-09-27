const findTheMaximumProfit = (stockReport: number[]): number => {
  let profit = 0;
  let minEntryPrice = stockReport[0];
  /**
   * create a variables profit, minEntryPrice and return profit at the end
   * loop over stockReport
   * find and update minimum entry between previous entry and current entry
   * find and update max profit between current and previous
   */

  for (let i = 0; i < stockReport.length; i++) {
    minEntryPrice = Math.min(minEntryPrice, stockReport[i]);
    profit = Math.max(profit, stockReport[i] - minEntryPrice);
  }

  return profit;
};

export default findTheMaximumProfit;

// Example 1 input => [1,6,2,5,4,2], output will be 5
// Example 2 input => [8,6,2,5,4,2], output will be 3
