// Example 3:
// Input: s = "([}"
// Output: false;
// ()[] mapping[s[i]] = mapping['(']=s[i+1]
// Problem 1.1
function validParentheses(s) {
  const mapping = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const size = s.length;
  if (size % 2 === 1) {
    return false;
  }
  //   for (let i = 0; i < s.length - 1; i++) {
  //     const prevChar = s[i];
  //     const nextChar = s[i + 1];

  //     if (mapping[prevChar] !== nextChar) {
  //       return false;
  //     }
  //     i++;
  //   }
  let i = 0;

  while (i < size - 1) {
    const prevChar = s[i];
    const nextChar = s[i + 1];

    if (mapping[prevChar] !== nextChar) {
      return false;
    }

    i += 2;
  }

  return true;
}
console.log(validParentheses("()[]{}"));
console.log(validParentheses("([}"));
console.log(validParentheses("()"));
console.log(validParentheses("("));

// Problems 1.2
// ([{}])[{((()))}]()[]{}
