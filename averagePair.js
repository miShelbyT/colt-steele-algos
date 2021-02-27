// MULTIPLE POINTERS -- write a function, given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches.


// set pointer on left and one on right. while left is less than right (so they don't switch places and compare again unnecessarily) check to see if the average of the two numbers === target number. this is a sorted array so move left or right depending on whether the sum is < or > the target number.

function averagePair(arr, num){
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
      let average = (arr[left] + arr[right]) / 2;
      if(average === num) {
          return true;
      }
    if(average > num) {
              right --;
      } else if (average < num) {
              left ++;
      }
  } return false;
  }

  console.log(averagePair([1,3,4,6,8], 5))

  console.log("hi shelby!!")