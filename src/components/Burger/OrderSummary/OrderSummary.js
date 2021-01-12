import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span> :{" "}
        {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>YOUR ORDER</h3>
      <p>A delicious Burger with the following ingredients :</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price : {props.price} K</strong>
      </p>
      <p>continue checkout ?</p>
      <Button btnType="Danger" clickedButton={props.cancelPurchasing}>
        Cancel
      </Button>
      <Button btnType="Success" clickedButton={props.continuePurchasing}>
        Continue
      </Button>
    </Aux>
  );
};
export default OrderSummary;
