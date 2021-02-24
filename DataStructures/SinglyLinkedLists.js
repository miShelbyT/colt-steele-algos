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

  push(val){
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1
    return this
  }
}

let list = new SinglyLinkedList()
console.log(list.push("hi"))
console.log(list.push("shelby!!"))


// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("friend")


