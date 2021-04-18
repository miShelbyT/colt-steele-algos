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
      // current moves one space ahead of newTail so at the end we'll be able to return the element being "popped"
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

  // .insert() pseudocode: if index < 0 || index > list.length return false
  // if index === list.length, use .push() method.
  // if index === 0, use .unshift() method.

  // let newItem = new Node(val), use .get() method. attach newItem to index at .get() and point .get() index - 1.next to newItem
  // length ++ and return true (if successfully inserted)

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) {
      this.push(val); //or can return !!this.push(val) which gives us the boolean value of the element
      return true
    }
    if (idx === 0) return !!this.unshift(val); //as per above this returns the boolean value of the element

    let previous = this.get(idx - 1)
    // this keeps previous.next from being overwritten
    let temp = previous.next
    let newNode = new Node(val)
    previous.next = newNode
    newNode.next = temp
    this.length++
    return true
  }

  // .remove(idx) use .get(idx) to "get" that node. set it to a variable to return it. use .get(idx - 1) and set its .next to the above variable.next. and return the removed element

  remove(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if(idx === this.length-1) return this.pop()
    if(idx === 0) return this.shift()
    
    let previous = this.get(idx - 1)
    let removed = previous.next
    previous.next = removed.next
    this.length--
    return removed
  }
// .reverse() set head and tail. variable called next, one called previous and one called current.
reverse(){
  // as per ush, node is our placeholder var here so this.tail can point to our original this.head. but we will also use it below as our "current" node. we have current, previous and next vars that will change to reverse the LL in place.
  let node = this.head
  this.head = this.tail
  this.tail = node
  let previous = null;
  let next;
  for(let i = 0; i < this.length; i++) {
    // notes below take in each loop

    // node starts off as node 1

    // next starts off as node 2
    // next is now node 3 (because node is now node 2)
    // ...and so on...
    next = node.next

    // node is our tail, .next points to null, as the tail should (when viewing it as reversed in place)
    // node.next points to node 1 (from the previou)
    // ...and so on...
    node.next = previous

    // now previous = node 1
    // now previous = node 2
    // ...and so on...
    previous  = node

    // node iterates to = node 2 (and we iterate again)
    // node is now node 3 (from beginning of this iteration)
    // ...and so on...
    node = next
}
return this
}

// simple/easy function to view our linked list as an array
print(){
  let arr = []
  let current = this.head
  while(current){
    arr.push(current.val)
    current = current.next
  }
  console.log(arr)
}

}

let list = new SinglyLinkedList()
list.push("hi")
list.push("shelby")
list.push("you")
list.push("are")
list.push("awesome!!")
list.push("~~")

// console.log(list.remove(4))
// console.log(list.insert(0, "heyyyyy"))
// console.log(list.insert(6, "heyyyyy"))
// console.log(list)
console.log(list.print())
console.log(list.reverse())
console.log(list.print())

