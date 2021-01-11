import Aux from "../../../hoc/Aux";

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
      <p>continue checkout ?</p>
    </Aux>
  );
};
export default OrderSummary;
