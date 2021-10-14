//naive PQ
class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    this.values.push({ val, priority })
    this.sort()
  }

  // returns the first el in the queue
  dequeue() {
    return this.values.shift()
  }
  // remember that lower number indicates higher priority
  //this is time complexity O(n*logn) because we are sorting after every enquque
  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList.hasOwnProperty(vertex))
      this.adjacencyList[vertex] = []
  }

  //our stored neighbors will look a little different.
  //i.e., "A": [{node: "B", weight: 10},{node: "C", weight: 2}] instead of "A": ["B", "C"]

  addEdge(v1, v2, weight) {
    // if(this.adjacencyList.hasOwnProperty(v1)) this.adjacencyList.push({node: v2, weight: weight})
    if (this.adjacencyList.hasOwnProperty(v1))
      this.adjacencyList[v1].push({ node: v2, weight })
    // if(this.adjacencyList.hasOwnProperty(v2))this.adjacencyList.push({node: v1, weight: weight})
    if (this.adjacencyList.hasOwnProperty(v2))
      this.adjacencyList[v2].push({ node: v1, weight })
    //ES6 allows us to pass the weight argument alone because the key and value both use the same parameter name
  }

  //shortest distance/path
  //function accepts a starting and ending vertex
  dijkstra(start, finish) {
    // create an object and set each key to be every vertex with a value of Infinity, except for start which = 0
    // priority queue is set up the same way
    // prevPath object is set up with all vertices keys set to null value
    const distances = new Object()
    const prevPath = new Object()
    const nodes = new PriorityQueue()
    let smallest, resultPath = []

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      prevPath[vertex] = null
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val
      if (smallest === finish) {
        while(prevPath[smallest]) {
          resultPath.push(smallest)
          smallest = prevPath[smallest]
        }
        break;
      } 
      // otherwise check neighbors and calculate the distance. for in gets us the index for each node
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighbor node
          let nextNode = this.adjacencyList[smallest][neighbor]
          // calculate distance and if smaller, we update object and pq
          let checkDistance = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          if (checkDistance < distances[nextNeighbor]) {
            //updating smallest distance to neighbor
            distances[nextNeighbor] = checkDistance
            //updating the closest neighbor (with shortest length)
            prevPath[nextNeighbor] = smallest
            // enqueue back into priority queue keeping track of updated length
            nodes.enqueue(nextNeighbor, checkDistance)
          }
        }
      }
      //if newSum is smaller, reset prevPath at that idx to new vertex
      //update priority queue
    }
    return resultPath.concat(smallest).reverse()
  }
}

let graph = new WeightedGraph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('E', 'F', 1)
console.log(graph.dijkstra('A', 'D'))
