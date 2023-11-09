const Graph = require("./graphDepthFirst.js");

describe("Graph depthFirst method", () => {
  it("should perform depth-first traversal starting from the specified node", () => {
    const myGraph = new Graph();

    myGraph.addVertex("A");
    myGraph.addVertex("B");
    myGraph.addVertex("C");
    myGraph.addVertex("D");

    myGraph.addEdge("A", "B");
    myGraph.addEdge("B", "C");
    myGraph.addEdge("C", "D");

    const result = myGraph.depthFirst("A");

    expect(result).toEqual(["A", "B", "C", "D"]);
  });

  it("should handle nodes that are not in the graph", () => {
    const myGraph = new Graph();

    myGraph.addVertex("A");
    myGraph.addVertex("B");

    const result = myGraph.depthFirst("C");

    expect(result).toEqual([]);
  });

  it("should handle an empty graph", () => {
    const myGraph = new Graph();

    const result = myGraph.depthFirst("A");

    expect(result).toEqual([]);
  });
});
