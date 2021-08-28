import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/authActions';
import Dialog from '@material-ui/core/Dialog';
import Sprite from '../../../assets/svg/feather-sprite.svg';
import LoginForm from './LoginForm';
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

  // controlDisabled() {
  //   if(Object.values(this.state).includes('')) {
  //     this.setState({ disabledLogin: true });
  //   } else {
  //     this.setState({ disabledLogin: false });
  //   }
  // }

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

    // this.controlDisabled();
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
      <Dialog open={this.props.open} onClose={() => this.props.setLogin(false)} 
      classes={{ paper: 'br-none' }}
      maxWidth="lg">
        <div className="header__auth">
          <div className="header__auth--iconbox">
            <svg className="header__auth--icon">
              <use xlinkHref={`${Sprite}#user-check`}></use>
            </svg>
          </div>

          <LoginForm data={this.state} handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} />
        </div>
      </Dialog>
    );
  }
}

export default connect(null, { login })(Login);