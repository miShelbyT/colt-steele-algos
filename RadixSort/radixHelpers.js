// function gets our digit(place)

// // each position represents 1, 10, 100, 1000

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}
// console.log(getDigit(7345,0))
// console.log(getDigit(7345,1))
// console.log(getDigit(7345,2))
// console.log(getDigit(7345,3))

// Math.abs handles the case of checking negative numbers to make sure their place returns +, converts neg numbers to their positive equivalent or any math equation returns the + equivalent.

/* Math.pow() is num to the i power, an exponent. for instance, 
Math.pow(10,2) is 10 ** 2 = 100. 

Then we use % to get remainder after dividing. 

In the case of getDigit(7323, 2) Math.floor(7323/100) = 73 % (modulo) 10. remainder is 3. so in the 100th place, 7323 would be put in the 3 "bucket". */

// ******************* //

// need a helper to determine how many digits are in a number

// function digitCount(num){
//   return num.toString().length
// }

// OR -- CS used math, took this from Stack Overflow:

function digitCount(num) {
  // weird case. Math.log10(0) === -Infinity
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// if considering 423, Math.log10(423) - 10 to what power gives us 423, then rounding down (Math.floor()). This gives us the equivalent of 0th index, 1st, 2nd, third. But we need to start our count with 1 not 0 so we +1 to the above equation.


// console.log(digitCount(1000000))



// and another helper to figure out Max number of digits in a number

function mostDigits(arr) {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    result = Math.max(result, digitCount(arr[i]))
  }
  return result
}


console.log(mostDigits([3,20,5,10]))