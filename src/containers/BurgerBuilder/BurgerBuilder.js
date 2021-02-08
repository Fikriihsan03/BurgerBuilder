import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuiltControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import CatchError from "../../hoc/Error/CatchError";
import axios from "../../axios-orders";

const INGREDIENT_PRICES = {
  salad: 1000,
  bacon: 2000,
  meat: 5000,
  cheese: 3000,
};

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 0,
      purchasable: false,
      purchasing: false,
      loading: false,
    };
  }
  purchaseableHandler = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
    this.purchaseableHandler(updatedIngredients);
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - priceDeduction;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
    this.purchaseableHandler(updatedIngredients);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };
  cancelPurchasing = () => {
    this.setState({ purchasing: false });
  };
  continuePurchasing = () => {
    // this.setState({ loading: true });
    // // alert("you continued");
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Muhammad Fikri Ihsan",
    //     email: "test@test.com",
    //     address: "jln gaperta",
    //     country: "Indonesia",
    //     city: "Medan",
    //   },
    //   deliveryType: "express",
    // };
    // axios
    //   .post("/orders", order)
    //   .then((res) => {
    //     // console.log(res);
    //     this.setState({ loading: false, purchasing: false });
    //   })
    //   .catch((err) => this.setState({ loading: false, purchasing: false }));
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = (
      <OrderSummary
        price={this.state.totalPrice}
        ingredients={this.state.ingredients}
        continuePurchasing={this.continuePurchasing}
        cancelPurchasing={this.cancelPurchasing}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal appear={this.state.purchasing} disappear={this.cancelPurchasing}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} add />
        <BuildControls
          ingredientsAdded={this.addIngredientHandler}
          removeIngredients={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          purchasable={this.state.purchasable}
          purchased={this.purchasingHandler}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}
export default CatchError(BurgerBuilder, axios);
