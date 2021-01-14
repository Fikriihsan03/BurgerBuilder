import Aux from "../../../hoc/Aux";
import BackDrop from "../Backdrop/BackDrop";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <Aux>
      <BackDrop show={props.appear} clicked={props.disappear} />
      <div
        className={classes.Modal}
        style={{
          transform: props.appear ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.appear ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};
export default Modal;
