// pivot or partition helper: select one element (pivot) in array. all other elements < pivot are moved to the left of the element. all elements > pivot move to the right. order of elements relocated to the left and the right of pivot does not matter

// function will accept 3 arguments: an array, start index (which defaults to 0) and end (which defaults to arr.length + 1)

// variables: pivot starts at arr[start], swapIdx = start (this will ultimately be the number of elements that are < pivot and the idx that pivot moves to). function will return swapIdx at the end. if pivot > arr[i], swapIdx++ and swap swapIdx and i, finally swap pivot to arr[swapIdx]
//return swapIdx

// BEST, AVERAGE case time complexity: O(n log n) same as mergeSort. splitting/comparisons
// WORST case time complexity (can happen if pivot is always smallest or largest element in list): O(n^2) - O(n) splits, O(n) comparisons -- solution is we can just pick a random pivot or a medium element.
// Space Complexity: O(n) - the more we split our arrays, the more memory we'll need for those additional arrays


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
    // console.log(arr, swapIdx)
  }
}

  swap(arr,start,swapIdx)
  // console.log(arr, swapIdx)
  return swapIdx
}

// quickSort: call pivot helper on full array. then recursively call pivot helper on left subarray and right subarray (not actually including the pivot idx, we want to leave that in place). WE DO NOT CREATE NEW ARRAYS. 

// console.log(pivot([9,20,1,17,5,35,4]))

function quickSort(arr, left = 0, right= arr.length -1){
  // once left === right, our subarray.length === 1 we break out of loop. this is our base case
  if(left < right) {
    let pivotIdx = pivot(arr, left, right)
    // left
    quickSort(arr,left, pivotIdx - 1)
    // right
    quickSort(arr,pivotIdx + 1, right)
  }
return arr
}

console.log(quickSort([9,20,100,1,17,2,15,5,35,4]))