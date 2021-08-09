import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    const { products, onSelectedProduct } = this.props;
    return (
      <div className="row">
        {products.map((productItem, index) => {
          return (
            <div className="col-12 col-sm-6 col-lg-4">
              <ProductItem
                onSelectedProduct={onSelectedProduct}
                product={productItem}
                key={index}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
