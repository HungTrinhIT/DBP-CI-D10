import React, { Component } from "react";
import currencyFormatter from "currency-formatter";
class Modal extends Component {
  render() {
    const { cart, onPlusCartItem, onMinusCartItem, onChangeAmountCartItem } =
      this.props;

    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += +item.price * item.amount;
    }

    return (
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
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
            <div className="modal-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>Tên SP</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length === 0 ? (
                    <p>Cart empty</p>
                  ) : (
                    cart.map((cartItem, index) => {
                      const { name, img, price, amount, id } = cartItem;
                      return (
                        <tr key={index}>
                          <td>{name}</td>
                          <td>
                            <img
                              src={img}
                              style={{
                                width: "32px",
                                height: "auto",
                                objectFit: "cover",
                              }}
                              alt={name}
                            />
                          </td>
                          <td className="d-flex align-items-center">
                            <button
                              className="btn btn-primary"
                              onClick={() => onChangeAmountCartItem(id, -1)}
                              disabled={amount <= 1 ? true : false}
                            >
                              -
                            </button>
                            <span className="mx-2">{cartItem.amount}</span>
                            <button
                              className="btn btn-primary"
                              onClick={() => onChangeAmountCartItem(id, 1)}
                            >
                              +
                            </button>
                          </td>
                          <td>{price}</td>
                          <td>{price * amount}</td>
                        </tr>
                      );
                    })
                  )}
                  <tr>
                    <td colspan={6}>
                      <p>
                        {/* {cur  rencyFormatter.format(totalPrice, {
                          code: "VND",
                          decimalSeparator: ".",
                        })}
                         */}
                        {new Intl.NumberFormat("en-vn", {
                          style: "currency",
                          currency: "VND",
                        }).format(totalPrice)}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
    );
  }
}

export default Modal;
