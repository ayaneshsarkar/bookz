import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../../actions/authActions';
import FormValidator from '../../../helpers/FormValidator';
import UpdateUserDialog from './UpdateUserDialog';

class UpdateUser extends Component {

  state = {
    validator: new FormValidator(),
    errors: {},

    first_name: '',
    last_name: '',
    email: '',
    city: '',
    state: '',
    country: '',
    address: '',

    disabled: true,
    updated: false
  }

  componentDidMount() {
    this.setState({
      errors: this.state.validator.errors
    });

    if(this.props.user) {
      this.setState({
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name,
        email: this.props.user.email,
        city: this.props.user.city,
        state: this.props.user.state,
        country: this.props.user.country,
        address: this.props.user.address,
        disabled: false,
        updated: true
      });
    }
  }

  componentDidUpdate() {
    if(this.props.user && !this.state.updated) {
      this.setState({
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name,
        email: this.props.user.email,
        city: this.props.user.city,
        state: this.props.user.state,
        country: this.props.user.country,
        address: this.props.user.address,
        disabled: false,
        updated: true
      });
    }
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
    validator.isString(this.state.city, 'city', true);
    validator.isString(this.state.state, 'state', true);
    validator.isString(this.state.country, 'country', true);
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
      <UpdateUserDialog 
        data={this.state} 
        handleFileChange={this.handleFileChange} 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        open={this.props.open}
        setEdit={this.props.setEdit}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { createUser })(UpdateUser);