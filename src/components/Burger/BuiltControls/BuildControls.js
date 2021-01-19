import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import NumberFormat from "react-number-format";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        <strong>
          <NumberFormat
            value={props.price}
            displayType={"text"}
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix={"Rp. "}
          />
        </strong>
      </p>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            added={() => props.ingredientsAdded(control.type)}
            remove={() => props.removeIngredients(control.type)}
            disabled={props.disabledInfo[control.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.purchased}
      >
        ORDER NOW
      </button>
    </div>
  );
};
export default BuildControls;
