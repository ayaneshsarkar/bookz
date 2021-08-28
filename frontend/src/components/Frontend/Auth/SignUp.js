import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../../actions/authActions';
import Dialog from '@material-ui/core/Dialog';
import FormValidator from '../../../helpers/FormValidator';
import Sprite from '../../../assets/svg/feather-sprite.svg';
import SignUpForm from './SignUpForm';

class SignUp extends Component {

  state = {
    validator: new FormValidator(),
    errors: {},

    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    state: '',
    country: '',
    address: '',

    disabled: true
  }

  componentDidMount() {
    this.setState({
      errors: this.state.validator.errors
    });
  }

  controlDisabled() {
    if(Object.values(this.state).includes('')) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  }

  validateAllFields = () => {
    const validator = this.state.validator;

    validator.isString(this.state.first_name, "first name", true);
    validator.isString(this.state.last_name, "last name", true);
    validator.isEmail(this.state.email, "email", true);
    validator.isString(this.state.password, "password", true, 5, 16);
    validator.isMatch(this.state.confirmPassword, 'confirm password', this.state.password, 'password', true);
    // validator.isDate(this.state.date_of_birth, "date of birth");
    validator.isString(this.state.city, 'city', true);
    validator.isString(this.state.state, 'state', true);
    validator.isString(this.state.country, 'country', true);
    // validator.isImage(this.state.avatar, 'avatar');
    validator.isString(this.state.address, 'address', true);

    this.setState({
      errors: this.state.validator.errors
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });

    this.controlDisabled();
  }

  handleFileChange = (e) => {
    this.state.validator.isImage(e.target.files[0], "avatar");

    if(e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({
        profileImage: e.target.files[0].name,
        avatar: e.target.files[0]
      });
    } else {
      this.setState({
        profileImage: '',
        avatar: ''
      });
    }
  }

  handleSubmit = async (e, formRef) => {
    e.preventDefault();
    this.validateAllFields();

    if(!Object.keys(this.state.errors).length) {
      this.setState({ disabled: true });
      const formData = new FormData(formRef.current);

      try {
        await this.props.createUser(formData);
        this.props.setSignup(false);
      } catch(err) {
        console.log(err);
      }
    }
  }

  render() {
    return(
      <Dialog open={this.props.open} onClose={() => this.props.setSignup(false)} 
        classes={{ paper: 'br-none' }}
        maxWidth="lg">
        <div className="header__auth">
          <div className="header__auth--iconbox">
            <svg className="header__auth--icon">
              <use xlinkHref={`${Sprite}#user-plus`}></use>
            </svg>
          </div>

          <SignUpForm data={this.state} handleFileChange={this.handleFileChange} 
          handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      </Dialog>
    );
  }
}

export default connect(null, { createUser })(SignUp);