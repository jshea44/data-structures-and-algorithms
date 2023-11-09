"use strict";

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

  //challenge 38
  depthFirst(startNode) {
    const visited = new Set();
    const result = [];

    const dfs = (node) => {
      visited.add(node);
      result.push(node);

      for (const neighbor of this.getNeighbors(node)) {
        if (!visited.has(neighbor.vertex)) {
          dfs(neighbor.vertex);
        }
      }
    };

    if (this.vertices.has(startNode)) {
      dfs(startNode);
    }

    console.log(result);
    return result;
  }
}

module.exports = Graph;
