//  CALLBACK
/*
    - La 1 function
    - Duoc truyen vao nhu la doi so cua function khac
*/
function introduceMyself(param) {
  if (typeof param == "function") {
    greeting("Hung");
  }
}

function greeting(name) {
  console.log(`Hello my name is:`, name);
}
// greeting("Hung")
introduceMyself(greeting);

// Sync/Async

// console.log(1);

// setTimeout(function () {
//   console.log(2);
// }, 0);

// console.log(3);

// Promise
// Promise
/*
    - pending
    - fulfilled
    - rejected
*/
const promise = new Promise(
  // Executor function
  // Dong y => resolve
  // Tu choi => reject
  function (resolve, reject) {
    resolve([
      {
        id: 1,
        name: "ReactJS",
      },
      {
        id: 2,
        name: "Angular",
      },
    ]);
    reject("Co loi");
  }
);

promise
  .then(function (data) {
    // Data API tra ve
    let result = data.map((course) => {
      return {
        ...course,
        customName: `<h1>Khoa hoc ${course.name}</h1>`,
      };
    });
    return result;
  })
  .then(function (data) {
    // renderUI();
    // console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // console.log("Done");
  });

// Promise chain

// Async/await
// function luon luon return Object Promise
const fetchAllCourse = async () => {
  return "hello";
};

const getData = async () => {
  const data = await fetchAllCourse();
  console.log(data);
};

// getData();
// API
const url = "https://www.themealdb.com/api/json/v1/1/random.php";

// Solution then(), catch()
// const fetchData = () => {
//   fetch(url)
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       console.log(data);
//       // RenderUI
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// Solution async/await
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// fetchData();

//  VI DU VE MICROTASK - MACROTASK
// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// Promise.resolve().then(() => console.log(3));

// console.log(4);

// 1 - 4 - 3 - 2

//  OOP - Class - ES5
function Course1(name, price) {
  // Attributes
  this.name = name;
  this.price = price;

  // Method
  this.showCourseInfo = function () {
    console.log(`Course: ${name} - Price: ${price}`);
  };
}

const jsCourse = new Course1("ReactJS", 20);
jsCourse.showCourseInfo();

const phpCourse = new Course1("PHP Course", 100);
phpCourse.showCourseInfo();

// Class - ES6
class Course2 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  showCourseInfo() {
    console.log(`Course2: ${this.name} - Price: ${this.price}`);
  }
}

const jsCourse2 = new Course2("ReactJS", 20);
jsCourse2.showCourseInfo();

const phpCourse2 = new Course2("PHP Course", 100);
phpCourse2.showCourseInfo();

class Restaurant {
  // private method
  #private_stuff() {
    console.log("private stuff");
  }

  // public method
  buy_food() {
    this.#private_stuff();
  }
}

const restaurant = new Restaurant();
restaurant.buy_food(); // "private stuff";
restaurant.private_stuff(); // Uncaught TypeError: restaurant.private_stuff is not a function
