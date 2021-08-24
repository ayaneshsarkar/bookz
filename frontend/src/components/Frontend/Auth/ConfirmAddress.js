import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import { updateUser } from '../../../actions/authActions';
import FormValidator from '../../../helpers/FormValidator';
import InputBox from '../../UI/InputBox';

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
      <Dialog 
        open={this.props.open} 
        onClose={() => this.props.closeAddress(false)}
        classes={{ paper: 'br-none' }}
        maxWidth="lg"
      >
        <div className="header__auth">
          <form className="auth__form" onSubmit={this.handleSubmit}>
            <InputBox
              parentClass="auth__form--box full-width noMargin"
              label="Address"
              auth={true}
              error={this.state.errors.address}
              textarea={true}
            >
              <textarea name="address" rows="5" className="auth__form--input"
              placeholder="Address"
              value={this.state.address}
              onChange={this.handleChange}></textarea>
            </InputBox>

            <div className="auth__form--box noMargin">
              <button className="auth__form--button" style={{ marginTop: '19rem' }}>
                Save Address
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    );
  }

}

export default connect(null, { updateUser })(ConfirmAddress);