/*
  Spicy Peas
  for every number divisible by 3, print 'spicy'
  for every number divisible by 5, print 'Peas'
  for every number divisble by 3 and 5, print 'spicyPeas'
  for every other number, print it directly
*/

// Hint: account for 0 being divisible by everything

// Step 1: Create a function that would map over an array of numbers
// Step 2: Divide every instance of number by 15. If the remainder is 0, print 'spicyPeas'
// Step 3: Divide every instance of number by 3. If the remainder is 0, print 'spicy'
// Step 4: Divide every instance of number by 5. If the remainder is 0, print 'Peas'
// Step 5: For all other cases, print the number itself

const spicyPeas = (nums) => {
  nums.map((num) => {
    if (num % 15 === 0) {
      console.log("spicyPeas");
    } else if (num % 3 === 0) {
      console.log("spicy");
    } else if (num % 5 === 0) {
      console.log("Peas");
    } else {
      console.log(num);
    }
  });
};

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(spicyPeas(nums));
