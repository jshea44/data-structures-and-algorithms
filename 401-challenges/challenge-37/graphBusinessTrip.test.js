"use strict";

const businessTrip = require("./graphBusinessTrip.js");

describe("businessTrip", () => {
  const cityGraph = {
    CityA: { CityB: 50, CityC: 100 },
    CityB: { CityD: 75 },
    CityC: { CityD: 150 },
    CityD: { CityE: 25 },
  };

  test("Calculates the cost of a valid trip", () => {
    const citiesToVisit = ["CityA", "CityB", "CityD", "CityE"];
    expect(businessTrip(cityGraph, citiesToVisit)).toBe(150);
  });

  test("Returns null for an invalid trip with missing connections", () => {
    const citiesToVisit = ["CityA", "CityD", "CityD", "CityE"];
    expect(businessTrip(cityGraph, citiesToVisit)).toBeNull();
  });

  test("Returns null for a trip with less than 2 cities", () => {
    const citiesToVisit = ["CityA"];
    expect(businessTrip(cityGraph, citiesToVisit)).toBeNull();
  });
});
