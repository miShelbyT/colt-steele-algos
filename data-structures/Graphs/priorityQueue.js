//naive PQ
class PriorityQueue {
  constructor() {
    this.values = []
  }

  
  enqueue(val, priority) {
    this.values.push({val, priority})
    this.sort()
  }


// returns the first el in the queue
  dequeue() {
    return this.values.shift()
  }
// remember that lower number indicates higher priority
//this is time complexity O(n*logn) because we are sorting after every enquque
  sort() {
    this.values.sort((a,b) => a.priority - b.priority)
  }

}

let pq = new PriorityQueue()
pq.enqueue("chocolate", 1)
pq.enqueue("banana", 5)
pq.enqueue("vanilla", 6)
pq.enqueue("strawberry", 2)
pq.enqueue("orange", 10)
pq.dequeue()
console.log(pq)