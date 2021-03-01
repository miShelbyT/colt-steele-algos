// Implement a function which accepts a variable number of arguments and checks whether there are dupes. Use frequency or multiple pointers pattern.

// set initial obj. set objs to an array and add each item in the array as a key in the object. if object > 1, return true

// frequency counter
function areThereDuplicates(...args) {
  let newObj = {};
  let newArray = [...args];
  // console.log("new array", newArray)
  for (let val of newArray) {
    newObj[val] ? newObj[val] += 1 : newObj[val] = 1;
  } 
  // console.log("object", newObj)
  for (let val1 in newObj) {
    if (newObj[val1] > 1) {
      return true;
    } 
  }
  return false;
}

// really nice alternate solution, also frequency counter:
// function areThereDuplicates() {
//   let collection = {}
//   for(let val in arguments){
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for(let key in collection){
//     if(collection[key] > 1) return true
//   }
//   return false;
// }

//  ============

// // multiple pointers:

// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }

//  ============

// one-liner

// function areThereDuplicates() {
  // Set can not hold duplicates of any element
//   return new Set(arguments).size !== arguments.length;
// }



console.log(areThereDuplicates(12, 34, 46, 24, 11))

console.log(areThereDuplicates("a", "b", "b", 24, 11))


console.log("Hi Shelby!!!")