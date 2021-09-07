import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/authActions';
import ChangePasswordDialog from './ChangePasswordDialog';
import FormValidator from '../../../helpers/FormValidator';

class ChangePassword extends Component {

  state = {
    validator: new FormValidator(),
    errors: {},
    password: '',
    confirmPassword: '',
    disabledLogin: false
  }

  componentDidMount() {
    this.setState({
      errors: this.state.validator.errors
    });
  }

  validateAllFields = () => {
    const validator = this.state.validator;

    validator.isString(this.state.password, 'password', true, 5, 16);
    validator.isMatch(this.state.confirmPassword, 'confirm password', this.state.password, 'password', true);

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
      <ChangePasswordDialog 
        open={this.props.open}
        setChange={this.props.setChange}
        data={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, { login })(ChangePassword);