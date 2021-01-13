import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

const SideDrawer = () => {
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav clasName={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </div>
  );
};
export default SideDrawer;
