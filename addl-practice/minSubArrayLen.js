// SLIDING WINDOW -- write a function that accepts two parameters - an array of positive ints and one positive int. return the minimal length of a contiguous subarray that is greater to or === to the int. if nothing matches this deliv, return 0.


// need 4 variables: 
// two pointers, left and right
// need to keep track of sum inside the window to know when we are >= sum variable passed thru
// need variable that points to minimal length of subarray that are the sum >=


function minSubArrayLen(arr, sum) {
  // // perhaps unnecessary edge case: if array is empty return 0
  //   if (arr.length === 0) {
  //     return 0
  //   }

  let right = 0
  let left = 0
  let tempSum = 0
  let minArrayLen = arr.length + 1

  while (left < arr.length) {
    // console.log("left", left, "right", right, "tempSum", tempSum)
    if (tempSum < sum && right < arr.length) {
      tempSum += arr[right]
      right++
      // once current total >= to sum we can slide the window over and check the sum
    } else if (tempSum >= sum) {
      minArrayLen = Math.min(minArrayLen, (right - left));
      tempSum -= arr[left]
      left++
      // we will bounce back and forth between these two conditions and end up with the shortest array length once we've iterated thru the array. because left will never be >= arr.length we have to break out of the the loop
    } else {
      break
  }
}
return (minArrayLen === arr.length + 1) ? 0 : minArrayLen

}


console.log(minSubArrayLen([2, 5, 15, 35, 1, 8], 22))

console.log(minSubArrayLen([1, 3, 5], 33))

console.log("Hi shelby!!!")

// function minSubArrayLen(arr, sum) {
//   let sum1 = 0;
//   let sum2 = 0
//   let minArrayLength = arr.length + 1
//   // starting with the an array one int longer than the array being passed thru

//   const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   let sumTotal = arr.reduce(reducer, 0)
//   // checking to see if sum of array > sum
//   if (sumTotal < sum) {
//     return 0;
//   }
//   // iterating thru array to find subset that is === or > than sum
//   for (let i = 0; i < arr.length; i++) {
//     if (maxSum < sum) {
//       maxSum += arr[i];
//       maxArray = [...maxArray, arr[i]]
//     }
//   }
//   if(maxArray.length < minArray.length){
//     minArray = maxArray
//   }
//   tempSum = maxSum

//   for (let i = maxArray.length; i < arr.length; i++) {
//     console.log("i'm in this loop")
//     tempSum = tempSum - arr[i - maxArray.length] + arr[i];
//     tempArray = maxArray.slice(1)
//     tempArray = [...tempArray, arr[i]]
//     if(tempSum >= sum && tempArray.length < minArray.length) {
//       minArray = tempArray
//     }
//   }
//   return minArray.length;
// }

