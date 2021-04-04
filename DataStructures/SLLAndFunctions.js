// node is a piece of data: val
// refers to next node: next

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    // because node right now is empty
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  push(val) {
    let newNode = new Node(val)
    // in case of empty list
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      // .next adds next which points to newNode
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1
    return this
    // this is the entire list!
  }

  // find the next to last element in the list, set to pre. pre.next = null severs the last element from the list. also save pre === tail. finally, set the final severed element to a variable so we can return it.

  pop() {
    // this first part is how you traverse the list

    if (!this.head) return undefined

    let current = this.head
    let newTail = current
    while (current.next) {
      // if there is no current.next, meaning we're at the end, it will return falsey and we'll exit the loop
      newTail = current
      current = current.next
      // current moves one space ahead of newTail
    }
    // here we've left the loop so we know there is no current.next
    this.tail = newTail
    // this.tail is set to the value of newTail, now newTail is the new tail!
    this.tail.next = null
    // this severs the old tail ("current") from the list
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  // shift (removing first element) is easy to implement and uses O(1), Constant Time.

  // if empty do nothing. temp = head, head = head.next, delete temp, return temp
  //does not take arguments bc we are deleting the first node, not passing anything thru

  shift() {
    if (!this.head) return undefined
    let currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }

    return currentHead
  }

  // add val to beginning of list
  // function accepts a value, create new node. if !head, this new node = this.head and this.tail. newNode.next = currenthead. the head = newNode. length++
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      // this.head and this.tail are pointed to the value of newNode
      this.head = newNode
      this.tail = newNode
    } else {
      // points newNode.next to the current head. then assigns this.head to the value of newNode.
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }


  // function accepts index (we want to retrieve the val at that index)
  // if idx < 0 or >= this.length, return null
  // iterate thru the list using a counter. when we get to counter === idx, return val
  get(idx) {
    if (idx < 0 || idx >= this.length) return null
    let counter = 0
    let current = this.head
    while (counter !== idx) {
      current = current.next
      counter++
    }
    // once counter === idx we break out of while loop and return current which is the val
    return current
  }

  set(value, idx) {
    let foundNode = this.get(idx)
    if (foundNode) {
      foundNode.val = value
      return true
    }
    return false
  }
}

let list = new SinglyLinkedList()
console.log(list.push("hi"))
console.log(list.push("shelby"))
console.log(list.push("you"))
console.log(list.push("are"))
console.log(list.push("awesome!!"))

console.log(list.shift())
console.log(list)

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("friend")


// .insert() pseudocode: if index <= 0 || index > list.length return false
// if index === length, use .push() method.
// if index === 0, use .unshift() method.

// let newItem = new Node(val), use .get() method. attach newItem to index at .get() and attach .get() - 1 to newItem
// length ++ and return true (if successfully inserted)