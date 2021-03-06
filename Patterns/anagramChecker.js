// FREQUENCY COUNTER -- given two strings, write function that returns true if the strings are anagrams of each other. use frequency counter, not a nested loop, to reduce time complexity!

// // long way, set up two objects and compare them to each other
// function anagramChecker(str1, str2){
//   if (str1.length !== str2.length) {
//      return false;
//    }
//    let anagramObj1 = {};
//    let anagramObj2 = {};
 
//    for (let val of str1) {
//     //  anagramObj1[val] = (anagramObj1[val] || 0) + 1; OR with my fave ternary
//     anagramObj1[val] ? anagramObj1[val] += 1 : anagramObj1[val] = 1
//    }
//    for (let val of str2) {
//      anagramObj2[val] = (anagramObj2[val] || 0) + 1;
//    }
  
//    for (let key in anagramObj1) {
//      if (!(key in anagramObj2)) {
//       //  console.log("oops not a match here");
//        return false;
//      } if (anagramObj2[key] !== anagramObj1[key]) {
//       //  console.log("oops not a match here either");
//        return false;
//      }
//    }
//    return true;
//  }

// console.log(anagramChecker("yahppiiy", "yhappy"))

// console.log("hi")

// work off of the first object for nice/simple solution:

function anagramChecker(str1, str2) {
if (str1.length !== str2.length) {
  return false
}

const lookupObj = {}

for (let i = 0; i < str1.length; i ++) {
  // setting variable to make lookup simpler
  let letter = str1[i]
  lookupObj[letter] ? lookupObj[letter] += 1 : lookupObj[letter] = 1
}
for (let i = 0; i < str2.length; i ++) {
  let letter = str2[i]
  // looping thru to see if index from str2 is in the original object
  if (!lookupObj[letter]) {
    return false
  } else {

    lookupObj[letter] -= 1
  }
}

return true

}

console.log(anagramChecker("happyy", "happy"))

console.log("hi")

