// WITH HELPER
function capitalizeFirst(array) {
  let newArray = []

  function helper(array) {
    if (array.length === 0) return;

    let newWord = array[0]
    // console.log(newWord)
    newWord = newWord.charAt().toUpperCase() + newWord.slice(1)
    // console.log(newWord)
    newArray.push(newWord)
    helper(array.slice(1))
    // console.log(newArray)  
  }

  helper(array)
  return newArray
}


// .join() and .toString() are iterative and take more time complexity O(N)
// using .slice() or array[0] is O(1)


// PURE RECURSION
function capitalizeFirst(array) {
  let newArray = []

    if (array.length === 0) return newArray;

    let newWord = array[0]
    newWord = newWord.charAt().toUpperCase() + newWord.slice(1)
    
    newArray.push(newWord)

    // .concat() carries the values from the previous iterations so we don't overwrite with .push()
  return newArray.concat(capitalizeFirst(array.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

console.log("hi shelby!!")
