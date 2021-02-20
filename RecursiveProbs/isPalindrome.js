function isPalindrome(str) {
  
  function helper(str) {
    // base case
    if (str.length === 0) return str

    let char = str[0]
    // recursive
    return helper(str.slice(1)) + char
  }

  if (str === helper(str)) return true
  else {
    return false
  }

}


console.log(isPalindrome('awesome'))

console.log("hi shelby!!")


// CS solution:
// function isPalindrome(str){
//   if(str.length === 1) return true;
//   if(str.length === 2) return str[0] === str[1];
//   if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//   return false;
// }