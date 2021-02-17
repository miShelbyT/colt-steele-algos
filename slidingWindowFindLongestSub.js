// write function that takes a string and returns the longest substring of consecutive/unique chars

function findLongestSubstring(str){
  let maxStr = "";
  let tempStr = "";
  if(str.length === 0) return 0;

  for(let char of str) {
    while(!maxStr.includes(char)){
      maxStr += char;
    }
}

tempStr = maxStr ;
for(let i = tempStr.length; i < str.length; i ++) {
  
  if(!tempStr.includes(str[i])) {
    tempStr = tempStr.slice(1);
    tempStr += str[i];
    maxStr = Math.max(maxStr.length, tempStr.length);
  }
}
return maxStr.length;
}

console.log(findLongestSubstring(""))

console.log(findLongestSubstring("abbbcd"))
