// a heap is a type of tree. there are many types of heaps, we are going to focuse on binary (min and max) heaps

// they can have max 2 children
// max binary tree: parent node is always larger than child nodes
// min binary tree: parent node is always smaller than child nodes

// for heaps, order is not important. unlike BSTs the right and left child nodes do NOT have rules i.e.,
// larger on right and smaller on left
// children are added/heap is filled in left to right

// **in a binary heap: for any array index (n), left child's index is 2n + 1 and right child's index is 2n + 2
// **the inverse (to find the parent of a child) is Math.floor((n - 1)/2). This solution effectively finds the parent, whether using either the left or right child node
// for right node (which we wouldn't know in advance) we could check (n - 2) / 2 but Math.floor is simpler and more consistent

// we will use an array to know where the nodes would live in a heap

// first we .push() to the end of the array then we compare/swap it with its parent until it hits its correct spot.
// called bubbling
class maxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(element) {
    this.values.push(element)
    return this.bubbleUp()
  }
  //class function does not live in insert
  bubbleUp() {
    let idx = this.values.length - 1
    const childEl = this.values[idx]

    while (idx > 0) {
      //this definition needs to go inside the loop because it is reset every time we loop through
      let parentIdx = Math.floor((idx - 1) / 2)
      // makes it more readable => parent vs element
      let parentEl = this.values[parentIdx]
      //this can happen on the first loop or several loops in, depending on the relationship between parent and child elements
      if (childEl <= parentEl) break
      // don't need an else because if we meet the above condition we break out of the loop
      // otherwise we do the following swaps
      // this.values[parentIdx] = element
      // this.values[idx] = parent

      // can i use ES6 to state it this way? i believe i can! swappy swap
      ;[this.values[parentIdx], this.values[idx]] = [childEl, parentEl]
      // here we are resetting the child index. at the top of the loop we reset the parent index as per our new child idx
      idx = parentIdx
    }
    console.log("inserting, this is the length", this.values.length)
    return this
  }

  //remove the root, also called extract max. last element in the array and then we systematically replace it until it sits where it fits the "rules"
  // last node (at end of array) replaces the root node. compare it to its largest child and swap if the "new root" is smaller (note: it probably is).
  //then compare with its children and swap with whichever one is larger. continue the process until we are done
  remove() {
    let oldRoot = this.values[0]

    if(this.values.length > 1) {
      this.values[0] = this.values.pop()
      this.sinkDown()
    } else this.values.pop()

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
        if(leftChild > sinker) {
          swap = leftChildIdx
        }
      }
      if(rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if(rightChild > sinker && swap === null || rightChild > sinker && rightChild > leftChild) {
          swap = rightChildIdx
        }
      }  
      if(swap === null) break
      [this.values[parentIdx], this.values[swap]] = [this.values[swap], this.values[parentIdx]]
      parentIdx = swap

       
    }
  }

}

let newHeap = new maxBinaryHeap()
console.log(newHeap.insert(41))
console.log(newHeap.insert(39))
console.log(newHeap.insert(33))
console.log(newHeap.insert(18))
console.log(newHeap.insert(27))
console.log(newHeap.insert(12))
console.log(newHeap.insert(55))
// console.log(newHeap.insert(550))
// console.log(newHeap.insert(2))
console.log(newHeap.remove())
console.log(newHeap)
console.log(newHeap.remove())
console.log(newHeap.remove())
console.log(newHeap.remove())
console.log(newHeap.remove())
console.log(newHeap.remove())
console.log(newHeap.remove())
console.log(newHeap.remove())
console.log(newHeap.remove())
console.log(newHeap.remove())
console.log(newHeap.insert(41))
console.log(newHeap.insert(99))
console.log(newHeap.insert(10))
console.log(newHeap.insert(100))
console.log(newHeap.remove())
console.log(newHeap)
