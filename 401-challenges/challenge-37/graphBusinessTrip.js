"use strict";

function businessTrip(graph, cities) {
  if (!cities || cities.length < 2) {
    return null;
  }

  let totalCost = 0;
  for (let i = 0; i < cities.length - 1; i++) {
    const currentCity = cities[i];
    const nextCity = cities[i + 1];

    if (graph[currentCity] && graph[currentCity][nextCity]) {
      totalCost += graph[currentCity][nextCity];
    } else {
      return null;
    }
  }

  return totalCost;
}

module.exports = businessTrip;
