// creating pointers or values that correspond to an index or position and move towards the beginning end or middle baseed on a certain condition. Very efficient for solving problems with mininal space complexity.

// // simplest/naive solution has time complexity of O(N^2) & space complexity of O(1) because of nested loops


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