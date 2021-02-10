function addUpTo(n) {
  return n * (n + 1) / 2;
}

// checking on performance re. time complexity

let time1 = performance.now()
addUpTo(1000000)
let time2 = performance.now()
console.log(`Time Elapsed: ${(time2-time1) / 1000} seconds`)