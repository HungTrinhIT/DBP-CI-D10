import React from "react";
import "./Header.css";
export const Header = ({ title, ...props }) => {
  return (
    <div className="py-3 px-5 header">
      <div className="d-flex justify-content-between align-items-center">
        <p className="header__title">{title}</p>
        <div className="header__cart">
          <i class="fa fa-cart-plus" aria-hidden="true"></i>
          <span>Your cart</span>
          <span className="header__cart-amount">0</span>
        </div>
      </div>
    </div>
  );
};
