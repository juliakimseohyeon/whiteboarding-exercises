/**
 * RICHEST CUSTOMER'S WEALTH
 *
 * You are given a 2D array of numbers called customers,
 * where customers[i] is the customer and customers[i][j] is an amount of money
 * customer i has at a particular bank. Return the wealth that the richest customer has.
 * A customer's wealth is the amount of money they have in all their bank accounts.
 * The richest customer is the customer that has the maximum wealth.
 *
 * Example Input: customers = [[1,5],[7,3],[3,5]]
 * Expected Output: 10
 *
 * Example Input: customers = [[1,2,3],[3,2,1]]
 * Expected Output: 6
 *
 * Example Input: customers = [[2,8,7],[7,1,3],[1,9,5]]
 * Expected Output: 17
 *
 * https://leetcode.com/problems/richest-customer-wealth/
 */

// Step 1: Map over the array and save each nested array as a new variable
// Step 2: Map over the new variables and add each of its values
// Step 3: Sort the variables from highest to the lowest value?

const richestCustomer = (customersArr) => {
  const wealth = customersArr.map((customer) => {
    let baseWealth = 0;
    for (let i = 0; i < customer.length; i++) {
      baseWealth += customer[i];
    }
    return baseWealth;
  });
  wealth.sort((a, b) => b - a);
  return wealth[0];
};

console.log(
  richestCustomer([
    [1, 1, 1],
    [1, 2, 3],
  ])
);
