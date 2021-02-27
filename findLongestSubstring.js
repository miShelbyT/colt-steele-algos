// SLIDING WINDOW -- write function that takes a string and returns the longest substring's length of consecutive/unique chars

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;
 
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }

// OR Ian Rosen's solution which is similar but easier to read:
function findLongestSubstring(str){
  if(str === "") return 0;

  let set  = new Set()
  let left = 0
  let right = 0
  let maxLen = 0

  while(right < str.length) {
    if (!set.has(str[right])) {
      set.add(str[right])
      // console.log(set)
      right ++
    } else {
      set.delete(str[left])
      // console.log(set)
      left ++
    }
    maxLen = Math.max(maxLen, set.size)
  }
return maxLen;
}


// Colt Steele's solution. not really understanding this problem....
// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;
 
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }

console.log(findLongestSubstring(""))

console.log(findLongestSubstring("dogsarethebestpeople"))
