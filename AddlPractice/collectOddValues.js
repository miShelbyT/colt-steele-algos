// PURE recursion
function collectOddValues(arr) {
  // newArray is set to be [] every time. but using .concat below carries along the previous values every time we invoke the function again
let newArray = []

if(arr.length === 0) {
  return newArray
}

if(arr[0] % 2 !== 0) {
  newArray.push(arr[0])
}

newArray = newArray.concat(collectOddValues(arr.slice(1)))
return newArray

}

console.log(collectOddValues([1,2,3,5,6,7,8,9]))


// =========
//  return value looks like this:
// // collectOddValues([1,2,3,4,5])
// [1].concat(collectOddValues([2,3,4,5]))
//                   [].concat(collectOddValues[3,4,5]))
//                         [3].concat(collectOddValues([4,5]))
//                                           [].concat(collectOddValues[5])
//                                                         [5].concat(collectOddValues[])
                                                                            // []
// result of all that concatenation is [1,3,5]


// helper recursion
// function collectOddValues(arr) {
//   // we've set up this outer function so that we can have our array declared inside of a function but not inside the recursive one bc that would always be reset to []
//   let result = []

//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return
//     }
//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0])
//     }
//     helper(helperInput.slice(1))
//   }
//   // here we have to invoke the above helper method
//   helper(arr)

//   return result
// }