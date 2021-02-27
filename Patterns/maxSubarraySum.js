// SLIDING WINDOWS -- write a function which accepts an array of integers and a number (n). The function should calculate the max sum of n consecutive elements in the array.

// // naive/simplest version would involve nested loops and compare them (time complexity O(N^2)) :

// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     return null
//   }
//   let max = -Infinity
//   for (let i = 0; i < arr.length - num + 1; i++) {
  // i < arr.length - num + 1 -- allows i to stop iterating after it has added up the last complete sum of num elements. (if it should loop one further it would be counting num - 1 elements)
//     temp = 0
//     for (let j = 0; j < num; j++)
//       temp += arr[i + j]
//     if (temp > max) {
//       max = temp
//     }
//     console.log(temp, max)
//   }
//   return max
// }

// better version time complexity O(N) only iterating thru length of array one time! - first loop only adds the num of indexes together

function maxSubarraySum(arr, num) { 
let maxSum = 0
let tempSum = 0
if(arr.length < num) return null
// one brief iteration gets you your first window/sum, set to maxSum
for (let i = 0; i < num; i ++) {
  maxSum += arr[i]
}

// set tempSum to maxSum so you can do the math below
tempSum = maxSum
// i begins on the index after the above window ends
for (let i = num; i < arr.length; i ++) {
  // this takes the previous sum, subtracts the value of the first index and adds the value of the subsequent index. sliding window!
  tempSum = tempSum - arr[i - num] + arr[i]
  maxSum = Math.max(maxSum, tempSum)
}
return maxSum
}


console.log(maxSubarraySum([2, 4, 5, 7, 2, 9, 5, 1, 4], 3))


console.log("hi")