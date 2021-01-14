import Aux from "../../hoc/Aux";
import React from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import ToolBar from "../Navigation/Toolbar/ToolBar";
import classes from "./Layout.module.css";
class Layout extends React.Component {
  render() {
    return (
      <Aux>
        <ToolBar />
        <SideDrawer />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
