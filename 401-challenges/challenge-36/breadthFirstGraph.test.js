const Graph = require("./breadthFirstGraph.js");

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it("should perform a breadth-first traversal starting from the specified node", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");
    graph.addEdge("C", "D");

    const result = graph.breadthFirst("A");
    expect(result).toEqual(["A", "B", "C", "D"]);
  });

  it("should return an array containing only the start node for a single-node graph", () => {
    graph.addVertex("A");
    const result = graph.breadthFirst("A");
    expect(result).toEqual(["A"]);
  });

  it("should return an empty array for an empty graph", () => {
    const result = graph.breadthFirst("A");
    expect(result).toEqual([]);
  });
});
