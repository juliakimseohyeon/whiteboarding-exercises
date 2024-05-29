// input - "4161234567" output -"(416) 123-4567"
// input - "(416) 12a-34567bcd" output - "(416) 123-4567"

// Step 1: Convert string into array
// Step 2: Filter through array and only return if it is an integer
// Step 3: Splice "(" ")" and "-" into the new array
// Step 4: Convert newly filtered array back into string

const incorrectPhoneNum = "416 12a-34567bcd";
const phoneNumArr = incorrectPhoneNum.split("");

const filteredPhoneNumArr = phoneNumArr.filter((number) => {
  const numberfiedNumber = parseInt(number);
  if (typeof numberfiedNumber === "number") {
    return numberfiedNumber;
  }
});

const fixPhoneNumFormat = () => {
  filteredPhoneNumArr.unshift("(");
  filteredPhoneNumArr.splice(4, 0, ") ");
  filteredPhoneNumArr.splice(8, 0, "-");
  return filteredPhoneNumArr;
};

const completePhoneNum = fixPhoneNumFormat().join("");

console.log(completePhoneNum);
