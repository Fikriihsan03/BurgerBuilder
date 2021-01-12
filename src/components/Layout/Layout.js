import Aux from "../../hoc/Aux";
import ToolBar from "../Navigation/Toolbar/ToolBar";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <Aux>
      <ToolBar />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};
export default Layout;
