import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getCategory, editCategory } from '../../../actions';
import FormValidator from '../../../helpers/FormValidator';
import Head from '../../../containers/Helmet';
import AdminUX from '../../../containers/AdminUX';
import Header from '../Header';
import AdminBox from '../../../containers/AdminBox';
import CategoryForm from './CategoryForm';
import history from '../../../config/history';

class EditCategory extends Component {

  state = {
    validator: new FormValidator(),
    errors: {},
    id: this.props.match.params.id,
    name: '',
    isLoaded: false
  }

  componentDidMount() {
    this.setState({
      errors: this.state.validator.errors
    });

    this.props.getCategory(this.state.id);

    console.log(this.props);
  }

  componentDidUpdate() {
    if(this.props.category && !this.state.isLoaded) {
      this.setState({
        name: this.props.category.name,
        isLoaded: true
      });
    }
  }

  handleReset = () => {
    this.setState({
      name: ''
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    this.state.validator.isString(this.state.name, 'category name', true);
    this.setState({ errors: this.state.validator.errors });

    if(!Object.keys(this.state.errors).length) {
      const currentState = { ...this.state };
      await this.props.editCategory(currentState);

      this.handleReset();
      this.props.history.push('/admin/categories');
    }
  }

  render() {
    if(!this.props.user || this.props.user.type !== 'admin') {
      history.push('/');
      return <></>;
    } else {
      return (
        <Fragment>
          <Head title="Recommerce Admin - Edit Category" />
          <AdminUX path={this.props.match.path}>
            <Header title="Edit Category" search={false} add={true} 
            addLink={'/admin/add-category'} />
            <AdminBox>
              <CategoryForm data={ this.state } onSubmit={this.handleSubmit} 
              onChange={this.handleChange} buttonText="Update" />
            </AdminBox>
          </AdminUX>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    category: state.categories[ownProps.match.params.id],
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { getCategory, editCategory })(EditCategory);