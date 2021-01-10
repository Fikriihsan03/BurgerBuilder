import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>{props.price}k</p>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            // type={control.label}
            label={control.label}
            added={() => props.ingredientsAdded(control.type)}
            remove={() => props.removeIngredients(control.type)}
            disabled={props.disabledInfo[control.type]}
          />
        );
      })}
    </div>
  );
};
export default BuildControls;
