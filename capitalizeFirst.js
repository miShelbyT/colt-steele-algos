function capitalizeFirst(array) {
  let newArray = []

  function helper(array) {
    if (array.length === 0) return;
    let newWord = array.slice(0, 1)
    newWord = newWord.toString().charAt().toUpperCase() + newWord.toString().slice(1)
    // console.log(newWord)
    // console.log(typeof newWord)
    newArray.push(newWord)
    // console.log(newArray)
    helper(array.slice(1))
  }
  helper()

  return newArray;
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

console.log("hi shelby!!")
