//  start loop from the end with variable i 

//  start inner loop with variable j that goes from index 0 - (i-1)

// if arr[j] > arr[j+1] => swap

// return sorted array

// Big O (TIME): 
// Best Case  O(N)
// Average O(N^2)
// Worst Case O(N^2)
// SPACE COMPLEXITY: O(1)

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}


function bubbleSort(arr){
  for(let i = arr.length; i > 0; i--){
    for(let j = 0; j < i - 1; j++){
      // console.log(arr[j], arr[j+1])
      if(arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
      }
    }
    // console.log("one pass complete!")
  }
  return arr
  }

  // OPTIMIZED SOLUTION FOR NEARLY SORTED ARRAY - this avoids unnecessary loops

  function bubbleSort(arr){
    let noSwaps
    for(let i = arr.length; i > 0; i--){
      // defaults to true at the beginning of each loop
      noSwaps = true
      for(let j = 0; j < i - 1; j++){
        console.log(arr[j], arr[j+1])
        if(arr[j] > arr[j+1]) {
          swap(arr, j, j+1)
          noSwaps = false
          // sets to false only if there was a swap
        }
      }
      console.log("one pass complete!")
      if(noSwaps) break
      // short circuit if no swaps. brilliant!
    }
    return arr
    }

  //   // another cool way to optimize swaps (n === arr.length):
  //   for (let i = 0; i < n; i++) {
  //     // Track number of elements swapped during a single array traversal
  //     let numberOfSwaps = 0;
      
  //     for (let j = 0; j < n - 1; j++) {
  //         // Swap adjacent elements if they are in decreasing order
  //         if (a[j] > a[j + 1]) {
  //             swap(a[j], a[j + 1]);
  //             numberOfSwaps++;
  //         }
  //     }
      
  //     // If no elements were swapped during a traversal, array is sorted
  //     if (numberOfSwaps === 0) {
  //         break;
  //     }
  // }



console.log(bubbleSort([3,1,5,8,50,100]))