// this uses recursion!!
// break an array into halves using slice
// break those into an array into halves
// base case array.length <= 1
// then use merge function to put it all back together

// WORST, BEST, AVERAGE case time complexity: O(n log n)
// Space Complexity: O(n) - the more we split our arrays, the more memory we'll need for those additional arrays


function merge(arr1, arr2) {
  let newArray = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      newArray.push(arr2[j])
      j++
    } else {
      newArray.push(arr1[i])
      i++
    }
  }
  while (i < arr1.length) {
    newArray.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    newArray.push(arr2[j])
    j++
  }
  return newArray
}


function mergeSort(arr){
// base case 
if(arr.length <= 1) return arr
let partialArrayIdx = Math.floor(arr.length/2)
let left  = mergeSort(arr.slice(0,partialArrayIdx))
let right = mergeSort(arr.slice(partialArrayIdx))

return merge(left, right)

}


console.log(mergeSort([10,3,50,33,29,10,33,1,3,100,55]))