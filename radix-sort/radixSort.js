// WORST, BEST, AVERAGE case time complexity: O(nk) two loops (n => length of array, k => average number of digits), the k loop isn't too bad unless one number is very long -- there is an argument that IF the array contains all unique numbers, the time would be O(n log n) due to the way computers store info. this is the same as merge/quickSort methods, see wikipedia on radix sort.
// Space Complexity: O(n+k) bc of creating arrays


// helpers

// function gets our digit(place) -- each position represents 1, 10, 100, 1000

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

// returns the number of digits in a number (i.e., 120 has 3 digits)
function digitCount(num) {
  // weird case. Math.log10(0) === -Infinity
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// uses the above function to loop thru an array and return the number with the most digits.
function mostDigits(arr) {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    result = Math.max(result, digitCount(arr[i]))
  }
  return result
}

// define a function that accepts an array of nums. figure out how many digits the largest digit has (using mostDigits and digitCount). loop from k=0 to the largest number of digits. for each iteration, create buckets 0-9 and put num into the bucket that matches and then return to the original array (or .concat() into a new array), starting this process at the 0th index and continue up to largest number of digits. return list at end!

function radixSort(nums){
  let loopTimes = mostDigits(nums)
  console.log(loopTimes)
  for(let k = 0; k < loopTimes; k++){
    console.log("hi")
    let digitBuckets = Array.from({length: 10}, () => [])
    // create 9 buckets/arrays
// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object. Line 33 says to create 10 empty arrays.
for(let i = 0; i < nums.length; i++){
  let digit = getDigit(nums[i], k)
  // use getDigit(arr[k], k)
  digitBuckets[digit].push(nums[i])
  // gets all digits that match nums[i] at the index of k and pushes into the appropriate bucket
}
nums = [].concat(...digitBuckets)
console.log(nums)
// .concat each bucket to "new" array - positive side effect, spread operator avoids the prob of nested arrays
}

return nums

}


console.log(radixSort([222,140,315,2,14,77,22222222]))