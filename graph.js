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

    if (adj.length === 0) return start.value;

    let results = ''

    adj.map(node => results += this.depthFirstSearch(node, seen))

    return start.value += results;
   }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) { }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) { }
}

module.exports = { Graph, Node }
