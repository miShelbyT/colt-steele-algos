// create variable minValue. compare minValue to next element. check for smallest value and continue with whichever element[i] is smaller. at end of loop swap smallest value with arr[0]. then start again with arr = arr.slice(1)

// Big O: 
// Best Case  O(1)
// Worst Case O(N^2)

// far fewer less swaps than bubble sort but still O(^N)

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}


function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let lowest = i
    // start at 1 after i so we can compare i and j
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[lowest]) {
        lowest = j
    }
  }
  if(i !== lowest) swap(arr, i, lowest)
}
  return arr
}

console.log(selectionSort([3,8,75,50,100,200]))

// i,j,lowest(begins as i)
// 0,1,stays i(0)
// 1,2,stays 0
// 2,3,stays 0
// 3,4,stays 0
// 4,5,stays 0
// no swap