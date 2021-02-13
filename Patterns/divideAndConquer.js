// divides a data set into smaller chunks and then repeating the process with a subset of data - this pattern can tremendously decrease time complexity (when does correctly).



// this function takes an array of SORTED integers and a num, and returns the index where that num value is located inside the array

// // naive approach with one loop (O(N)):

// function search(arr, val) {
//   for (let i = 0; i < arr.length; i ++) {
//     if(arr[i] === val){
//       return i
//     }
//   }
//   return -1
// }

// this is called a binary search and it only works on sorted arrays but it has significantly lower time complexity - Log(N) which is close to Constant Time:

// we chunk the array in half! middle is the index ~ halfway thru the arr (using Math.floor) if arr[middle < val] we increase the min index by one and "chunk what's left of" the array in half again (we haven't actually mutated the arry ay btw). if it is more than val (i.e., if we overshot the amouont of val) we decrease the middle index by 1. This way we don't have to iterate thru the whole array at all!
function search(arr, val) {
  let min = 0
  let max = arr.length - 1

  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    // let currentElement = arr[middle]

    if (arr[middle] < val) {
      min = middle + 1
    }
    else if (arr[middle] > val) {
      max = middle - 1
    }
    else {
      return middle
    }
  }
  return -1
}



console.log(search([1, 3, 5, 7, 9], 5))

console.log("hi shelby!")

// examples to follow