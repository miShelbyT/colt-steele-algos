// write a function that accepts two parameters - an array of positive ints and one positive int. return the minimal length of a contiguous subarray that is greater to or === to the int. if nothing matches this deliv, return 0.



function minSubArrayLen(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  let minArray = [...arr, 1];
  // starting with the an array one int longer than the array being passed thru

  let tempArray = []
  let maxArray = []
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let sumTotal = arr.reduce(reducer, 0)
  if (sumTotal < num) {
    return 0
  }
  // iterating thru array to find subset that is === or > than num
  for (let i = 0; i < arr.length; i++) {
    if (maxSum < num) {
      maxSum += arr[i];
      maxArray.push(arr[i])
    }
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    tempArray = maxArray.shift().push(arr[i])
    if (tempSum > num && tempArray.length < minArray.length) {
      minArray = maxArray
      
    }
  } 
  return minArray.length;
}

console.log(minSubArrayLen([2, 5, 15, 35, 1, 8], 50))

// console.log(maxSubarraySum([1, 3, 5], 3))

// console.log("Hi shelby!!!")