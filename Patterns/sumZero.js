// MULTIPLE POINTERS -- ONLY WORKS ON A SORTED ARRAY - creating pointers or values that correspond to an index or position and move towards the beginning end or middle based on a certain condition. Very efficient for solving problems with mininal space complexity.

// // here we are looking for the first two elements in a sorted array that add up to zero. simplest/naive solution has time complexity of O(N^2) & space complexity of O(1) because of nested loops


// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for(let j = i+1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

// time complexity of O(N) (linear) & space complexity of O(1) (constant)
function sumZero(arr) {
  let left = 0
  let right = arr.length - 1
  // we want left < right so we don't swap left and right and run unnecessary operations. also we don't want to subtract a number from itself. that would return 0, a false positive
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

console.log(sumZero([-7, 2, 3, 6, 8, 9]))

console.log("hi")