import React, { Component } from "react";
import IngredientItem from "../IngredientItem/IngredientItem";
import "./BurgerBuilder.css";

export default class BurgerBuilder extends Component {
  render() {
    const { order } = this.props;

    const isOrder = Object.values(order).some((item) => item !== 0);

    // To render the topping of burger
    const burgerContent = [];
    for (const key in order) {
      const value = order[key];
      for (let i = 0; i < value; i++) {
        const ingredient = <IngredientItem type={key} key={key + i} />;
        burgerContent.push(ingredient);
      }
    }
    return (
      <div className="burger-builder">
        <div className="box">
          <div className="bread-top">
            <div className="seeds" />
            <div className="seeds2" />
          </div>
          {isOrder ? (
            burgerContent
          ) : (
            <p class="text-center">Please choose your favorite topping</p>
          )}
          <div className="bread-bottom" />
        </div>
      </div>
    );
  }
}
