class Node {
  constructor(val) {
    this.val = val
    this.right = null
    this.left = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(val) {
    let newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    }
    let current = this.root
    while (true) {
      if (val === current.val) return undefined
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode
          return this
        } else current = current.left
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode
          return this
        } else current = current.right
      }
    }
  }

  search(val) {
    if (!this.root) return false
    let current = this.root
    let found = false
    while (current && !found) {
      if (val < current.val) current = current.left
      else if (val > current.val) current = current.right
      else found = true
    }
    return found === true ? current : null // we can return what we want. could be true/false or the node/undefined or null.
  }

  /* how to visit every node just once in a tree
  two main ways && remember that Big O Time Complexity is EXACTLY the same for DFS and BFS
  BFS - start at root, then next level visit every sibling, next level visit every sibling and so on
  DFS is best for wide trees because of SPACE complexity. less data stored in a queue, just a handful of functions on the callstack(??)
  BFS better for tall trees(??)
          10
        6     15
      3   8      20
   */

  // iteratively
  breadthFirstSearch() {
    let data = [],
      queue = [],
      current = this.root
    queue.push(current)

    while (queue.length) {
      current = queue.shift()
      data.push(current.val)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    return data
  }

  /* 
  DFS - InOrder, PreOrder, PostOrder
  DFS is best for tall trees
          10
        6     15
      3   8      20

  */
  // recursively
  // top down, left to right
  DFSPreOrder() {
    let data = [],
      current = this.root
    traverse(current)

    function traverse(node) {
      data.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    return data
  }

  // bottom up, left to right. root is the last thing that is visited/pushed. all because we push AFTER we traverse!
  DFSPostOrder() {
    let data = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      // we say visit the node. this is the equivalent to pushing into the data array
      data.push(node.val)
    }
    // can use a current variable but don't really need it.
    traverse(this.root)
    return data
  }

  // bottom up but in order of how you might draw it i.e., with a pencil [3,6,8,10,15,20]
  // traverse left, visit/push, traverse right
  DFSInOrder() {
    let data = []

    function traverse(node) {
      // we could notate this without the conditional if we wanted to: node.left && traverse(node.left). if there was no node.left it wouldn't run. kinda confusing tho.
      if (node.left) traverse(node.left)
      data.push(node.val)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}

let tree = new BST()
tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)

console.log(tree.breadthFirstSearch()) // [ 10, 6, 15, 3, 8, 20 ]
console.log(tree.DFSPreOrder()) // [ 10, 6, 3, 8, 15, 20 ]
console.log(tree.DFSPostOrder()) // [3, 8, 6, 20, 15, 10]
console.log(tree.DFSInOrder()) // [3, 6, 8, 10, 15, 20]
