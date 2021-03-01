// swapping, good helper to have for use in other algos:

// ES5
function swap(arr, index1, index2){
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

// ES6 - this one is very easy for me to visualize
const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}