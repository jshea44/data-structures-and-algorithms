"use strict";

const validateBrackets = require("./stack-queue-brackets.js");

test("Test case 1: Valid brackets", () => {
  expect(validateBrackets("{}")).toBe(true);
});

test("Test case 2: Invalid brackets", () => {
  expect(validateBrackets("[({}]")).toBe(false);
});

test("Test case 3: Complex valid brackets", () => {
  expect(validateBrackets("({[()]})")).toBe(true);
});
