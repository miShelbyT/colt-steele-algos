// SLIDING WINDOWS -- given an array of integers and a number, write a function which finds the max sum of a subarray within the length of the number passed to the function.



function maxSubarraySum(arr, num){
  if(arr.length < num) return null;
  
  let total = 0; // we might start at -Infinity if dealing with negative numbers
  for(let i = 0; i < num; i ++) {
    total += arr[i];
      // only one small iteration to determine the first subarray, if num = 3, total would be indexes 0, 1, 2
  }
  let tempTotal = total;
  // again, i starts at num and then iterates from there. so if num = 3, i = 3 also but then the next time thru i = 4 then i = 5 until we've looped to the end of the array. that's what is so great about arr[i - num]. it always subtracts the first el in the window (starting at idx 0) so we can slide forward
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