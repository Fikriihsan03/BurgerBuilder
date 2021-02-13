import React from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
class ContactData extends React.Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
      },
      zipcode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP code",
        },
        value: "",
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Country",
        },
        value: "",
      },
      deliveryType: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
      },
    },
    loading: false,
  };
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = {
      ...this.state.orderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.prices,
      orderData: formData,
    };
    console.log(order.orderData);
    axios
      .post("/orders.json", order)
      .then((res) => {
        console.log(res);
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((err) => this.setState({ loading: false }));
  };
  render() {
    let formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            changed={(event) => {
              this.inputChangedHandler(event, formElement.id);
            }}
            // value={formElement.config.value}
          />
        ))}
        <Button btnType="Success">ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>enter your contact data</h4>
        {form}
      </div>
    );
  }
}
export default ContactData;
