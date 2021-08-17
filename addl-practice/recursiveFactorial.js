// num! is a factorial. if num = 3, 3! === 3 * 2 * 1

function factorial(num){
  // break point/base case to end function
  if(num === 1) return 1
  // recursive function calls itself -= 1
  return num * factorial(num-1)
}


// // non-recursive
// function factorial(num){
//   let total = 1
//   for(let i = num; i > 1; i--) {
//     total *= i
//   }
//   return total
// }


console.log(factorial(5))