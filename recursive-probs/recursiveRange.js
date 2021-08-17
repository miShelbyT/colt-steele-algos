function recursiveRange(num) {
  // base case
  if (num === 0) return 0;
  // recursive
  return num + recursiveRange(num - 1)
}

console.log(recursiveRange(10))