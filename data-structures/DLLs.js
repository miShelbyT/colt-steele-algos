// Node will have val, next and previous

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

// DLL will have head, tail, length

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // add to end of list
  push(val) {
    let newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      // adds new node, connecting it to the tail (because this is .push())
      this.tail.next = newNode
      // we need the reference from the end node to its prev node
      newNode.prev = this.tail
      // update the tail
      this.tail = newNode
    }

    this.length++
    return this
  }

  // remove from end of list
  pop() {
    if (this.length === 0) return undefined
    // OR if (!this.head) return undefined
    let removed = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = removed.prev
      this.tail.next = null
      // have to remember to remove prev reference otherwise removed node still has access to the rest of the list
      removed.prev = null
    }
    this.length--
    return removed
  }

  // remove from the beginning of the list
  shift() {
    if (this.length === 0) return undefined
    let removed = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = removed.next
      this.head.prev = null
      removed.next = null
    }
    this.length--
    return removed
  }

  // push onto the beginning of the list
  unshift = (val) => {
    let newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
    return this
  }


  // check for valid idx, if >= list.length or if the idx is negative, return undefined. if idx > idx.length / 2 then we will start our search from this.tail. otherwise we will start at this.head
  get = (idx) => {
    if (idx < 0 || idx >= this.length) return undefined
    let count, current; // we can declare both variables in one line!
    // can be <= we get to decide where "half" is for iterative purposes.
    if (idx < this.length / 2) {
      // console.log("WORKING FRON START") lol
      count = 0
      current = this.head
      while (count !== idx) {
        current = current.next
        count++
      } 
    } else {
      // console.log("WORKING FROM ENDDD")
      count = this.length-1
      current = this.tail
      while(count !==idx) {
        current = current.prev
        count--
      }
    }
    return current
  }

  set(newVal, idx) {
    let val = this.get(idx)
    if(val !== undefined) {
      val.val = newVal
      return true
    } 
    return false
  } 

  insert(val, idx) {
    // if idx is not valid, return false
    // if idx === 0 => unshift
    // if idx === list.length => push (last node is list.length - 1)
    // otherwise use get to determine idx - 1 and make the connections
    // idx - 1 should point to new node, new node should point to idx, idx.prev should NOT point to prev prev but to new node
    // length ++ and return true
    if(idx < 0 || idx > this.length) return false
    if(idx === 0) return !!this.unshift(val) //adding these bangs allows us to return t/f like the rest of these conditionals do
    if(idx === this.length) return !!this.push(val)

    // don't need else conditional bc above conditions return and exit this function
    let newNode = new Node(val)
    let prevNode = this.get(idx - 1)
    let afterNode = prevNode.next
    // optionally pairing actions together. i choose to pair by two nexts and then two prevs.
    prevNode.next = newNode
    newNode.next = afterNode

    afterNode.prev = newNode
    newNode.prev = prevNode

    this.length ++
    return true
  }

  remove(idx) {
    // if idx === 0 use shift. if idx === length - 1 use pop
    // otherwise use get, save to a variable. then update our connections prev and next
    // found (deleted) node should have prev and next set to null. 
    // decrement the length, return the node
    if(idx < 0 || idx >= this.length) return undefined

    if(idx === 0) return this.shift()
    if(idx === this.length-1) return this.pop()

    let foundNode = this.get(idx)
    let prevNode = foundNode.prev
    let nextNode = foundNode.next

    prevNode.next = nextNode
    nextNode.prev = prevNode

    foundNode.next = null
    foundNode.prev = null

    this.length --
    return foundNode
  }



}


let newList = new DoublyLinkedList()
newList.push(2)
newList.push(5)
// console.log(newList, newList.length)
newList.push("hi there")
// newList.shift()
newList.unshift("sexy")
newList.unshift("dude")
newList.insert("noiiiice", 3)
newList.insert("lurv", 0)

newList.remove(6)
// console.log(newList)
// DLL: "lurv", "dude", "sexy", 2, "noiiice", 5
console.log(newList.tail)
