import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(" ")}
      disabled={props.disabled}
      onClick={props.clickedButton}
    >
      {props.children}
    </button>
  );
};
export default Button;
