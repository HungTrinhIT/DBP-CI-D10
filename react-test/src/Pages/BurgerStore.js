import React, { Component } from "react";
import BurgerBuilder from "../components/BurgerBuilder/BurgerBuilder";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import { Footer } from "../Layouts/Footer/Footer";
import { Header } from "../Layouts/Header/Header";
import "./BurgerStore.css";
class BurgerStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0,
      },
      menu: [
        {
          salad: 10,
          label: "Salad",
          key: "salad",
        },
        {
          cheese: 20,
          label: "Cheese",
          key: "cheese",
        },
        {
          meat: 25,
          label: "Meat",
          key: "meat",
        },
        {
          bacon: 28,
          label: "Bacon",
          key: "bacon",
        },
      ],
    };
  }

  onHandleIngredientItem = (type, value) => {
    this.setState({
      order: {
        ...this.state.order,
        [type]: this.state.order[type] + value,
      },
    });
  };

  onResetOrder = () => {
    this.setState({
      order: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0,
      },
    });
  };
  onOrder = () => {
    alert(
      "Chỗ này tự build cai modal popup rùi thông báo đơn order, rùi reset lại form nha :)) lười làm quá"
    );
    this.setState({
      order: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0,
      },
    });
  };
  render() {
    const { order, menu } = this.state;
    return (
      <>
        <Header title="ArsenalBurger" />
        <div className="burger-container">
          <h2 className="text-white py-3 text-center">
            The best Burger all around the world
            <i class="fa fa-coffee ml-2"></i>
          </h2>
          <div className="burger__main container">
            <div className="burger__main-item left">
              <BurgerBuilder order={order} />
            </div>
            <div className=" burger__main-item right">
              <BurgerMenu
                onHandleIngredientItem={this.onHandleIngredientItem}
                menu={menu}
                order={order}
                onOrder={this.onOrder}
                onResetOrder={this.onResetOrder}
              />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default BurgerStore;
