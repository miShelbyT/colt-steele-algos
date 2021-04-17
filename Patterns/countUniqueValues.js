// MULTIPLE POINTERS -- function takes a sorted array and counts the unique values in the array. this is time complexity O(N) and space complexity O(1)
function countUniqueValues(arr) {
  if (arr.length === 0) return 0

  let i = 0
  // loop thru/compare i & j at different indexes, i is 1 less than j
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      // this code temporarily alters the arr[i] element in the array to hold the unique values at the beginning of the array so we can count them at the end
      arr[i] = arr[j]
    }
  }
  // returns the number of unique characters. because they are now stored at the front of the array, we can just use i but have to add 1 because the counting has started at 0
  return i + 1
}


console.log(countUniqueValues([1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 7, 8, 9]))

console.log(countUniqueValues([]))
console.log("hi")
