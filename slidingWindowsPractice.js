// given an array of integers and a number, write a function which finds the max sum of a subarray within the length of the number passed to the function.



function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length < num) return null;
  for(let i = 0; i < num; i ++) {
      maxSum += arr[i];
      // for our first round, if num = 3, maxSum would start with indexes 0, 1, 2
      // round two, maxSum would => indexes 1, 2, 3
  }
  tempSum = maxSum;
  for(let i = num; i < arr.length; i ++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      // this would take tempSum array, remove index 0 ([i - num] => 3-3) and add index 3
      // then we compare maxSum and tempSum
      // round two, tempSum would remove index 1 ([i - num] => 4-3) and add index 4
      // then again we compare maxSum and tempSum
      maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}


console.log(maxSubarraySum([1000, 200, 300, 400], 2))

console.log(maxSubarraySum([1, 3, 5], 3))

console.log("Hi shelby!!!")