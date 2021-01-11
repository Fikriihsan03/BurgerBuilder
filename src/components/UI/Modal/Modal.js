import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: props.appear ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.appear ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  );
};
export default Modal;
