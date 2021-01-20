import React from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux";

const CatchError = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null,
    };
    componentDidMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }
    errorConfirmed = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          <Modal appear={this.state.error} disappear={this.errorConfirmed}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};
export default CatchError;
