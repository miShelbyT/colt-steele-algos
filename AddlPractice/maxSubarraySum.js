// SLIDING WINDOWS -- given an array of integers and a number, write a function which finds the max sum of a subarray within the length of the number passed to the function.



function maxSubarraySum(arr, num){
  if(arr.length < num) return null;
  
  let total = 0;
  for(let i = 0; i < num; i ++) {
    total += arr[i];
      // only one small iteration, if num = 3, total would be indexes 0, 1, 2
  }
  let tempTotal = total;
  for(let i = num; i < arr.length; i ++) {
    tempTotal = tempTotal - arr[i - num] + arr[i];
      // this would take tempTotal array, remove index 0 ([i - num] => 3-3) and add index 3
      // then we compare total and tempTotal
      // round two, tempTotal would remove index 1 ([i - num] => 4-3) and add index 4
      // then again we compare total and tempTotal
      total = Math.max(total, tempTotal);
  }
  return total;
}


console.log(maxSubarraySum([1000, 200, 300, 400], 2))

console.log(maxSubarraySum([1, 3], 3))

console.log("Hi shelby!!!")