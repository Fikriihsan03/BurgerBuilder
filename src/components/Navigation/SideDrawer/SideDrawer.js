import Logo from "../../Logo/Logo";
import Aux from "../../../hoc/Aux";
import BackDrop from "../../UI/Backdrop/BackDrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

const SideDrawer = () => {
  return (
    <Aux>
      <BackDrop show />
      <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};
export default SideDrawer;
