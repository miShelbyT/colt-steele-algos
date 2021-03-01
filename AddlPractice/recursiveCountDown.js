function countDown(num) {
  // break point
  if (num <= 0) {
    console.log("All done!")
    return
    // return exits the function
  }
  // print num
  console.log(num)
  num--
  // recursive function
  countDown(num)
}

// // could write this iteratively 

// function countDown(num) {
//   for(let i = num; i > 0; i--) {
//     console.log(i)
//   }
//   console.log("All done!")
// }





countDown(10)