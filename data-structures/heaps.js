// a heap is a type of tree. there are many types of heaps, we are going to focuse on binary (min and max) heaps

// they can have max 2 children
// max binary tree: parent node is always larger than child nodes
// min binary tree: parent node is always smaller than child nodes

// for heaps, order is not important. unlike BSTs the right and left child nodes do NOT have rules i.e.,
// larger on right and smaller on left
// children are added/heap is filled in left to right

// in a binary heap: for any index of an array n, left child is 2n + 1 and right child is 2n + 2
// the inverse (to find the parent of a child) is Math.floor((n - 1)/2).
// for right node (which we wouldn't know in advance) we could check (n - 2) / 2 but Math.floor is simpler and more consistent

// we will use an array to know where the nodes would live in a heap

// first we .push() to the end of the array then we compare/swap it with its parent until it hits its correct spot.
// called bubbling
class maxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
  }

  insert(element) {
    this.values.push(element)
    return this.bubbleUp()
  }
  //class function does not live in insert
  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      // we do this so we can store the value and not otherwise have to store in a temp variable
      let parent = this.values[parentIdx]
      if (element <= parent) break
      // don't need an else because if we meet the above condition we break out of the loop
      // otherwise we do the following swaps
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
    return this
  }
}

let newHeap = new maxBinaryHeap()
console.log(newHeap.insert(55))
console.log(newHeap.insert(1))
console.log(newHeap.insert(20))
console.log(newHeap.insert(20))
console.log(newHeap.insert(28))
console.log(newHeap.insert(1000))
