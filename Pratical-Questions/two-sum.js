// Write a function of two sum number?

const myarr = [1, 2, 3, 4, 5, 6, 7, 8];

function addSum(number) {
  let storeNumber = 0;
  for (let i = 0; i < number.length; i++) {
    storeNumber = storeNumber + number[i];
  }
  return storeNumber;
}
console.log(addSum(myarr));
