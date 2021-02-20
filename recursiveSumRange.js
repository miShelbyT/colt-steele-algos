function sumRange(num) {
  // break point / base case
  if(num === 1) return 1
  // recursion, this will count down the num + whatever the num returns in the next iteration and again and again and again until it hits 1 and breaks the loop (that isn't actually a loop)
  return num + sumRange(num-1)
}


console.log(sumRange(3))

// sumRange(3)
//      return 3 + sumRange(2)
//                      return 2 + sumRange(1)
//                                      return 1

// as items are returned, the function comes off the callstack and the return value is supplied - callstack actually looks like the inverse of what is above because items are placed (pushed) on the top of the stack and also removed (popped) from the top of the stack