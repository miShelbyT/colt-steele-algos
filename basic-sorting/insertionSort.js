// sorted portion of array starts at 0. pick second element and compare to first, either insert before 0 or leave where it is. then [0,1] are considered the sorted portion of the array. and on and on until the whole array is sorted.

// Big O (TIME): 
// Best Case  O(N)
// Average O(N^2)
// Worst Case O(N^2)
// SPACE COMPLEXITY: O(1)
// if almost all sorted it has great time complexity. it's also very good for data that comes in on an ongoing basis.


const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}


function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i]
    for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j]
      // takes value of j and shifts it one over to j + 1. value of j + 1 has already been saved to currentVal and will be inserted in the correct index after we've broken out of the loop
    }
    arr[j + 1] = currVal
  }

  return arr
}



console.log(insertionSort([3, 20, 10, 6, 17, 1]))