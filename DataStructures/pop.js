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

  // find the next to last element in the list, set to pre. pre.next = null severs the last element from the list. also save pre === tail. finally, set the final severed element to a variable so we can return it.

  pop() {
    // this first part is how you traverse the list
    
    if (!this.head) return undefined

    let current = this.head
    let newTail = current
    while(current.next) {
      newTail = current
      current = current.next
      // current moves one space ahead of newTail
    } 
    this.tail = newTail
    // this.tail is set to the value of newTail, now newTail is the new tail!
    this.tail.next = null
    // this severs the old tail from the list
    this.length--
    if(this.length === 0){
      this.head = null
      this.tail = null
    }
    return current
  }
}