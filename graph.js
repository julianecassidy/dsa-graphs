/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance to nodes property on graph. */
  addVertex(vertex) {
    this.nodes.add(vertex);
   }

  /** add array of new Node instances to nodes property. */
  addVertices(vertexArray) {
    for(let vertex of vertexArray) {
      this.addVertex(vertex);
    }
   }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
   }

  /** remove edge between vertices v1,v2 */
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
   }

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */
  removeVertex(vertex) {
    // iterate through vertex.adjacent and in that node, remove the vertex from adjancent
    for (let node in vertex.adjacent) {
      node.adjacent.delete(vertex);
    }
    this.nodes.delete(vertex);
   }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start, seen=new Set([start])) {
    const adj = new Array();
    
    for (let node of start.adjacent) {
      if (!seen.has(node)) {
        seen.add(node);
        adj.push(node);
      }
    }

    console.log("start value", start.value);
    if (adj.size === 0) return start.value;
    
    return [start.val].concat(
      adj.map(node => this.depthFirstSearch(node, seen))
    );
    // for (let node of adj) {
    //   const newVal = (this.depthFirstSearch(node, seen, searchResults))
    //   searchResults.push(newVal);
    // }

    // console.log("search results", searchResults);
    // return searchResults;
    // array of node values
    // adjacency set
    // base case: adjacency set is empty, return val

    // iterate through current el and add its adj nodes to the set
    // iterate through the set
    // push the recursive call result into the array
   }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) { }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) { }
}

module.exports = { Graph, Node }
