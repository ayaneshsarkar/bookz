import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/authActions';
import LoginDialog from './LoginDialog';
import FormValidator from '../../../helpers/FormValidator';

class Login extends Component {

  state = {
    validator: new FormValidator(),
    errors: {},
    email: '',
    password: '',
    disabledLogin: false
  }

  componentDidMount() {
    this.setState({
      errors: this.state.validator.errors
    });
  }

  validateAllFields = () => {
    const validator = this.state.validator;

    validator.isEmail(this.state.email, 'email', true);
    validator.isString(this.state.password, 'password', true, 5, 16);

    this.setState({
      errors: this.state.validator.errors
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.validateAllFields();

    if(!Object.keys(this.state.errors).length) {
      this.setState({ disabledLogin: true });

      const currentState = { ...this.state };
      await this.props.login(currentState);
    }
  }

  render() {
    return (
      <LoginDialog 
        open={this.props.open}
        setLogin={this.props.setLogin}
        data={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, { login })(Login);