"use strict";

function validateBrackets(input) {
  const stack = [];
  const bracketPairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of input) {
    if (char in bracketPairs) {
      stack.push(char);
    } else if (Object.values(bracketPairs).includes(char)) {
      if (stack.length === 0 || bracketPairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = validateBrackets;
