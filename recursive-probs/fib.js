// write a recursive function which accepts a number and returns the nth number in the Fibanacci sequence. Fibanacci is a series of whole numbers where every number is the sum of the previous two numbers: 1,1,2,3,5,8,13,21,34,55... (can be written starting with 0. if so the base case should be if(num <=3) return 1)
// function fib(num){
//   if(num <= 2) return 1;
//   return fib(num - 2) + fib(num - 1);
// }

// console.log(fib(4))

// // not sure how to do this recursively. maybe with a helper function?
// function buildFib(num) {
//   if (num <= 0) return []
//   if (num === 1) return [0]
//   let result = [0, 1]
//   let i = 1
//   while (i < num-1) {
//     let addIn = result[i] + result[i - 1]
//     result.push(addIn)
//     i++
//   }

//   return result
// }

// recursively with a helper function!
function buildFib(num) {
  if (num <= 0) return []
  if (num === 1) return [0]
  let result = [0, 1]
  let i = 1

  function helper(){
    result.push(result[i] + result[i - 1])
  }
  while(i < num-1){
    helper(i)
    i++
  }

  return result
}


console.log(buildFib(7))
