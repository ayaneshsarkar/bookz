import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getCategories, deleteCategory } from '../../../actions';
import Head from '../../../containers/Helmet';
import AdminUX from '../../../containers/AdminUX';
import Header from '../Header';
import AdminBox from '../../../containers/AdminBox';
import CategoryTable from './CategoryTable';

class AllCategories extends Component {

  state = {
    categories: [],
    isLoaded: false,
  }

  componentDidMount() {
    this.props.getCategories();
  }

  componentDidUpdate() {
    if(this.props.categories && !this.state.isLoaded) {
      this.setState({
        categories: this.props.categories,
        isLoaded: true
      });
    }
  }

  deleteCategoryProcess = async (id) => {
    await this.props.deleteCategory(id);
    this.setState({
      categories: this.props.categories
    });
  }

  render() {
    return (
      <Fragment>
        <Head title="Recommerce Admin - All Categories" />
        <AdminUX>
          <Header title="All Categories" search={false} add={true}
          addLink={'/admin/add-category'} />
          <AdminBox table={true}>
            { this.state.isLoaded && 
              <CategoryTable categories={this.state.categories} 
                deleteCategoryProcess={this.deleteCategoryProcess} /> 
            }
          </AdminBox>
        </AdminUX>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { categories: Object.values(state.categories) }
};

export default connect(mapStateToProps, { getCategories, deleteCategory })(AllCategories);