// naive string search O(N^2)

// checking the number of times a smaller string appears in a longer string

// create variable total. loop over longer string, loop over shorter string. if characters match, iterate over short string. if there's a total match increment the total += 1

function naiveSearch(longstr, shortstr){
let total = 0
for(let i = 0; i < longstr.length; i++){
  for(let j = 0; j < shortstr.length; j++){
    // if we wanted to console.log(longstr[i], shortstr[j]) this is where we would do it
    if(shortstr[j] !== longstr[i + j]) break
      // this breaks us out of the inner loop so we can go back to the outer loop. inner loop restarts at 0
    if(j === shortstr.length - 1) total++
  }
}
return total
}


console.log(naiveSearch("haphappydogshappytogetherhaphaphap", "hap"))