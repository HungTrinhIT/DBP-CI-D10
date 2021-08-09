import React, { Component } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

export default class SmartphoneStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Samsung Galaxy A10",
          price: "40906000",
          img: "assets/img/samsung-galaxy.jpg",
          info: {
            screen: "AMOLED Full HD 9.0",
            os: "Android 9.0",
            frontCamera: "20MP",
            backCamera: "Chính 48MB, phụ 30MP",
          },
          ram: "4 GB",
          rom: "64 GB",
        },
        {
          id: 2,
          name: "IPhone12",
          price: "200306000",
          img: "assets/img/iphone-12.jpg",
          info: {
            screen: "Full HD 12.0",
            os: "IOS 14",
            frontCamera: "20MP",
            backCamera: "Chính 100MB, phụ 30MP",
          },
          ram: "16 GB",
          rom: "32 GB",
        },
        {
          id: 3,
          name: "Xiaomi Note 10",
          price: "10005000",
          img: "assets/img/xiaomi-redmi-note-10-5g.jpg",
          info: {
            screen: "OLED 10.0",
            os: "Android 8.0",
            frontCamera: "69MP",
            backCamera: "Chính 96MB, phụ 30MP",
          },
          ram: "10 GB",
          rom: "64 GB",
        },
      ],
      selectedProduct: {
        id: 1,
        name: "Samsung Galaxy A10",
        price: "40906000",
        img: "assets/img/samsung-galaxy.jpg",
        info: {
          screen: "AMOLED Full HD 9.0",
          os: "Android 9.0",
          frontCamera: "20MP",
          backCamera: "Chính 48MB, phụ 30MP",
        },
        ram: "4 GB",
        rom: "64 GB",
      },
      cart: [],
    };
  }

  onSelectedProduct = (id) => {
    const products = this.state.products;
    const idx = products.findIndex((product) => product.id === id);

    if (idx !== -1) {
      this.setState({
        selectedProduct: products[idx],
      });
    }
  };

  render() {
    const { products, selectedProduct } = this.state;
    return (
      <div className="container pt-5">
        <h1 class="text-primary text-center">Thế giới di động</h1>
        <ProductList
          products={products}
          onSelectedProduct={this.onSelectedProduct}
        />
        <ProductDetail productDetail={selectedProduct} />

        {/* Button to show Modal */}
        <div>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button>
          {/* Modal */}

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
