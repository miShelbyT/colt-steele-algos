class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}


//this will be MIN BINARY HEAP, 0 would be highest priority (top of heap). this is common for example with Unix OS
class PriorityQueue {
  constructor() {
    this.values = []
  }

  //there is currently no logic to handle if we have duplicate priority elements
  //add new Node, place it at correct position dependent on it's priority. lowest number at top!
  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode)
    return this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.values.length - 1
    const childEl = this.values[idx]

    while (idx > 0) {
      //this definition needs to go inside the loop because it is reset every time we loop through
      let parentIdx = Math.floor((idx - 1) / 2)
      // makes it more readable => parent vs element
      let parentEl = this.values[parentIdx]
      //this can happen on the first loop or several loops in, depending on the relationship between parent and child elements
      if (childEl.priority >= parentEl.priority) break
      // don't need an else because if we meet the above condition we break out of the loop
      // otherwise we do the following swaps
      // this.values[parentIdx] = element
      // this.values[idx] = parent

      // can i use ES6 to state it this way? i believe i can! swappy swap
      [this.values[parentIdx], this.values[idx]] = [childEl, parentEl]
      // here we are resetting the child index. at the top of the loop we reset the parent index as per our new child idx
      idx = parentIdx
    }
    return this
  }

// remove root and return it, rearrange heap dependent on priority
  dequeue () {
    let oldRoot = this.values[0]
    //if length is 1 this will remove the one final node
    let end = this.values.pop()
    //this keeps us from adding the 1 node back into an empty heap
    if(this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }

    return oldRoot
  }

  sinkDown() {
    let parentIdx = 0, length = this.values.length, sinker = this.values[0]

    while(true) {
      let leftChildIdx = 2 * parentIdx + 1
      let rightChildIdx = 2 * parentIdx + 2
      let leftChild, rightChild
      let swap = null
      if(leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if(leftChild.priority < sinker.priority) {
          swap = leftChildIdx
        }
      }
      if(rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if(rightChild.priority < sinker.priority && swap === null || rightChild.priority < sinker.priority && rightChild.priority < leftChild.priority) {
          swap = rightChildIdx
        }
      }  
      if(swap === null) break
      [this.values[parentIdx], this.values[swap]] = [this.values[swap], this.values[parentIdx]]
      parentIdx = swap

       
    }
  }

}

let ER = new PriorityQueue()
ER.enqueue("common cold", 5)
ER.enqueue("heart attack", 1)
ER.enqueue("broken ankle", 3)
ER.enqueue("exploding head", 0)
ER.enqueue("baby on the way", 2)
// ER.dequeue()
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())