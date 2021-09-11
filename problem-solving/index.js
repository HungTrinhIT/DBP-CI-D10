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
// console.log(validParentheses("()[]{}"));
// console.log(validParentheses("([}"));
// console.log(validParentheses("()"));
// console.log(validParentheses("("));

// Problems 1.2
// ([{}])[{((()))}]()[]{}

function validParentheses_2(s) {
  const mapping = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const st = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "{" || char === "(" || char === "[") {
      st.push(char);
    } else {
      if (mapping[st.pop()] !== char) {
        return false;
      }
    }
  }
  return true;
}
// console.log("\n1.2");
// console.log(validParentheses_2("([{}])[{((()))}]()[]{}"));
// console.log(validParentheses_2("([({})])([{}])((()))"));
// console.log(validParentheses_2("[][][][][]}}}}"));

// Problem 2

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
// Input: nums = [1,1]
// Output: [2]

// Example 3:
// Input: nums = [2,2,2]
// Output: [1,3]

function problem_2(nums) {
  const dict = {};
  const missingNumbers = [];
  // Create dict
  for (let num of nums) {
    // if (!(num in dict)) {
    //   dict[num] = num;
    // }

    dict[num] = num;
  }

  const size = nums.length;
  for (let i = 1; i <= size; i++) {
    if (!(i in dict)) {
      missingNumbers.push(i);
    }
  }
  return missingNumbers;
}
console.log(problem_2([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(problem_2([1, 1]));
console.log(problem_2([2, 2, 2, 4, 4, 5])); // [1,3,6]

// Problem 3

function problem_3(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  return arr.sort();
}
console.log(problem_3(13));
console.log(problem_3(3));
console.log(problem_3(25));

// Problem 4
// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

function problem_4(s) {
  const dict = ;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    dict[char] = dict[char] ? dict[char] + 1 : 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (dict[char] === 1) {
      return i;
    }
  }

  return -1;
}
