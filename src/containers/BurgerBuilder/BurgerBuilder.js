import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuiltControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import CatchError from "../../hoc/Error/CatchError";
import * as actionTypes from "../../store/actions";
import { connect } from "react-redux";
import axios from "../../axios-orders";

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: false,
    };
  }
  // componentDidMount() {
  //   // console.log(this.props);
  //   axios
  //     .get(
  //       "https://react-my-burger-480a3-default-rtdb.firebaseio.com/ingredients.json"
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({ ingredients: response.data });
  //     })
  //     .catch((error) => {
  //       this.setState({ error: true });
  //     });
  // }
  purchaseableHandler = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };
  cancelPurchasing = () => {
    this.setState({ purchasing: false });
  };
  continuePurchasing = () => {
    this.setState({ loading: true });
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
      ...this.props.ings,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.state.error ? (
      <p style={{ textAlign: "center" }}>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    console.log(this.props.ings);
    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} add />
          <BuildControls
            ingredientsAdded={this.props.onIngredientAdded}
            removeIngredients={this.props.onIngredientRemoved}
            disabledInfo={disabledInfo}
            purchasable={this.purchaseableHandler(this.props.ings)}
            purchased={this.purchasingHandler}
            price={this.props.price}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          price={this.props.price}
          ingredients={this.props.ings}
          continuePurchasing={this.continuePurchasing}
          cancelPurchasing={this.cancelPurchasing}
        />
      );
    }
    return (
      <Aux>
        <Modal appear={this.state.purchasing} disappear={this.cancelPurchasing}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingsName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingsName }),
    onIngredientRemoved: (ingsName) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingsName,
      }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatchError(BurgerBuilder, axios));
