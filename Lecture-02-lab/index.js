// DOM
const app = document.querySelector("#app");
const url = "./data.json";
/*
   Step 1: fetch(url) => make API call => server => Promise
*/
const fetchAllProduct = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderUI(data);
  } catch (error) {
    // Xu ly loi => popup (error.msg)
    throw error;
  }
};

const renderUI = (data) => {
  // Render UI
  const result = data.map((product) => {
    // Object Destructering
    console.log("Product", product);
    const { name, price, id, imgSrc } = product;
    return `<div>
    <img src='${imgSrc}'style={width:"100px";height:150px;}/>
      <h3>${name}</h3>
      <p>Price: ${price}</p>
    </div>`;
  });

  app.innerHTML = result.join("");
};

fetchAllProduct();

/*
  Array destructering
  let nums=[10,9,6,5];
  let [a,b]=nums; // a= 10 , b=9
*/

/*
  - API
  - DOM
  - Flexbox
  - Grid
  - Position
*/
