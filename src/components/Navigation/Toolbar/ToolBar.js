import classes from "./ToolBar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const ToolBar = (props) => {
  return (
    <header className={classes.ToolBar}>
      <div>MENU</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};
export default ToolBar;
