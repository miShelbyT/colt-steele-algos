// break down an array into many arrays that each contain one single element. merge and sort 2 arrays at a time (working just on the left side and separately on the right side - this uses divide and conquer) until you have two arrays, and then merge those two sorted arrays together to form one merged/sorted array!

// NOTE: CS employs more conditionals than I did. He had while (i < arr1.length && j < arr2.length) as well as one additional conditional while (i < arr1.length). 
// plain merge (only works with sorted arrays):

// function merge(arr1, arr2) {
//   let newArray = []
//   let i = 0
//   let j = 0
//   while (i < arr1.length) {
//     if (arr1[i] > arr2[j]) {
//       newArray.push(arr2[j])
//       j++
//     } else {
//       newArray.push(arr1[i])
//       i++
//     }
//   }
//   while (j < arr2.length) {
//     newArray.push(arr2[j])
//     j++
//   }
//   return newArray
// }

// AHA! using the conditionals above there could be unexpected behavior re. continued looping compared with undefined. it does seem to work but you never know re. memory storage, say of arr[j] iterating past what exists in the arr

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


console.log(merge([1, 3, 5, 7, 9, 10, 13, 50], [1]))