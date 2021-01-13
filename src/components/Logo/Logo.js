import logoImages from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logoImages} alt="myBurgerLogo" />
    </div>
  );
};
export default Logo;
