// these functions will be used in graph.js but built out here so i can add notes

//recursive solution DFS - very straightforward:
// create results array? or can create an object and set each vertex to the value of true i.e., {"A": true, "B": true}
//dfsRecurive(vertex) {
// if(!vertex.length) return "done!" (means all edges have been marked off)
// else add vertex to results list, mark each edge vertex/connection as visited
//if neighbor is not visited, recursively call DFS on neighbor
// }

//function should accept a starting node

//create a list to store visited vertices, to be returned at the end
//create an object to store all visited nodes

function dfsRecursive(start) {
  const resultsArr = new Array()
  const visitedNodes = new Object()
  //need to set the const below bc we cannot use this in a helper function, it means something different in that context
  const adjacencyList = this.adjacencyList

  function recursiveHelper(vertex) {
    if (!vertex) return null

    resultsArr.push(vertex)
    visitedNodes[vertex] = true

    adjacencyList[vertex].forEach((neighbor) => {
      //checking for "!neighbor in visitedNodes" does not work, don't know why
      if (!visitedNodes.hasOwnProperty(neighbor))
        return recursiveHelper(neighbor)
    })
  }
  recursiveHelper(start)
  return resultsArr
}

//breadth first search - we call all neighbors of a node/vertex before we start on THEIR neighbors
// we will use a queue here instead of a stack. so FIFO
function bfs(start) {
  const queue = new Array(start)
  const result = new Array()
  const visited = new Object()

  let currentVert

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

//create a helper function which accepts a vertex
// helper function should return if vertex is empty
// helper function should push object into the results array and into the visited object
//loop over all values in the adjacency list using this helper function
