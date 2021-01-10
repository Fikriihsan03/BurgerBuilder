import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
// import BuildControl from "../../components/Burger/BuiltControls/BuildControls";
import BuildControls from "../../components/Burger/BuiltControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.6,
  meat: 1,
  cheese: 0.5,
};

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        meat: 0,
        bacon: 0,
        cheese: 0,
      },
      totalPrice: 4,
      purchasable: false,
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
  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} add />
        <BuildControls
          ingredientsAdded={this.addIngredientHandler}
          removeIngredients={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
