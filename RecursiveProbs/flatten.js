function flatten(arrayOfArrays){

let flatArray = []
for(let i = 0; i < arrayOfArrays.length; i ++) {
  if(Array.isArray(arrayOfArrays[i])) {
    // if an array, you can concat one array with another and they won't be nested!!
    flatArray = flatArray.concat(flatten(arrayOfArrays[i]))
    // console.log("old array is array", flatArray)
  } else {
    // if not an array, then must be an integer which you can push into new array
    flatArray.push(arrayOfArrays[i])
    // console.log("old array is not array", flatArray)
  }
}
return flatArray
}


console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]]))
// flatten([[1],[2],[3]]) // [1,2,3]
console.log(flatten([[[1],[2],[3]]]))
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))