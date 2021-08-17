// queue is like any line: the first person or thing waiting in a line is the first one to finish or exit.
// like a print queue or a deli line

// Both push/shift or unshift/pop are valid.
// Arrays for queues in general aren't great for Big O bc of the need to reindex the array elements.

// let q = []
// // q.push("1")
// // q.push("2")
// // q.push("3")
// // console.log(q.shift())

// q.unshift("1")
// q.unshift("2")
// q.unshift("3")
// console.log(q)
// console.log(q.pop())
// console.log(q.pop())
// console.log(q.pop())

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// based off of a SLL. we call these methods enqueue and dequeue.
// for time complexity we will add to the end and remove from the beginning
class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val) {
    let newNode = new Node(val)
    if (this.size === 0) {
      this.first = newNode
      this.last = this.first
    } else{
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }

  dequeue() {
    if (this.size === 0) return null
    let returned = this.first
    if(this.size === 1){
      // CS did not do this.first = null.....
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
      //no need to set returned.next = null ?? seems like that could be a problem
    }
    this.size --
    return returned
  }

}

let q = new Queue()
q.enqueue("1")
q.enqueue("2")
q.enqueue("3")
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
