class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(value) {
    if (!this.vertices.has(value)) {
      this.vertices.set(value, new Map());
    }
    return value;
  }

  addEdge(vertex1, vertex2, weight = null) {
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      this.vertices.get(vertex1).set(vertex2, weight);
      this.vertices.get(vertex2).set(vertex1, weight);
    }
  }

  getVertices() {
    return Array.from(this.vertices.keys());
  }

  getNeighbors(vertex) {
    if (this.vertices.has(vertex)) {
      const neighbors = this.vertices.get(vertex);
      const neighborList = [];
      for (const [neighbor, weight] of neighbors) {
        neighborList.push({ vertex: neighbor, weight });
      }
      return neighborList;
    }
    return [];
  }

  size() {
    return this.vertices.size;
  }
}

module.exports = Graph;
