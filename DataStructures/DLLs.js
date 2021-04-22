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
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++
    return this
  }

  // remove from end of list
  pop() {
    if (this.length === 0) return undefined
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
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }


  // check for valid idx, if >= list.length or if the idx is negative, return undefined. if idx > idx.length / 2 then we will start our search from this.tail. otherwise we will start at this.head
  get = (idx) => {
    if (idx < 0 || idx >= this.length) return undefined
    let count;
    let current;
    if (idx < this.length / 2) {
      count = 0
      current = this.head
      while (count !== idx) {
        current = current.next
        count++
      } 
    } else {
      count = this.length-1
      current = this.tail
      while(count !==idx) {
        current = current.prev
        count--
      }
    }
    return current
  }

}


let newList = new DoublyLinkedList()
newList.push(2)
newList.push(5)
// console.log(newList, newList.length)
newList.push("hi there")
// console.log(newList.length)
// newList.shift()
newList.unshift("sexy")
console.log(newList.get(2))


