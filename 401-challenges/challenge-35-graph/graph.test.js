const Graph = require("./graph.js");

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it("Vertex can be successfully added to the graph", () => {
    graph.addVertex("A");
    expect(graph.getVertices()).toEqual(["A"]);
  });

  it("An edge can be successfully added to the graph", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B", 1);
    expect(graph.getNeighbors("A")).toEqual([{ vertex: "B", weight: 1 }]);
  });

  it("A collection of all vertices can be properly retrieved from the graph", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    expect(graph.getVertices()).toEqual(["A", "B", "C"]);
  });

  it("All appropriate neighbors can be retrieved from the graph", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addEdge("A", "B", 1);
    graph.addEdge("A", "C", 2);
    expect(graph.getNeighbors("A")).toEqual([
      { vertex: "B", weight: 1 },
      { vertex: "C", weight: 2 },
    ]);
  });

  it("Neighbors are returned with the weight between vertices included", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B", 3);
    expect(graph.getNeighbors("A")).toEqual([{ vertex: "B", weight: 3 }]);
  });

  it("The proper size is returned, representing the number of vertices in the graph", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    expect(graph.size()).toBe(3);
  });

  it("A graph with only one vertex and edge can be properly returned", () => {
    graph.addVertex("A");
    graph.addEdge("A", "A", 1);
    expect(graph.getVertices()).toEqual(["A"]);
    expect(graph.getNeighbors("A")).toEqual([{ vertex: "A", weight: 1 }]);
    expect(graph.size()).toBe(1);
  });
});
