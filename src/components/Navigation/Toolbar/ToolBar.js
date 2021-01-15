import classes from "./ToolBar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const ToolBar = (props) => {
  return (
    <header className={classes.ToolBar}>
      {/* tombol toggle sideDrawer yang ada saat di handphone saja, props mengacu pada layout.js*/}
      <div onClick={props.toggleSideDrawer} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Logo />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};
export default ToolBar;
