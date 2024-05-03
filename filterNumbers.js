/**
 * Write a function to remove duplicates from an array.
 *
 * example
 * input: [1, 2, 2, 3, 4, 4, 5]
 * output: [1, 2, 3, 4, 5]
 */

/* METHOD 1 */
// Loop over the array.
// If array[i] is equal to array[i+1], exclude it from pushing into a new array

const numbers = [1, 2, 2, 3, 4, 4, 5];
const filteredArray = [];

function filterNumbers(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1]) {
      filteredArray.push(array[i]);
      console.log(`${array[i]} and ${array[i + 1]} are not equal`);
    }
  }
}

filterNumbers(numbers);
console.log(filteredArray);
