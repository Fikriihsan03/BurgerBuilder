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
      {controls.map((control) => {
        return <BuildControl type={control.label} label={control.label} />;
      })}
    </div>
  );
};
export default BuildControls;
