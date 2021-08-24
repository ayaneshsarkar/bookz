import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createCategory } from '../../../actions';
import FormValidator from '../../../helpers/FormValidator';
import Head from '../../../containers/Helmet';
import AdminUX from '../../../containers/AdminUX';
import Header from '../Header';
import AdminBox from '../../../containers/AdminBox';
import CategoryForm from './CategoryForm';

class AddCategory extends Component {

  state = {
    validator: new FormValidator(),
    errors: {},
    submit: false,
    name: ''
  };

  componentDidMount() {
    this.setState({
      errors: this.state.validator.errors
    });
  }

  componentDidUpdate() {
    if(this.state.submit && Object.keys(this.props.categories).length) {
      this.setState({ submit: false });
      
      // Swal.fire({
      //   icon: 'success',
      //   title: 'Category Created',
      //   text: 'Your Category has been successfully created!',
      // });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleReset = () => {
    this.setState({
      submit: true,
      name: ''
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.state.validator.isString(this.state.name, 'category name', true);
    this.setState({ errors: this.state.validator.errors });

    if(Object.keys(this.state.errors).length === 0) {
      const currentState = { ...this.state };
      this.props.createCategory(currentState);

      this.handleReset();
    }
  }

  render() {
    return (
      <Fragment>
        <Head title="Recommerce Admin - Add Category" />
        <AdminUX>
          <Header title="Add Category" search={false} />
          <AdminBox>
            <CategoryForm data={ this.state } onSubmit={this.handleSubmit} 
            onChange={this.handleChange} />
          </AdminBox>
        </AdminUX>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    createCategory: category => dispatch(createCategory(category))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);