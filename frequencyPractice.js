
// Write a frequency counter, given two positive integers, find out if the two numbers have the same frequency of digits. Required: Time O(N)

// start by checking to see if num1 and num2 are same length. if not, function returns false

// set 2 literal objects/variables

// set a separate for of loop over each num1/num2 if key for each integer exists in the object, +=1. otherwise set that key = 1

// compare each object to the other. if they are not the same return false

// it seems that numbers aren't iterable. so i changed num1 and num2 to strings!


function sameFrequency(num1, num2){
  if(num1.length !== num2.length) {
      return false;
  }
  let freq1 = {};
  let freq2 = {};
  num1 = num1.toString();
  num2 = num2.toString();
  for(let val of num1) {
     freq1[val] ? freq1[val] += 1 : freq1[val] = 1;
  } for(let val of num2) {
     freq2[val] ? freq2[val] += 1 : freq2[val] = 1;
  } for (let key in freq1) {
      if(freq1[key] !== freq2[key]) {
          return false;
      }
  }
  return true;
}


console.log(sameFrequency(423, 32411))

console.log("Hi shelby!!")