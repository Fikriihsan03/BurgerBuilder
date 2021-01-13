import classes from "./ToolBar.module.css";
import Logo from "../../Logo/Logo";

const ToolBar = (props) => {
  return (
    <header className={classes.ToolBar}>
      <div>MENU</div>
      <Logo />
      <nav></nav>
    </header>
  );
};
export default ToolBar;
