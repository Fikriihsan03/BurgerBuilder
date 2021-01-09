import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient";

const Burger = (props) => {
  let formattedIngredient = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (formattedIngredient.length === 0) {
    formattedIngredient = <p>please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {formattedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;
