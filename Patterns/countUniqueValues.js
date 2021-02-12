// function takes a sorted array and counts the unique values in the array. this is time complexity O(N) and space complexity O(1)
function countUniqueValues(arr) {
  if(arr.length === 0) {
    return 0
  } else {
    let i = 0
    for(let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++
        arr[i] = arr[j]
      } 
    }
  return i + 1
  }
}


console.log(countUniqueValues([1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 7, 8, 9]))

console.log(countUniqueValues([]))
console.log("hi")
