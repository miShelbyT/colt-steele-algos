// check to see if two arrays are the same in frequency/value. in this case, arr2 should be squared value of arr1

// // this is a "naive" solution - time complexity: O(n^2) because of the nested loops (for loop and indexOf). 
// function same(arr1, arr2) {
//   // if arrays are not equal in length then we know that they are not a match
//   if(arr1.length !== arr2.length) {
//     return false
//   }
//   for(let i = 0; i < arr1.length; i++) {
//     // indexOf returns the index of the value in question
//     let correctIndex = arr2.indexOf(arr1[i] ** 2)
//     // if there is not a match in the array, -1 is automatically returned
//     if(correctIndex === -1) {
//       return false
//     }
//     // .splice removes 1 element at the index of correctIndex
//     arr2.splice(correctIndex,1)
//   }
//   // console.log("true")
//   return true
// }

// better to do 3 separate loops O(n*3) which is really O(n) than 2 nested loops O(N^2).
// linear time is always more efficient than quadratic time.
function same(arr1,arr2) {
  if(arr1.length !== arr2.length) {
        return false
  }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
      if(!(key ** 2 in frequencyCounter2)) {
        return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        return false
      }
    }

return true

}


console.log(same([3,1,2,3], [1,4,9,9]))

console.log('hi')