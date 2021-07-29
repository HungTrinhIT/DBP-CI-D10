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
// introduceMyself(greeting);

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




console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => console.log(3));

console.log(4);

// 1 - 4 - 3 - 2
