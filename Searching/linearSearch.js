// pseudocode:
// function accepts an array and a value. loop thru array and check to see if the element === value. if yes, return the index. if not, return -1. i wasn't sure if i could do forEach. CS says yes!


function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i
  }
  return -1
}

console.log(linearSearch([2, 3, 4, 6, 8, 9], 10))