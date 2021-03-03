// pivot or partition helper:

// select one element (pivot) in array. all other elements < pivot are moved to the left of the element. all elements > pivot move to the right. order of elements relocated to the left and the right of el does not matter

// it will help to accept 3 arguments: an array, start index which defaults to 0 and end which defaults to arr.length + 1

// variables: pivot starts at arr[start], swapIdx = start (this will ultimately be the number of elements that are < pivot and the idx that pivot moves to). function will return swapIdx at the end. if pivot > arr[i], swapIdx++ and swap swapIdx and i, finally swap pivot to arr[swapIdx]
//return swapIdx


// // ES6 swap: 
// const swap = (arr, idx1, idx2) => {
// [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
// }

function pivot(arr, start=0, end=arr.length+1){
  // this provides indices so we can make swaps
function swap(arr,i,j){
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
// we are starting pivot at the 0th idx
let pivot = arr[start];
let swapIdx = start;
for(let i = start + 1; i < arr.length; i++){
  if (pivot > arr[i]){
    swapIdx++
    swap(arr, swapIdx, i)
    console.log(arr, swapIdx)
  }
}

  swap(arr,start,swapIdx)
  console.log(arr, swapIdx)
  return swapIdx
}


console.log(pivot([9,20,1,17,5,35,4]))