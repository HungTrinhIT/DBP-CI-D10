// Data types
/*
    * Primitive datatype
        number: 3, 5.12, 4.12121312
        string: "Hello MindX"
        true/false: boolean
        null
        undefined

    * Reference datatype
        array 
        function
        object
*/
// ES6: Speard operator ...
let a = [1, 2, 3, 4]; // Global scope
let b = [...a];
b.push(5);

// console.log("Mang b:", b); // 1 2 3 4 5
// console.log("Mang a:", a); // 1 2 3 4 5

// b-> #abc: [1,2,3,4,5] <- a

let employee1 = {
  name: "Cristian Ronaldo",
  age: 36,
};

let employee2 = { ...employee1 };
delete employee2.age;

console.log("employee1:", employee1);
console.log("employee2", employee2);

// Var let const
/*
    
    Giống nhau: đều dùng để khai báo biến 
    
    Khác nhau:
        +Cơ chế hoisting (đưa lên đầu chương trình)
            + var có cơ chế hoisting 
            + const, let ko có chế hoisting

        +Phạm vi hoạt động (Scope): Global scope > function scope > block scope
            + var: function scope, khoong nawm trong function thi no globla scope
            + let, const: block scope

        +Re-assign một biến:
            +var, let có thể gán lại (re-assign)
            + const không đc gán lại

*/

var varVariable = 2;
varVariable = 3;
console.log("varVariable:", varVariable);

let letVariable = 2;
letVariable = 3;
console.log("letVariable:", letVariable);

// const constVariable = 2;
// constVariable = 3;
// console.log("constVariable:", constVariable);

const numbers = [1, 2, 3, 4];
numbers.push(5);

// numbers[3]=5; // [1,2,3,5]
console.log("numbers:", numbers);

// Array
// Bai 1: Humanize Format
function humanizeFormat(num) {
  let unit = num % 10;

  switch (unit) {
    case 1:
      return num.toString() + "st";
    case 2:
      return num.toString() + "nd";
    case 3:
      return num.toString() + "rd";
    default:
      result = num.toString() + "th";
  }
}
// console.log(humanizeFormat(1));
// console.log(humanizeFormat(32));
// console.log(humanizeFormat(208));
// console.log(humanizeFormat(403));

// Bai 2:
function repeatString(sourceString, count) {
  let result = "";

  for (let i = 0; i < count; i++) {
    // result = result + sourceString;
    result += sourceString;
  }

  return result;
}
// console.log(repeatString("Ha!", 3));
// console.log(repeatString("VietNam", 4));
// console.log(repeatString("Javascript", 1));

//Bai 3
//Solution 1
function removeDuplicatedArray1(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (!result.includes(ele)) {
      result.push(ele);
    }
  }

  return result;
}

// Solution 2:
function removeDuplicatedArray2(arr) {
  let result = [];
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (!obj.hasOwnProperty(ele)) {
      obj[ele] = ele;
      result.push(ele);
    }

    // if (obj.hasOwnProperty(ele)===false) {
    //     obj[ele] = ele;
    //     result.push(ele);
    //   }
  }

  return result;
}

// console.log(
//   removeDuplicatedArray2([9, 9, 9, 0, 0, 0, 44, 44, 9, 9, 555, 0, 555])
// );
// Object

//------- Arrow function-----
// Decleration function
// function logger(log) {
//   console.log(log);
// }

// Expression function
// const logger = function (log) {
//   console.log(log);
// };
// logger("Hello MindX");

// Arrow function
const logger = (log) => {
  console.log(log);
};
// logger("Hello MindX");

// function sum(a, b) {
//   return a + b;
// }
// const sum = (a, b) => {
//   return a + b;
// };
const sum = (a, b) => a + b;
// console.log(sum(3, 4));

let dog = {
  name: "Hello, I am a dog!",
  age: 23,
  greeting: () => {
    console.log(this);
  },
};
// console.log(this);
// dog.greeting();

let courses = [
  {
    id: 1,
    name: "javascript co ban 1",
    price: 10,
  },
  {
    id: 2,
    name: "javascript co ban 2",
    price: 20,
  },
  {
    id: 3,
    name: "javascript co ban 3",
    price: 30,
  },
  {
    id: 4,
    name: "javascript co ban 4",
    price: 40,
  },
  {
    id: 5,
    name: "javascript co ban 5",
    price: 50,
  },
];

// const doubleValue = (number) => number * 2;
// let arr = [1, 2, 3, 4, 5];
// arr = arr.map(function (item) {
//   return item * 2;
// });
// console.log(arr);

// courses = courses.map((courseItem) => {
//   //   courseItem.customName = `Khoc hoc: ${courseItem.name}`;
//   //   return courseItem;
//   return {
//     ...courseItem,
//     customName: `Khoa hoc: ${courseItem.name}`,
//   };
// });
// console.log(courses);

// Toan tu ... => spread operator: copy obj
// String template: backtick

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log("before:", arr);

arr = arr.filter((ele) => {
  return ele % 2 == 0;
});

// arr = arr.map((ele) => {
//   return ele % 2 == 0;
// });
// console.log("After:", arr);

// Filter ra những khóa học nào mà price > 30
let filteredCourses = courses.filter((ele) => {
  return ele.price > 30;
});
console.log(filteredCourses);

let customName = "Hung";

console.log("Toi la ", customName, "Toi lam viec o cong ty X");
console.log(`Toi la ${customName} va toi la o cong ty X`);
