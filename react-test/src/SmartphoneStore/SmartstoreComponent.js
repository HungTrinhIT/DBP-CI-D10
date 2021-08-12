import React, { Component } from "react";
import Modal from "./Modal";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

const findProductByID = (arr, id) => {
  return arr ? arr.findIndex((ele) => ele.id === id) : -1;
};
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

  // Thêm sản phẩm vào giỏ hàng
  onAddToCart = (addedItem) => {
    const { cart, products } = this.state;

    // Tìm xem item đã tồn tại trong cart hay chưa
    const idxItemInCart = this.state.cart.findIndex(
      (cartItem) => cartItem.id === addedItem.id
    );

    // Trường hợp chưa tồn tại trong giỏ hàng
    if (idxItemInCart === -1) {
      addedItem.amount = 1;
      this.setState({
        cart: [...cart, addedItem],
      });
    } else {
      cart[idxItemInCart].amount += 1;
      this.setState({
        cart: cart,
      });
    }
  };

  // Improve chức năng tăng giảm số lượng
  onChangeAmountCartItem = (id, value) => {
    const { cart } = this.state;
    const idxItemInCart = cart.findIndex((item) => item.id === id);

    cart[idxItemInCart].amount += value;
    this.setState({
      cart: cart,
    });
  };

  // Tăng số lượng sản phẩm của cart item
  // onPlusCartItem = (id) => {
  //   const { cart } = this.state;
  //   const idxItemInCart = cart.findIndex((item) => item.id === id);

  //   cart[idxItemInCart].amount += 1;
  //   this.setState({
  //     cart: cart,
  //   });
  // };

  // Giảm số lượng sản phẩm của cart item
  onMinusCartItem = (id) => {
    const { cart } = this.state;
    const idxItemInCart = cart.findIndex((item) => item.id === id);

    cart[idxItemInCart].amount -= 1;
    this.setState({
      cart: cart,
    });
  };

  render() {
    const { products, selectedProduct, cart } = this.state;
    return (
      <div className="container pt-5">
        <h1 class="text-primary text-center mb-5">Thế giới di động</h1>
        <div className="mb-3 ">
          <a
            type="button "
            className="text-success text-end d-block fs-4"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Giỏ hàng
            <span>{cart.length}</span>
          </a>
        </div>
        <ProductList
          products={products}
          onSelectedProduct={this.onSelectedProduct}
          onAddToCart={this.onAddToCart}
        />
        <ProductDetail productDetail={selectedProduct} />

        <Modal
          cart={cart}
          onPlusCartItem={this.onPlusCartItem}
          onMinusCartItem={this.onMinusCartItem}
          onChangeAmountCartItem={this.onChangeAmountCartItem}
        />
      </div>
    );
  }
}
