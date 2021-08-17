function reverse(str) {
  // base case
if(str.length === 0) return str

let char = str[0]

return reverse(str.slice(1)).concat(char)

}


console.log(reverse("tacocat"))
console.log("hi shelby!!")