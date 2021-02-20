function fib(num){
  // add whatever parameters you deem necessary - good luck!  
  if(num <= 2) return 1;
  return fib(num - 2) + fib(num - 1);
}


console.log(fib(4))