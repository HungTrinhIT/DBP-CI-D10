import React, { Component } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

import Cart from "./Cart";
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

  // Xem chi tiết sản phẩm
  onSelectedProduct = (id) => {
    const products = this.state.products;
    const idx = products.findIndex((product) => product.id === id);

    if (idx !== -1) {
      this.setState({
        selectedProduct: products[idx],
      });
    }
  };

  // Thêm vào giỏ hàng
  onAddToCart = (product) => {
    const idxItemInCart = this.state.cart.findIndex(
      (item) => item.id === product.id
    );

    // Nếu cái sản phẩm chưa tồn tại trong giỏ hàng
    // Cập nhật lại amount = 1 => push vào giỏ hàng => cập nhật lại state
    if (idxItemInCart === -1) {
      product.amount = 1;
      this.setState({
        cart: [...this.state.cart, product],
      });
    } else {
      // Lúc này sản phẩm đã tồn tại trong giỏ hàng
      const currentCart = this.state.cart;
      currentCart[idxItemInCart].amount += 1;
      this.setState({
        cart: currentCart,
      });
    }
  };

  // Sự kiện tăng số lượng cart item
  // onPlusAmountCartItem = (id, value) => {
  //   const currentCart = this.state.cart;
  //   const idxItemInCart = currentCart.findIndex((item) => item.id === id);

  //   currentCart[idxItemInCart].amount += value;
  //   this.setState({
  //     cart: currentCart,
  //   });
  // };

  // Sự kiện tăng số lượng cart item
  // onMinusAmountCartItem = (id) => {
  //   const currentCart = this.state.cart;
  //   const idxItemInCart = currentCart.findIndex((item) => item.id === id);
  //   currentCart[idxItemInCart].amount -= 1;
  //   this.setState({
  //     cart: currentCart,
  //   });
  // };

  // Xử lý tăng/giảm cart item
  onHandleAmountCartItemChange = (id, value) => {
    const currentCart = this.state.cart;
    const idxItemInCart = currentCart.findIndex((item) => item.id === id);
    currentCart[idxItemInCart].amount += value;
    this.setState({
      cart: currentCart,
    });
  };
  render() {
    const { products, selectedProduct, cart } = this.state;
    return (
      <div className="container pt-5">
        <h1 class="text-primary text-center mb-5">Thế giới di động</h1>
        <div className="d-flex justify-content-end">
          <a
            type="button"
            className="text-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Giỏ hàng ({cart.length})
          </a>
        </div>

        <ProductList
          products={products}
          onSelectedProduct={this.onSelectedProduct}
          onAddToCart={this.onAddToCart}
          onAddToCart={this.onAddToCart}
        />
        <ProductDetail productDetail={selectedProduct} />
        <Cart
          cart={cart}
          // onPlusAmountCartItem={this.onPlusAmountCartItem}
          // onMinusAmountCartItem={this.onMinusAmountCartItem}
          onHandleAmountCartItemChange={this.onHandleAmountCartItemChange}
        />
      </div>
    );
  }
}
