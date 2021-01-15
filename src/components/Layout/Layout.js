import Aux from "../../hoc/Aux";
import React from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import ToolBar from "../Navigation/Toolbar/ToolBar";
import classes from "./Layout.module.css";
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false,
    };
  }
  sideDrawerTogglerHandler = () => {
    if (this.state.showSideDrawer === false) {
      this.setState({ showSideDrawer: true });
    } else {
      this.setState({ showSideDrawer: false });
    }
  };
  render() {
    return (
      <Aux>
        <ToolBar toggleSideDrawer={this.sideDrawerTogglerHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerTogglerHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
