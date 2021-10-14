// we are going to store hex colors in a array-like Map that we will build!
// let newhashTable = new Hashtable()
// new Array.length(99).fill(0)

//we want human readability and also computer readability
//we will build a hashing function to turn "pink" into a number!


// "pink" => "#FFC0CB"

class HashTable {
  constructor(size=10) {
    this.keyMap = new Array(size)
  }

  // hashes often make use of prime numbers to randomize the output and greatly reduce collisions
   _hash(key) {
      let total = 0
      let WEIRD_PRIME = 31 
      //this would hypothetically control for very long keys which we won't encounter here
      for(let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let val = char.charCodeAt() - 96 // for lower case letters, this lets our output number be between 1 and 26
        total = (total * WEIRD_PRIME + val) % this.keyMap.length
      }
      return total
    }

    set(key, value) {
      let hashedIdx = this._hash(key)
      //if there is nothing at this index, just set it as an empty array! then whichever way, we push the key/value on line 33
        if(!this.keyMap[hashedIdx]) this.keyMap[hashedIdx] = []
        this.keyMap[hashedIdx].push([key, value])
        // we should change logic to look for the key. if we find it, overwrite the value so we don't have duplicate keys. 
    }

    get(key) {
      let hashedIdx = this._hash(key)
      // console.log(hashedIdx)
      if(this.keyMap[hashedIdx]){
        for(let i = 0; i < this.keyMap[hashedIdx].length; i++) {
          if(this.keyMap[hashedIdx][i][0] === key) return this.keyMap[hashedIdx][i][1]
        } 
      }
      return undefined
    }

    keys() {
      let keysArr = []
      for(let i = 0; i < this.keyMap.length; i++) {
        if(this.keyMap[i]) {
          for(let j = 0; j < this.keyMap[i].length; j ++) {
            //this avoides dupes in our keys array
            if(!keysArr.includes(this.keyMap[i][j][0])) keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
      return keysArr
    }

    values() {
      let valuesArr = []
      for(let i = 0; i < this.keyMap.length; i++) {
        if(this.keyMap[i]) {
          for(let j = 0; j < this.keyMap[i].length; j ++) {
            //this avoides dupes in our values array
            if(!valuesArr.includes(this.keyMap[i][j][1])) valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
      return valuesArr
    }
    
    // we want one more function to grab all keys and another to return all the values

  
}

// //this is not constant time! O(n) - this is a little too random in terms of output
// function hash(key, arrLen) {
//   let total = 0
//   key = key.split("")
//   key.forEach(char => total += (char.charCodeAt() - 96))
//   //here we get remainder => charCodeSum % length of array. this way we can keep our array length dynamic 👍
//   return total % arrLen
// }


let newHash = new HashTable()
newHash.set("maroon", "red")
newHash.set("yellow", "sun")
newHash.set("olive", "drab")
newHash.set("salmon", "pink")
newHash.set("lightcoral", "light pink")
newHash.set("mediumvioletred", "drama")
newHash.set("violet", "purple")
newHash.set("plum", "purple")
newHash.set("blueviolet", "purple")
newHash.set("are we done?", "yes")
console.log(newHash)
// console.log(newHash.get("maroon"))
// console.log(newHash.get("yellow"))
// console.log(newHash.get("plum"))
// console.log(newHash.get("lightcoral"))
// console.log(newHash.get("mediumvioletred"))
// console.log(newHash.get("is anyone here"))
// console.log(newHash.get("are we done?"))
// console.log(newHash.keys())
// console.log(newHash.values())

