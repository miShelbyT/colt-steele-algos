// MULTIPLE POINTERS -- write a function which takes in two strings and checks whether the characters in str1 appear in second string, in the correct order. str2 can have other characters in between str1 chars but they do have to be in correct order.


// function isSubsequence(str, str2) {
//   let left = 0
//   let newStr = ""
//   for (let char of str2) {
//     if (str[left] === char) {
//       newStr += char
//       left++
//     }
//   } if(str.includes(newStr)) {
//     return true
//   } else return false
// }

// iterative - multiple pointers

// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

// recursive but not O(1) - this one is cool!!


function isSubsequence(str1, str2) {
  // edge cases
  if(str1.length === 0) return true
  if(str2.length === 0) return false
// if str[i] chars are the same, return both sliced strings (.slice(1))
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  // otherwise return string1 (not sliced) and string2.slice(1)
  return isSubsequence(str1, str2.slice(1))
}



console.log(isSubsequence('hello', 'hello world'))

console.log(isSubsequence('abc', 'acb'))

console.log("hi shelby!!")