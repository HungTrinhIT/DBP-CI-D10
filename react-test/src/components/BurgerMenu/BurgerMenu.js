import React from "react";
import Button from "../Button/Button";
import "./BurgerMenu.css";
const BurgerMenu = ({
  menu,
  order,
  onHandleIngredientItem,
  onResetOrder,
  onOrder,
  ...props
}) => {
  // Calc total price
  let total = 0;
  for (let item of menu) {
    const toppingKey = item.key;
    total += item[toppingKey] * order[toppingKey];
  }
  return (
    <div className="burger-menu">
      <h4 className="text-center pb-3">Custom your burger</h4>
      <div className="burger-menu__main">
        <table className="table text-center">
          <thead>
            <tr>
              <td>Topping</td>
              <td>Amount</td>
              <td>Unit price</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {menu &&
              menu.map((item) => {
                const toppingKey = item.key;
                return (
                  <tr key={item.key}>
                    <td>{item.label}</td>
                    <td>
                      <Button
                        text="Less"
                        onClick={() => onHandleIngredientItem(toppingKey, -1)}
                        color="var(--bg-color-primary)"
                        disabled={order[toppingKey] === 0}
                      />
                      <span className="ingredient-amount">
                        {order[toppingKey]}
                      </span>
                      <Button
                        text="More"
                        color="var(--bg-color-primary)"
                        onClick={() => onHandleIngredientItem(toppingKey, 1)}
                      />
                    </td>
                    <td>{item[toppingKey]}</td>
                    <td>{item[toppingKey] * order[toppingKey]}</td>
                  </tr>
                );
              })}

            <tr>
              <td>
                <strong>Total price</strong>
              </td>
              <td colSpan={2}></td>
              <td>
                <strong>{total} $</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <Button
            text="Reset"
            className="mr-2"
            color="var(--bg-color-secondary)"
            onClick={onResetOrder}
          />
          <Button
            text="Order now"
            color="var(--bg-color-primary)"
            onClick={onOrder}
          />
        </div>
      </div>
    </div>
  );
};
export default BurgerMenu;
