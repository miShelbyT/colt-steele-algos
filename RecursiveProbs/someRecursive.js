// need array and c/b function passed thru as arguments. c/b function must return either true or false. if helper function returns true, someRecursive also returns true



function someRecursive(arr, callback) {

    // base case
    if (arr.length === 0) return false
    // callback(arr[0]) should return truthy if its result is truthy,  if it returns falsey then... what
    if (callback(arr[0])) {
      // why does this return true but only once??
      console.log("index", (callback(arr[0])))
      return true;
    }
    // recursive
    return someRecursive(arr.slice(1), callback);

  }

  const isOdd = val => val % 2 !== 0;

  console.log(someRecursive([1, 2, 3, 4, 5, 7, 8], isOdd))
  console.log("hi shelby!!")