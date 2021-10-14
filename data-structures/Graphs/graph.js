// adjacency matrix uses nested arrays that shows whether or not the nodes are directly connected

// adjacency list as an array is another way but it only works if the nodes are represented by numbers that can be translated into array indices
// we can use a hash table/map or object in this case

//this is an undirected graph:

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  // this solution happens to account for overwriting of duplicates
  //adds vertex but not connections. adding an edge adds the connections
  addVertex(vertex) {
    return this.adjacencyList[vertex]
      ? 'oops try again'
      : (this.adjacencyList[vertex] = [])
  }

  // if we wanted to make this a directed graph, we would only add one of the below vertices, depending on the direction!
  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v1]) {
      this.adjacencyList[v2].push(v1)
      this.adjacencyList[v1].push(v2)
    } else return 'oops try again'
  }

  //does not account for error handling!
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(
        (vertex) => vertex !== v2
      )
    }
    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(
        (vertex) => vertex !== v1
      )
    }
  }

  //removes vertex along with their edges, in both directions(!)
  //we will loop over all vertices as stored in the vertex array and remove our soon to be deleted vertex from their arrays. we do this by calling removeEdge from each array
  // also call delete on the vertex itself
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((vert) => this.removeEdge(vert, vertex))
    // while(this.adjacencyList[vertex].length){
    //   let adjacentVertex = this.adjacencyList[vertex].pop()
    //   this.removeEdge(adjacentVertex, vertex)
    // }
    delete this.adjacencyList[vertex]
    return this
  }

  dfsRecursive(start) {
    const resultsArr = new Array()
    const visitedNodes = new Object()
    const adjacencyList = this.adjacencyList

    function recursiveHelper(vertex) {
      if (!vertex) return null

      resultsArr.push(vertex)
      visitedNodes[vertex] = true

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visitedNodes.hasOwnProperty(neighbor))
          return recursiveHelper(neighbor)
      })
    }
    recursiveHelper(start)
    return resultsArr
  }

  // order of arrays from recursive/iterative function calls are different because recursive calls return in a different order
  //iteratively, the array is a stack which is also LIFO
  dfsIterative(start) {
    let stack = new Array(start)
    const result = new Array()
    const visited = new Object()
    let currentVert;
    
    //start building the visited object early 
    visited[start] = true
    
    while(stack.length) {
      currentVert = stack.pop()
      result.push(currentVert)
        
      this.adjacencyList[currentVert].forEach(neighbor => {
        if(!visited.hasOwnProperty(neighbor)) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
        })  
      }
      return result
    }

    bfs(start) {
      const queue = new Array(start)
      const result = new Array()
      const visited = new Object()
      let currentVert;
    
      //start building the visited object early
      visited[start] = true
    
      while (queue.length) {
        currentVert = queue.shift()
        result.push(currentVert)
    
        this.adjacencyList[currentVert].forEach((neighbor) => {
          if (!visited.hasOwnProperty(neighbor)) {
            visited[neighbor] = true
            queue.push(neighbor)
          }
        })
      }
      return result
    }

}

let newGraph = new Graph()
newGraph.addVertex('A')
newGraph.addVertex('B')
newGraph.addVertex('C')
newGraph.addVertex('D')
newGraph.addVertex('E')
newGraph.addVertex('F')
newGraph.addEdge('A', 'B')
newGraph.addEdge('A', 'C')
newGraph.addEdge('B', 'E')
newGraph.addEdge('C', 'F')
newGraph.addEdge('D', 'E')
newGraph.addEdge('D', 'F')
newGraph.addEdge('E', 'F')
console.log(newGraph)
console.log(newGraph.bfs('A'))

// console.log(newGraph.removeVertex('cool'))
// console.log(newGraph.removeVertex('great'))
// console.log(newGraph.removeVertex('good'))
// console.log(newGraph.removeEdge('cool', 'good'))
// console.log(newGraph.removeEdge('fun', 'good'))
// console.log(newGraph)
