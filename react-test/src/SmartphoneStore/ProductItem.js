import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { name, price, img } = this.props.product;
    return (
      <div className="card p-2" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title mb-3">{name}</h5>
          <p>{price}</p>
          <a href="#" className="btn btn-success">
            Xem chi tiết
          </a>
        </div>
      </div>
    );
  }
}
