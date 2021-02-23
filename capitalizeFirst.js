function capitalizeFirst(array) {
  let newArray = []

    if (array.length === 0) return newArray;

    let newWord = array.slice(0, 1)
    newWord = newWord.toString().charAt().toUpperCase() + newWord.toString().slice(1)
    // console.log(newWord)
    // console.log(typeof newWord)
    newArray.push(newWord)
    // console.log(newArray)
  return newArray.concat(capitalizeFirst(array.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

console.log("hi shelby!!")
