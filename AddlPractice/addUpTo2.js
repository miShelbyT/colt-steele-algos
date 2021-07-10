function addUpTo(n) {
  return n * (n + 1) / 2;
}
console.log(addUpTo(5))


// checking on performance re. time complexity - this doesn't seem to work in node, but it does work in the console.
let time1 = performance.now()
let time2 = performance.now()
console.log(`Time Elapsed: ${(time2-time1) / 1000} seconds`)