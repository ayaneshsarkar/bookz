import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../../actions/authActions';
import FormValidator from '../../../helpers/FormValidator';
import ConfirmAddressDialog from './ConfirmAddressDialog';

class ConfirmAddress extends Component {

  state = {
    validator: new FormValidator(),
    errors: {},
    address: ''
  }

  componentDidMount() {
    this.setState({
      errors: this.state.validator.errors
    });
  }

  validateAllFields = () => {
    const validator = this.state.validator;

    validator.isString(this.state.address, 'address', true);

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
      const user = { ...this.props.user };
      user.address = this.state.address;

      await this.props.updateUser(user);
      this.props.closeAddress(false);
    }
  }

  render() {
    return (
      <ConfirmAddressDialog 
        open={this.props.open}
        closeAddress={this.props.closeAddress}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    );
  }

}

export default connect(null, { updateUser })(ConfirmAddress);