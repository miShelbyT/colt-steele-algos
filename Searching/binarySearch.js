// function accepts a sorted array (nums) and a value. 
// need left pointer, right pointer at end of arr. and var for middle index
// if val does not exist in array, return -1

// function binarySearch(arr, val) {
//   // add whatever parameters you deem necessary - good luck!

//   let left = 0;
//   let right = arr.length - 1

//   while (left <= right) {
//     // this variable should sit inside the loop so it'll be dynamic and know it needs to change
//     let middle = Math.floor((right + left) / 2)
//     if (arr[middle] < val) {
//       left = middle + 1
//     } else if (arr[middle] > val) {
//       right = middle - 1
//     } else if (arr[middle] === val) {
//       return middle
//     }
//   }
//   return -1
// }

// // OR like this -- we'd have to add a second conditional on line 32 bc if the val is not in the arr we'll have an infinite loop because we've never met the condition to break out of the while loop:

function binarySearch(arr, val) {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)
  // or could be Math.ceil if we wanted
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1
    else start = middle + 1
    middle = Math.floor((start + end) / 2)
  }
// my fave ternary!!!
  return arr[middle] === val ? middle : -1
}




console.log(binarySearch([2, 4, 6, 17, 20, 24, 34, 50], 34))

console.log(binarySearch([2, 4, 6, 17, 20, 24, 34, 50], 6))

console.log(binarySearch([2, 4, 6, 17, 20, 24, 34, 50], 0))