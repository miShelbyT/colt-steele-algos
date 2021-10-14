// stacks: LIFO (like a callstack, or a stack of books.) vs queues: FIFO
// JS does not have a built in stack datatype but some other languages do

// for arrays, we can use push/pop or unshift/shift. both are valid stacks.
// better for Big O to use push/pop - then array items won't need to be re-indexed with every removal
// let stack = []
// stack.push('google')
// stack.push('linkedin')
// stack.push('youtube')
// stack.pop()
// console.log(stack)

// based on SLL. we will use the equivalent of array's shift/unshift methods (but call it push/pop) because this has constant time O(1)!

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  // we are pushing to front of list. this would be called unshift if it was an array.
  push(val) {
    let newNode = new Node(val)
    if (this.size === 0) {
      this.first = newNode
      this.last = this.first
    } else {
      let oldFirst = this.first
      this.first = newNode
      newNode.next = oldFirst
      // we could also say this.first.next = oldFirst
    }

    return ++this.size
    // convention has that we return the size of the stack. ++ comes first then the size is returned.
  }

  // popping from the front of the list for O(1) time. this would be shift if it was an array.
  pop() {
    if (this.size === 0) return null
    let removed = this.first
    if (this.size === 1) {
      // CS did not do this.first = null.....
      this.first = null
      this.last = null
    } else {
      this.first = removed.next
      // CS did not do removed.next.....
      removed.next = null
    }
    this.size--
    return removed.val
  }
}

let stack = new Stack()
stack.push('google')
stack.push('linkedin')
stack.push('youtube')

console.log(stack.pop())
