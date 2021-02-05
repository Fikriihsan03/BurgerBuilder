import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = (props) => {
  return (
    <div>
      <div className={classes.CheckoutSummary}>
        <h1>We hope it taste well</h1>
      </div>
      <Burger ingredients={props.ingredients} height="430px" />
      <div className={classes.CheckoutSummary}>
        <Button btnType="Danger" clickedButton={props.checkoutCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clickedButton={props.checkoutContinued}>
          SUCCESS
        </Button>
      </div>
    </div>
  );
};
export default CheckoutSummary;
